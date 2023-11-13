import React from 'react';
import { Link, HeadFC } from "gatsby";

import classnames from "classnames";

import { SEO } from "../components/SEO/Seo";

import * as styles from "./index.module.scss";

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
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
    </div>
  )
}

export const Head: HeadFC<string> = () => (
  <SEO title="Elliot Reed Developer | Musician" />
)
