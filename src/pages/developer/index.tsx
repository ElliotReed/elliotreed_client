import React from "react"
import { HeadFC } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Logo from "../../components/Logo"
import { ProfileHeader } from "../../components/ProfileHeader"
import { DeveloperProfile } from "../../components/ProfileInfo"
import { Seo } from "../../components/SEO"
import MaxWidthContainer from "../../components/MaxWidthContainer/MaxWidthContainer"

import * as styles from "./developer.module.scss"

export default function DeveloperPage() {
  const text =
    "I am a web developer living and working in the greater Denver Metro area."

  return (
    <main>
      <div className={styles.profileWrapper}>
        <MaxWidthContainer>
          <ProfileHeader text={text}>
            <StaticImage
              src="../../images/elliot_profile-dev-348.jpg"
              alt="pic"
              layout="constrained"
              width={300}
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
            />
          </ProfileHeader>
        </MaxWidthContainer>
      </div>
      <div className={styles.windowImage}>
        <Logo
          mode="developer"
          width="200px"
          animation="DEVELOPER_PAGE_DISPLAY"
        />
      </div>
      <div className={styles.infoWrapper}>
        <MaxWidthContainer>
          <DeveloperProfile />
        </MaxWidthContainer>
      </div>
    </main>
  )
}

export const Head: HeadFC<string> = () => (
  <Seo title="Elliot Reed | Developer" />
)