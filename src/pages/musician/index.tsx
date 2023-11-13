import React from "react"
import { HeadFC } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import { ProfileHeader } from "../../components/ProfileHeader"
import { MusicianProfile } from "../../components/ProfileInfo"
import { SEO } from "../../components/SEO/Seo"
import MaxWidthContainer from "../../components/UI/maxWidthContainer"

import * as styles from "./musician.module.scss"

const MusicianPage = () => {
  const text =
    "I am a musician living and working in the greater Denver Metro area."

  return (
    <div className={styles.page}>
      <section className={styles.profile}>
        <MaxWidthContainer>
          <ProfileHeader text={text} >
            <StaticImage
              src="../../images/music-elliot-profile_567.jpg"
              alt="pic"
              layout="constrained"
              width={300}
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
            />
          </ProfileHeader>
        </MaxWidthContainer>
      </section>
      <section className={styles.profile}>
        <MaxWidthContainer>
          <MusicianProfile />
        </MaxWidthContainer>
      </section>
    </div>
  )
}

export default MusicianPage

export const Head: HeadFC<string> = () => (
  <SEO title="Elliot Reed | Musician" />
)