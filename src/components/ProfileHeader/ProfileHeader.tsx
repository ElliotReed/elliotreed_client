import React from "react";

import * as styles from "./profileHeader.module.scss";

interface IProfile {
  text: string
  children: React.ReactNode
}

export function ProfileHeader({ text, children }: IProfile) {
  return (
    <section className={styles.profileImage}>
      <div >{children}</div>
      <div className={styles.profileImageText}>
        <p>{text}</p>
      </div>
    </section>
  )
}
