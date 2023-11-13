import React from "react"
import { HeadFC } from "gatsby"

import { SEO } from "../../../components/SEO/Seo"
import MaxWidthContainer from "../../../components/UI/maxWidthContainer"

import * as styles from "./performances.module.scss"

export default function PerformancePage() {
  return (
    <div>
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

export const Head: HeadFC<string> = () => (
  <SEO title="Musician | Performances" />
)