import React from "react";

import { HeadFC } from "gatsby";

import MaxWidthContainer from "../components/MaxWidthContainer";
import Paragraph from "../components/UI/Paragraph";
import ProfileHeader from "../components/ProfileHeader";
import Seo from "../components/SEO";

import * as styles from "./index.module.scss"

export default function MusicianPage() {
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

export const Head: HeadFC<string> = () => (
  <Seo />
)