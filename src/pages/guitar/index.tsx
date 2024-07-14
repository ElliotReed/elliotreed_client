import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Paragraph from '../../components/UI/Paragraph';
import Heading from '../../components/Heading/Heading';

export default function GuitarIndex({
  data: { allMdx: { nodes } }, children
}) {
  return (
    <main>
      GuitarIndex
      <ul>

        {nodes.map(node => (
          <li key={node.frontmatter.slug}>
            <Link to={node.frontmatter.slug}>
              <Heading level={2} size={5}>
                {node.frontmatter.title}
              </Heading>
              <Paragraph>
                {node.excerpt}
              </Paragraph>
            </Link>

          </li>
        ))}
        {children}
      </ul>
    </main>
  )
}

export const pageQuery = graphql`
query {
  allMdx(
    filter: {fields: {source: {eq: "guitar"}}, id: {}}
    sort: {frontmatter: {title: ASC}}
  ) {
    nodes {
      frontmatter {
        slug
        title
      }
      id
      excerpt
    }
  }
}
`;