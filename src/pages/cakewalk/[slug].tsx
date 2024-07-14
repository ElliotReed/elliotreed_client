import { graphql } from 'gatsby';
import * as React from 'react';
import Paragraph from '../../components/UI/Paragraph';
import Heading from '../../components/Heading/Heading';

export default function Cakewalk({ data }) {
  return (
    <main>
      <Heading level={1}>{data.mdx.frontmatter.title}</Heading>
      <Paragraph>
        {data.mdx.body}
      </Paragraph>
    </main>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`;