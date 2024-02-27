import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useLayoutEffect } from "react";
import * as styles from "./sending.module.scss";

export interface SendingProps {
  shouldAnimate?: boolean
}

export default function Sending({ shouldAnimate = false }: Readonly<SendingProps>) {
  const mail = useRef<SVGSVGElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (shouldAnimate && mail.current && container.current) {
      const xDuration = 1.5;
      const tl = gsap.timeline({
        repeat: -1,
      })
      let ctx = gsap.context(() => {
        tl.to(mail.current, {
          rotation: 360,
          duration: xDuration / 2,
          ease: 'none',
          repeat: 3,
        }, "<");
        tl.to(mail.current, {
          scale: 1.29,
          duration: xDuration / 2,
          yoyo: true,
          repeat: 3,
          ease: 'none',
        }, "<")
      })

      return () => {
        ctx.revert()
      }
    }
  },
    [shouldAnimate])
  return (
    <div ref={container} className={styles.sending}>
      <FontAwesomeIcon ref={mail} icon={faEnvelope} />
    </div>
  );
}