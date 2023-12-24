import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import BandLink from "./BandLink";
import ExternalLink from "../../../components/ExternalLink";
import Heading from "../../../components/Heading/Heading";
import MaxWidthContainer from "../../../components/MaxWidthContainer";

import * as styles from "./about.module.scss";

interface AboutMusicianData {
  allMdx: {
    nodes: {
      filter(arg0: (node: Node) => string): Node;
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

export default function AboutMusician({ data }: Readonly<PageProps<AboutMusicianData>>
) {
  return (
    <main className={styles.aboutMe} >
      <MaxWidthContainer>
        <Heading level={1}> Music and Me </Heading>
        <p> My primary instrument is guitar, I also sing.</p>
        <p>
          My musical focus is anything that swings!(gypsy jazz, jazz, western
          swing).I also perform in the rock, pop, reggae, and country styles.
        </p>
        <p>
          My primary project is <ExternalLink to="https://www.gypsyswingrevue.com" target="_self"> Gypsy Swing Revue </ExternalLink>, a gypsy jazz band in the style of the Hot Club of France.
        </p>
        <p> I compose, arrange and teach music.</p>

        <BandLink node={data.allMdx.nodes.filter((node) => node.frontmatter.title === "Crossing 32nd Street")[0]} />
        <BandLink node={data.allMdx.nodes.filter((node) => node.frontmatter.title === "Puppies With Guns")[0]} />
        <BandLink node={data.allMdx.nodes.filter((node) => node.frontmatter.title === "Gypsy Swing Revue")[0]} />

      </MaxWidthContainer>
    </main>
  );
}

export const pageQuery = graphql`
query {
  allMdx(filter: {fields: {source: {eq: "bands"}}}) {
    nodes {
      frontmatter {
        slug
        title
        hero_image {
          childImageSharp {
            gatsbyImageData(height: 100)
          }
        }
        hero_image_alt
      }
      id
    }
  }
}
`;