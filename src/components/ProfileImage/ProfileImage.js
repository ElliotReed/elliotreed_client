import React from "react"

import * as styles from "./profile-image.module.scss"

const ProfileImage = (props) => {
  return (
    <section className={styles.profileImage}>
      <div className="before">{props.children}</div>
      <div className={styles.profileImageText}>
        <p>{props.imageText}</p>
      </div>
    </section>
  )
}

export default ProfileImage
