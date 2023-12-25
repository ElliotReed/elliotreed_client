import * as React from "react";
import { HeadFC, Link, PageProps, graphql } from 'gatsby';

import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import Heading from "../../../components/Heading/Heading";
import MaxWidthContainer from "../../../components/MaxWidthContainer";
import { Seo } from "../../../components/SEO/Seo";

import * as styles from "./organization.module.scss";

interface HireMeData {
  allMdx: {
    nodes: {
      map(arg0: (node: any) => React.JSX.Element): React.ReactNode;
      frontmatter: {
        slug: string
        title: string
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

export default function HireMePage({ data }: Readonly<PageProps<HireMeData>>) {
  return (
    <MaxWidthContainer>
      <main className={styles.organization}>
        <h1>Hire Me </h1>

        <Link
          to="/design/"
        >
          Design System
        </Link>

        <ul>
          {data.allMdx.nodes.map((node) => (
            <li key={node.id}>
              <GatsbyImage
                image={node.frontmatter.hero_image && getImage(node.frontmatter.hero_image)}
                alt={node.frontmatter.hero_image_alt}
              />
              <Heading level={2}>{node.frontmatter.title}</Heading>
              <Link
                to={`portfolio/${node.frontmatter.slug}`}
              >Read More
              </Link>
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
        tags: {in: "organization"},
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
  <Seo title="Hire Elliot Reed | Developer" />
)