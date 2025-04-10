import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./profile-header.module.scss";

interface ProfileProps {
  type: "developer" | "musician",
}

export default function ProfileHeader({ type }: Readonly<ProfileProps>) {
  const LAYOUT = "fullWidth";
  const PLACEHOLDER = "blurred";
  const IMAGE_WRAPPER_CLASS = styles.profileHeader__imageWrapper;
  const IMAGE_CLASS_NAME = styles.profileHeader__image;

  return (
    <section className={styles.profileHeader}>
      {type === 'musician' &&
        <StaticImage
          src="../../images/gypsy-swing-revue-1.jpg"
          alt="The band Gypsy Swing Revue performing live against a city backdrop, with violin, lead guitar, upright bass, and rhythm guitar."
          formats={["auto", "webp", "avif"]}
          className={IMAGE_WRAPPER_CLASS}
          imgClassName={IMAGE_CLASS_NAME}
          layout={LAYOUT}
          loading="eager"
          placeholder={PLACEHOLDER}
        />
      }
      <h1 className={styles.profileHeader__text}>
        I am a {type} living and working in the Denver Metro area.
      </h1>
    </section>
  )
}
