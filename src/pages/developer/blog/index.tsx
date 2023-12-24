import * as React from "react";
import { graphql, HeadFC, Link, Node, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import Heading from "../../../components/Heading/Heading";
import MaxWidthContainer from "../../../components/MaxWidthContainer";
import Paragraph from "../../../components/UI/Paragraph/Paragraph";
import Seo from "../../../components/SEO/Seo";

import * as styles from "./blog.module.scss";

type BlogData = {
  allMdx: {
    nodes: Node,
  }
}
export default function BlogPage({ data }: Readonly<PageProps<BlogData>>) {

  return (
    <main className={styles.blog}>
      <MaxWidthContainer>
        <Paragraph>Posts</Paragraph>
        <ul className={styles.blog__list}>

          {data.allMdx.nodes.map((node) => (
            <li key={node.id}>
              <article>
                <Link
                  to={node.frontmatter.slug}
                >
                  <GatsbyImage
                    image={getImage(node.frontmatter.hero_image)}
                    alt={node.frontmatter.hero_image_alt}
                  />
                </Link>
                <div>
                  <Heading level={2}>{node.frontmatter.title}</Heading>
                  <Paragraph><small>Posted: {node.frontmatter.date}</small></Paragraph>
                  <Paragraph>{node.excerpt}</Paragraph>
                  <Link
                    to={node.frontmatter.slug}
                    className={styles.blog__link}
                  >
                    Read Article <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </MaxWidthContainer>
    </main>
  );
}

export const query = graphql`
query  {
  allMdx(
    filter: {fields: {source: {eq: "posts"}}},
    sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 400)
          }
        }
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