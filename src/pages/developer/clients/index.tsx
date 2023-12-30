import React from "react";
import { GatsbyNode, HeadFC, PageProps, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import Heading from "../../../components/Heading/Heading";
import MaxWidthContainer from "../../../components/MaxWidthContainer";
import PortfolioList from "../../../components/PortfolioList";
import PortfolioListItem from "../../../components/PortfolioListItem";
import { Seo } from "../../../components/SEO";

import * as styles from "./clients.module.scss";
interface ClientData {
  allMdx: {
    nodes: {
      filter(arg0: (node: any) => boolean): [];
      map(arg0: (node: unknown) => React.JSX.Element): React.ReactNode;
      frontmatter: {
        blurb: string
        featured: boolean
        hero_image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
        hero_image_alt: string
        slug: string
        tags: string[]
        title: string
      }
      excerpt: string
      id: string
    }
  }
}
export default function ClientPage({ data: { allMdx: { nodes } } }: Readonly<PageProps<ClientData>>) {
  return (
    <main className={styles.clients}>
      <MaxWidthContainer>
        <Heading level={1}>I build websites </Heading>
        <Heading level={2}>Featured</Heading>
        <PortfolioList>
          {nodes.filter((node) => node.frontmatter.featured === true).map((node) => (
            <PortfolioListItem key={node.id} node={node} prefixed={true} />
          ))}
        </PortfolioList>

        <Heading level={2}>Projects</Heading>
        <PortfolioList>
          {nodes.filter((node) => node.frontmatter.featured === false).map((node) => (
            <PortfolioListItem key={node.id} node={node} prefixed={true} />
          ))}
        </PortfolioList>
      </MaxWidthContainer>
    </main>
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
    sort: {
      frontmatter: {
        title: ASC
      }
    }
  ) {
    nodes {
      frontmatter {
        blurb
        featured
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        hero_image_alt
        slug
        title
      }
      excerpt(pruneLength: 100)
      id
    }
  }
}
`;

export const Head: HeadFC<string> = () => (
  <Seo title="Clients | Elliot Reed | Developer" />
)