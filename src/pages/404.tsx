import React from "react";
import { HeadFC, navigate } from "gatsby";

import Seo from "../components/SEO"

import * as styles from "./404.module.scss"

const NotFoundPage = () => (
  <main className={styles.NotFoundPage}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
    <button onClick={() => navigate(-1)}>Go back</button>
  </main>
)

export default NotFoundPage

export const Head: HeadFC<string> = () => (
  <Seo title="Page not found" />
)