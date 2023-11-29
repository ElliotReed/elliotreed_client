import React from "react"
import { HeadFC } from 'gatsby'

import ProfileHeader from "../../components/ProfileHeader"
import { Seo } from "../../components/SEO"

import * as styles from "./developer.module.scss"

export default function DeveloperPage() {
  return (
    <main>
      <ProfileHeader type="developer" />
    </main>
  );
}

export const Head: HeadFC<string> = () => (
  <Seo title="Elliot Reed | Developer" />
)