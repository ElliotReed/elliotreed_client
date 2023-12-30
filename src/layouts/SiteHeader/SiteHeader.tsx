import * as React from "react";

import classnames from "classnames";
import { Link } from "gatsby";
import { gsap } from "gsap";

import CollapsibleHeader from "../../components/CollapsibleHeader/CollapsibleHeader";
import { GlobalStateContext } from "../../context/GlobalContextProvider";
import Logo from "../../components/Logo";

import * as styles from "./site-header.module.scss";

function logoAnimation(type: string, mode: string) {
  let animation
  if (type !== mode) {
    if (type === "developer") {
      animation = "SWITCH_TO_DEVELOPER"
    }
    if (type === "musician") {
      animation = "SWITCH_TO_MUSICIAN"
    }
  }
  if (type === mode) {
    if (type === "developer") {
      animation = "SET_TO_DEVELOPER"
    }
    if (type === "musician") {
      animation = "SET_TO_MUSICIAN"
    }
  }

  return animation
}

function Aspect({ type }: Readonly<{ type: string }>) {
  const aspectMenuDiv = React.useRef<HTMLDivElement | null>(null);
  const currentFacet = type;
  const otherFacet = type === "developer" ? "musician" : "developer";
  const duration = 0.3;

  const handleMouseEnter = () => {
    gsap
      .fromTo(
        aspectMenuDiv.current,
        { rotateX: 93 },
        { duration: duration, rotateX: 0, ease: "bounce" }
      )
  };

  const handleMouseLeave = () => {
    gsap.to(aspectMenuDiv.current, { duration: duration, rotateX: -93 })
  };

  return (
    <nav
      className={styles.aspect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={`/${currentFacet}`}
        className={styles.qualifierText}
        onFocus={handleMouseEnter}
      >
        {currentFacet}
      </Link>

      <div
        ref={(element) => {
          aspectMenuDiv.current = element
        }}
        className={classnames(styles.aspectMenu)}
      >
        <Link
          onBlur={handleMouseLeave}
          className={classnames(styles.qualifierText)}
          to={`/${otherFacet}`}
        >
          {otherFacet}
        </Link>
      </div>
    </nav>
  );
}

interface SiteHeaderProps {
  type: string,
  children: React.ReactNode,
}

/*
  state.mode is used to determine
  if the site context(musician | developer) has changed
  to run header animation only on new context
*/
export default function SiteHeader({ type, children }: Readonly<SiteHeaderProps>) {
  const state = React.useContext(GlobalStateContext);

  return (
    <CollapsibleHeader className={styles.header}>
      <div className={styles.navBrand}>
        <Link to="/">
          <div className={styles.logoWrapper}>
            <Logo width="2.5rem" mode={type} animation={logoAnimation(type, state.mode)} />
            <span className={styles.title}>Elliot Reed</span>
          </div>
        </Link>

        <Aspect type={type} />
      </div>
      {children}
    </CollapsibleHeader>
  )
}
