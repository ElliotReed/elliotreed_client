import React from "react";
import { HeadFC, navigate } from "gatsby";

import Heading from "../components/Heading";
import MaxWidthContainer from "../components/MaxWidthContainer";
import Paragraph from "../components/UI/Paragraph";
import Seo from "../components/SEO"

import * as styles from "./404.module.scss";

export default function NotFoundPage() {
  return (
    <main className={styles.notFoundPage}>
      <MaxWidthContainer>
        <Heading level={1} color="light">NOT FOUND</Heading>
        <Paragraph>
          You just hit a route that doesn't exist...the sadness 😢.
        </Paragraph>
        <button onClick={() => navigate(-1)}>Go back</button>
      </MaxWidthContainer>
    </main>
  );
}

export const Head: HeadFC<string> = () => (
  <Seo title="Page not found" />
)