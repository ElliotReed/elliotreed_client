import React from "react"
import styles from "./profile-info.module.scss"

const DeveloperProfile = () => {
  return (
    <section className={styles.aboutMe}>
      <h3>I'm a</h3>
      <p>
        Full-Stack Web Developer with a background in collaborative music and
        entertainment. Able to build a web application using full database
        backend. A quick study of new technologies, and able to work with
        diverse teams and independently to create projects. // adaptable,
        curious and passionate about learning and implementing these kinds of
        solutions //
      </p>

      <h3> Technical Skills</h3>

      <p>
        HTML, CSS, Media Queries, Bootstrap, Materialize, JavaScript, JQuery,
        AJAX, PHP, APIs, JSON, REST, Node, Express, React, React Native, Vue,
        Angular, GIT, Github, MySQL, Postgresql, MongoDB, Firebase, MS Access,
        command line, computer science fundamentals
      </p>
    </section>
  )
}

const MusicianProfile = () => {
  return (
    <section className={styles.aboutMe}>
      <h3>Music</h3>
      <p>My primary instrument is guitar, I also sing.</p>
      <p>
        My musical focus is anything that swings! (gypsy jazz, jazz, western
        swing). I also perform in the rock, pop, reggae, and country styles.
      </p>
      <p>
        My primary project is
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
