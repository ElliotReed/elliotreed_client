import React from "react";

import * as styles from "./profileHeader.module.scss";

interface ProfileProps {
  text: string
  children: React.ReactNode
}

export function ProfileHeader({ text, children }: Readonly<ProfileProps>) {
  return (
    <section className={styles.profileHeader}>
      <div >{children}</div>
      <div className={styles.profileHeaderText}>
        <p>{text}</p>
      </div>
    </section>
  )
}
