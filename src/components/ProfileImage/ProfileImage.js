import React from "react"

import styles from "./profile-image.module.scss"

const ProfileImage = props => {
  return (
    <section className={styles.profileImage}>
      <div className="before">
        <img src={require("../../img/" + props.image)} alt="Elliot Reed" />
      </div>
      <div className={styles.profileImageText}>
        <p>{props.imageText}</p>
      </div>
    </section>
  )
}

export default ProfileImage
