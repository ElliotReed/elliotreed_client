import React from "react";
import { HeadFC } from "gatsby";

import ProfileHeader from "../../components/ProfileHeader";
import { Seo } from "../../components/SEO";

import * as styles from "./musician.module.scss"

const MusicianPage = () => {
  return (
    <main>
      <ProfileHeader type="musician" />
    </main>
  );
}

export default MusicianPage

export const Head: HeadFC<string> = () => (
  <Seo title="Elliot Reed | Musician" />
)