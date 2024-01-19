import React from "react";
import { HeadFC } from "gatsby";

import ProfileHeader from "../components/ProfileHeader";
import Seo from "../components/SEO";

import * as styles from "./musician.module.scss"
import Paragraph from "../components/UI/Paragraph";
import MaxWidthContainer from "../components/MaxWidthContainer";

const MusicianPage = () => {
  return (
    <main className={styles.musicianPage}>
      <ProfileHeader type="musician" />
      <MaxWidthContainer>
        <div className={styles.blurb}>
          <Paragraph>
            I  <em>arrange</em>, <em>compose</em>, <em>perform</em>, and <em>teach</em> music.
          </Paragraph>
        </div>
      </MaxWidthContainer>
    </main>
  );
}

export default MusicianPage

export const Head: HeadFC<string> = () => (
  <Seo />
)