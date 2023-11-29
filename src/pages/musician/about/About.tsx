import React from "react";

import ExternalLink from "../../../components/ExternalLink";
import Heading from "../../../components/Heading";
import MaxWidthContainer from "../../../components/MaxWidthContainer";

import * as styles from "./about.module.scss";

export default function AboutMusician() {
  return (
    <main className={styles.aboutMe}>
      <MaxWidthContainer>
        <Heading level={1}>Music and Me</Heading>
        <p>My primary instrument is guitar, I also sing.</p>
        <p>
          My musical focus is anything that swings! (gypsy jazz, jazz, western
          swing). I also perform in the rock, pop, reggae, and country styles.
        </p>
        <p>
          My primary project is <ExternalLink to="https://www.gypsyswingrevue.com" target="_self">Gypsy Swing Revue</ExternalLink>, a gypsy jazz band in the style of the Hot Club of France.
        </p>
        <p> I compose, arrange and teach music.</p>
      </MaxWidthContainer>
    </main>
  )
}