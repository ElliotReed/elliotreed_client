import React from 'react';
import { Link, HeadFC } from "gatsby";

import classnames from "classnames";

import { Seo } from "../components/SEO";

import * as styles from "./portal.module.scss";

export default function PortalPage() {
  return (
    <main className={styles.portalPage}>
      <div className={classnames(styles.left, styles.aspectContainer)}>
        <Link to="/developer" className={styles.aspectLink}>The Developer</Link>
      </div>

      <div className={classnames(styles.right, styles.aspectContainer)}>
        <Link to="/musician" className={styles.aspectLink}>
          The Musician
        </Link>
      </div>
    </main>
  )
}

export const Head: HeadFC<string> = () => (
  <Seo title="Elliot Reed Developer | Musician" />
)
