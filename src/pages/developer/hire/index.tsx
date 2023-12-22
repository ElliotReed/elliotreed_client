import React from "react";
import { HeadFC, Link } from 'gatsby';

import { Seo } from "../../../components/SEO";
import * as styles from "../../../layouts/Navbars/navbars.module.scss";
export default function HireMePage() {
  return (
    <main>
      <h1>Hire Me </h1>

      <Link
        to="/design/"
      >
        Design System
      </Link>
    </main>
  );
}


export const Head: HeadFC<string> = () => (
  <Seo title="Hire Elliot Reed | Developer" />
)