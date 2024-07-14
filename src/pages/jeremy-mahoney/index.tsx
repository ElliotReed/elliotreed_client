import { graphql, Link } from 'gatsby';
import * as React from 'react';
import Heading from '../../components/Heading/Heading';
import Paragraph from '../../components/UI/Paragraph';

export default function JeremyMahoneyIndex({
  data: { allMdx: { nodes } }, children }) {
  return (
    <main>
      JeremyMahoneyIndex
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
  );
}

export const pageQuery = graphql`
query {
  allMdx(
    filter: {fields: {source: {eq: "jeremy-mahoney"}}, id: {}}
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
