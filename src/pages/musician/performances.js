import React from "react"

import Head from "../../components/head"

import MaxWidthContainer from "../../components/UI/maxWidthContainer"
import styles from "./performances.module.scss"
const PerformancePage = () => {
  return (
    <div>
      <Head title="Musician | Contact" />
      <MaxWidthContainer>
        <section className={styles.header}>
          <h1>Performance Page</h1>
          <hr></hr>
          <p>
            A performance page is in the works, until then you can shake your
            fist at the sky.
          </p>
        </section>
      </MaxWidthContainer>
    </div>
  )
}

export default PerformancePage
