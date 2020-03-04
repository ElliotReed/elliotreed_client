import React from "react"
import styles from "./musician.module.scss"

import MaxWidthContainer from "../../components/UI/maxWidthContainer"
import Head from "../../components/head"
import ProfileImage from "../../components/ProfileImage"
import ProfileInfo from "../../components/ProfileInfo"


const MusicianPage = () => {
  const profileImage = "music-elliot-profile_567.jpg"
  const imageText =
    "I am a musician living and working in the greater Denver Metro area."

  return (
    <div>
      <section className={styles.profile}>
        <Head title="Musician" />
        <MaxWidthContainer>
          <ProfileImage image={profileImage} imageText={imageText} />
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
