import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { IGatsbyImageData, StaticImage } from "gatsby-plugin-image";

import BandLink from "../../components/BandLink/";
import ExternalLink from "../../components/ExternalLink";
import Heading from "../../components/Heading/Heading";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import Paragraph from "../../components/UI/Paragraph/Paragraph";
import Seo from "../../components/SEO/Seo";

import * as styles from "./about.module.scss";

interface AboutMusicianData {
  allMdx: {
    nodes: {
      filter(arg0: (node: any) => boolean): any;
      frontmatter: {
        hero_image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
        hero_image_alt: string
        slug: string
        title: string
      }
      id: string
    }
  }
}

export default function AboutMusician({
  data: { allMdx: { nodes } }
}: Readonly<PageProps<AboutMusicianData>>) {
  function getBandNode(band: string): any {
    return nodes.filter((node) => {
      return node.frontmatter.title === band;
    })[0]
  }

  const crossing32st = getBandNode("Crossing 32nd Street");
  const gypsyswingrevue = getBandNode("Gypsy Swing Revue");
  const puppiesWithGuns = getBandNode("Puppies With Guns");

  return (
    <main className={styles.aboutMe} >
      <div className={styles.introductionContainer}>
        <MaxWidthContainer>
          <div className={styles.introduction}>
            <StaticImage
              className={styles.introduction__image}
              src="./about-me.jpg"
              alt="Elliot Reed onstage playing a gypsy guitar"
            />
            <Paragraph>
              I am a <strong>composer</strong>, <strong>arranger</strong>, <strong>teacher</strong>, <strong>guitarist</strong>, and <strong>vocalist</strong>.
            </Paragraph>
          </div>
        </MaxWidthContainer>
      </div>
      <MaxWidthContainer>
        <Heading level={1}>Music and Me</Heading>

        <Paragraph>
          I studied music at Casper College and the University of New Mexico.
        </Paragraph>

        <Paragraph>
          My musical focus is anything that swings! (gypsy jazz, jazz, western
          swing).I also perform in the rock, pop, reggae, and country styles.
        </Paragraph>

        <Paragraph>
          My primary project is <ExternalLink to="https://www.gypsyswingrevue.com" target="_self"> Gypsy Swing Revue </ExternalLink>, a gypsy jazz band in the style of the Hot Club of France.
        </Paragraph>

        <Heading level={2}>History</Heading>

        <Paragraph>
          After living in Albuquerque, New Mexico, I decided to move to Denver to start an authentic gypsy jazz group: <BandLink node={gypsyswingrevue} />.
        </Paragraph>

        <Paragraph>I've also been doing shows with my brother in Phoenix, Arizona in the faculty group <BandLink node={crossing32st} />
        </Paragraph>

        <Paragraph>
          From Casper, Wyoming, I moved to Albuquerque, New Mexico and started <BandLink node={puppiesWithGuns} />
        </Paragraph>
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
            gatsbyImageData(height: 50)
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
  <Seo title="About Me" />
)