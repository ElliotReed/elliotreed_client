import React from "react";
import { HeadFC, navigate } from "gatsby";

import SEO from "../components/seo"

import * as styles from "./404.module.scss"

const NotFoundPage = () => (
  <div className={styles.NotFoundPage}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
    <button onClick={() => navigate(-1)}>Go back</button>
  </div>
)

export default NotFoundPage

export const Head: HeadFC<string> = () => (
  <SEO title="Page not found" />
)