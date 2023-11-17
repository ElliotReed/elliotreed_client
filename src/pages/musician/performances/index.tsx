import React from "react"
import { HeadFC } from "gatsby"

import { Seo } from "../../../components/SEO"
import MaxWidthContainer from "../../../components/MaxWidthContainer/MaxWidthContainer"

import * as styles from "./performances.module.scss"

export default function PerformancePage() {
  return (
    <main>
      <MaxWidthContainer>
        <section className={styles.header}>
          <h1>Performance Page</h1>
          <p>
            No performances scheduled currently.
          </p>
        </section>
      </MaxWidthContainer>
    </main>
  )
}

export const Head: HeadFC<string> = () => (
  <Seo title="Musician | Performances" />
)