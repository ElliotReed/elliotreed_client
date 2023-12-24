import React from "react";
import { HeadFC, Link, PageProps, graphql } from "gatsby";

import { Seo } from "../../../components/SEO";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import Heading from "../../../components/Heading/Heading";

import * as styles from "./clients.module.scss";
import MaxWidthContainer from "../../../components/MaxWidthContainer";
interface ClientData {
  allMdx: {
    nodes: {
      map(arg0: (node: any) => React.JSX.Element): React.ReactNode;
      fields: {
        source: string
      }
      frontmatter: {
        slug: string
        title: string
        tags: string[]
        hero_image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
        hero_image_alt: string
      }
      id: string
    }
  }
}

export default function ClientPage({ data }: Readonly<PageProps<ClientData>>) {
  return (
    <MaxWidthContainer>

      <main className={styles.clients}>
        <h1>I build websites </h1>
        <ul>
          {data.allMdx.nodes.map((node) => (
            <li key={node.id}>
              <GatsbyImage
                image={node.frontmatter.hero_image && getImage(node.frontmatter.hero_image)}
                alt={node.frontmatter.hero_image_alt}
              />
              <Heading level={2}>{node.frontmatter.title}</Heading>
              <Link to={`portfolio/${node.frontmatter.slug}`}>Read More</Link>
            </li>
          ))}
        </ul>
      </main>
    </MaxWidthContainer>
  );

}

export const query = graphql`
query {
  allMdx(
    filter: {
      fields: {source: {eq: "portfolio"}},
      frontmatter: {
        tags: {in: "client"}
        isActive: {eq: true}
      }
    }
  ) {
    nodes {
      fields {
        source
      }
      frontmatter {
        slug
        title
        tags
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 300)
          }
        }
        hero_image_alt
      }
      id
    }
  }
}
`;

export const Head: HeadFC<string> = () => (
  <Seo title="Clients | Elliot Reed | Developer" />
)