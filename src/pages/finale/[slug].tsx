import { graphql } from 'gatsby';
import * as React from 'react';
import Paragraph from '../../components/UI/Paragraph';
import Heading from '../../components/Heading/Heading';
// import { MDXRenderer } from "gatsby-plugin-mdx";

export default function Finale({ data }) {
  const { mdx } = data;

  return (
    <main>
      <h1>{mdx.frontmatter.title}</h1>
      {/* <MDXRenderer>{mdx.body}</MDXRenderer> */}
    </main>
  );
}

export const query = graphql`
query ($id: String) {
  mdx(fields: {source: {eq: "finale"}}, id: {eq: $id}) {
    frontmatter {
      title
    }
    body
    id
  }
}
`