import React from 'react';
import { Link, HeadFC } from "gatsby";

import classnames from "classnames";

import { Seo } from "../components/SEO";

import * as styles from "./index.module.scss";

export default function LandingPage() {
  return (
    <main className={styles.landingPage}>
      <div className={classnames(styles.left, styles.aspectContainer)}>
        <h1 className={styles.aspectHeading}>The Developer</h1>
        <Link to="/developer">
          Learn More!
        </Link>
      </div>

      <div className={classnames(styles.right, styles.aspectContainer)}>
        <h1 className={styles.aspectHeading}>The Musician</h1>
        <Link to="/musician">
          Learn More!
        </Link>
      </div>
    </main>
  )
}

export const Head: HeadFC<string> = () => (
  <Seo title="Elliot Reed Developer | Musician" />
)
