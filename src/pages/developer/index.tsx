import React from "react"
import { HeadFC } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Logo from "../../components/Logo"
import { ProfileHeader } from "../../components/ProfileHeader"
import { DeveloperProfile } from "../../components/ProfileInfo"
import { SEO } from "../../components/seo"
import MaxWidthContainer from "../../components/UI/maxWidthContainer"

import * as styles from "./developer.module.scss"

export default function DeveloperPage() {
  const text =
    "I am a web developer living and working in the greater Denver Metro area."

  return (
    <div>
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
      <div className={styles.background}>
        <div className={styles.windowImage}>
          <MaxWidthContainer>
            <Logo
              mode="developer"
              width="200px"
              animation="DEVELOPER_PAGE_DISPLAY"
            />
          </MaxWidthContainer>
        </div>
      </div>
      <div className={styles.infoWrapper}>
        <MaxWidthContainer>
          <DeveloperProfile />
        </MaxWidthContainer>
      </div>
    </div>
  )
}

export const Head: HeadFC<string> = () => (
  <SEO title="Elliot Reed | Developer" />
)