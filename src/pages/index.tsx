import React from 'react';
import { Link, HeadFC } from "gatsby";

import classnames from "classnames";

import { Seo } from "../components/SEO";

import * as styles from "./index-page.module.scss";

export default function LandingPage() {
  return (
    <main className={styles.landingPage}>
      <div className={classnames(styles.left, styles.aspectContainer)}>
        <AspectLink to="/developer" text="The Developer" />
      </div>

      <div className={classnames(styles.right, styles.aspectContainer)}>
        <AspectLink to="/musician" text="The Musician" />
      </div>
    </main>
  )
}

interface AspectLinkProps {
  to: string,
  text: string,
}

function AspectLink({ to, text }: Readonly<AspectLinkProps>) {
  return (
    <Link to={to} className={styles.aspectLink}>
      <h1 className={styles.aspectHeading}>{text}</h1>
    </Link>
  );
}

export const Head: HeadFC<string> = () => (
  <Seo title="Elliot Reed Developer | Musician" />
)
