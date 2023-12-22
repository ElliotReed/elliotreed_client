import React from "react";
import { HeadFC, Link } from "gatsby";

import { Seo } from "../../../components/SEO";

export default function ClientPage() {
  return (
    <main>
      <h1>I build websites </h1>
    </main>
  );

}

export const Head: HeadFC<string> = () => (
  <Seo title="Clients | Elliot Reed | Developer" />
)