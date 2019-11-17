import React from "react"
import Styles from "./ProfileImage.module.scss"

const ProfileImage = props => {
  return (
    <section className={Styles.profileImage}>
      <div className="before">
        <img src={require("../../../img/" + props.image)} alt="Elliot Reed" />
      </div>
      <div className={Styles.profileImageText}>
        <p>{props.imageText}</p>
      </div>
    </section>
  )
}

export default ProfileImage
