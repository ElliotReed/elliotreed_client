import React from "react"
import styles from "./developer.module.scss"

import Head from "../../components/head"
import Login from "../../components/LoginForm"
import Logo from "../../components/Logo"
import MaxWidthContainer from "../../components/UI/maxWidthContainer"
import ProfileImage from "../../components/ProfileImage"
import ProfileInfo from "../../components/ProfileInfo"


const DeveloperPage = () => {
  const profileImage = "elliot_profile-dev-348.jpg"
  const imageText =
    "I am a web developer living and working in the greater Denver Metro area."

  return (
    <div>
      <Head title="Developer" />
      <div className={styles.profileWrapper}>
        <MaxWidthContainer>
          <ProfileImage image={profileImage} imageText={imageText} />
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
          <ProfileInfo mode="developer" />
        </MaxWidthContainer>
      </div>
      <Login />
    </div>
  )
}

export default DeveloperPage
