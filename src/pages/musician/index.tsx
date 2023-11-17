import React from "react"
import { HeadFC } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import { ProfileHeader } from "../../components/ProfileHeader"
import { MusicianProfile } from "../../components/ProfileInfo"
import { Seo } from "../../components/SEO"
import MaxWidthContainer from "../../components/MaxWidthContainer/MaxWidthContainer"

import * as styles from "./musician.module.scss"

const MusicianPage = () => {
  const text =
    "I am a musician living and working in the greater Denver Metro area."

  return (
    <main className={styles.page}>
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
    </main>
  )
}

export default MusicianPage

export const Head: HeadFC<string> = () => (
  <Seo title="Elliot Reed | Musician" />
)