import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import * as React from 'react';
import Paragraph from '../../components/UI/Paragraph';
import Heading from '../../components/Heading/Heading';

export default function Guitar({ data }) {
  return (
    <main>
      <MDXProvider>
        <Heading level={1}>{data.frontmatter.title}</Heading>
        <Paragraph>
          {data.mdx.body}
        </Paragraph>
      </MDXProvider>
    </main>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
   mdx(fields: {source: {eq: "jeremy-mahoney"}}, id: {eq: $id}) {
      body
      frontmatter {
        title
      }
    }
  }
`;