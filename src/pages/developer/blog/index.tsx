import * as React from "react";
import { graphql, HeadFC, Link, Node, PageProps } from "gatsby";

import MaxWidthContainer from "../../../components/MaxWidthContainer";
import Paragraph from "../../../components/UI/Paragraph/Paragraph";
import Seo from "../../../components/SEO/Seo";
import Heading from "../../../components/Heading/Heading";


type BlogData = {
  allMdx: {
    nodes: Node,
  }
}
export default function BlogPage({ data }: Readonly<PageProps<BlogData>>) {
  return (
    <main>
      <MaxWidthContainer>
        <Paragraph>My posts</Paragraph>

        {data.allMdx.nodes.map((node) => (
          <Link key={node.id} to={node.frontmatter.slug}>
            <article >
              <Heading level={2}>{node.frontmatter.title}</Heading>
              <Paragraph>Posted: {node.frontmatter.date}</Paragraph>
              <Paragraph>{node.excerpt}</Paragraph>
            </article>
          </Link>
        ))}
      </MaxWidthContainer>
    </main>
  );
}

export const query = graphql`
query  {
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
      }
      id
      excerpt
    }
  }
}
`

export const Head: HeadFC<string> = () => (
  <Seo title="Blog | Elliot Reed | Developer" />
);