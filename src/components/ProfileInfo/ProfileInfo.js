import React from "react"
import * as styles from "./profile-info.module.scss"

const DeveloperProfile = () => {
  return (
    <section className={styles.aboutMe}>
      <h1 className={styles.heading}>About Me</h1>
      <p>
        I'm a musician and father who fell in love with coding, starting with my
        band website. A full stack web developer, I'm intersted in all aspects
        of development. If I don't know it, I'm excited to learn it. Able to
        work with diverse teams and independently to create projects. Adaptable,
        curious and passionate about learning.
      </p>

      <h2 className={styles.heading}>Technical Skills</h2>
      <ul className={styles.skillList}>
        <li>HTML</li>
        <li>CSS, Media Queries, Bootstrap, Materialize, Foundation</li>
        <li>JavaScript, JQuery, PHP, Python</li>
        <li>Django, Express, React, React Native, Gatsby, Graphql, Vue, Angular</li>
        <li>Postgresql, MySQL, MongoDB, Firebase, MS Access</li>
        <li>Node, AJAX, APIs, JSON, REST</li>
        <li>GIT, Github, command line, computer science fundamentals</li>
      </ul>
    </section>
  )
}

const MusicianProfile = () => {
  return (
    <section className={styles.aboutMe}>
      <h1 className={styles.heading}>Music and Me</h1>
      <p>My primary instrument is guitar, I also sing.</p>
      <p>
        My musical focus is anything that swings! (gypsy jazz, jazz, western
        swing). I also perform in the rock, pop, reggae, and country styles.
      </p>
      <p>
        My primary project is &nbsp;
        <a href="https://www.gypsyswingrevue.com" target="blank">
          Gypsy Swing Revue
        </a>
        , a gypsy jazz band in the style of the Hot Club of France.
      </p>
      <p> I compose, arrange and teach music.</p>
    </section>
  )
}
const ProfileInfo = ({ mode }) => {
  return (
    <>
      {mode === "developer" && <DeveloperProfile />}
      {mode === "musician" && <MusicianProfile />}
    </>
  )
}

export default ProfileInfo
