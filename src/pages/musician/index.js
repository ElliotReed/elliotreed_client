import React from "react"
import * as styles from "./musician.module.scss"

import MaxWidthContainer from "../../components/UI/maxWidthContainer"
import Head from "../../components/head"
import ProfileImage from "../../components/ProfileImage"
import ProfileInfo from "../../components/ProfileInfo"

import { StaticImage } from "gatsby-plugin-image"

const MusicianPage = () => {
  const imageText =
    "I am a musician living and working in the greater Denver Metro area."

  return (
    <div className={styles.page}>
      <section className={styles.profile}>
        <Head title="Musician" />
        <MaxWidthContainer>
          <ProfileImage imageText={imageText}>
            <StaticImage
              src="../../images/music-elliot-profile_567.jpg"
              alt="pic"
              layout="constrained"
              width={300}
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
            />
          </ProfileImage>
        </MaxWidthContainer>
      </section>
      <section className={styles.profile}>
        <MaxWidthContainer>
          <ProfileInfo mode="musician" />
        </MaxWidthContainer>
      </section>
    </div>
  )
}

export default MusicianPage
