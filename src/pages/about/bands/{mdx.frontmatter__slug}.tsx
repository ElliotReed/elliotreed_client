import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";

import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import Heading from "../../../components/Heading/Heading";
import MaxWidthContainer from "../../../components/MaxWidthContainer";
import Paragraph from "../../../components/UI/Paragraph/Paragraph";
import PhotoCredit from "../../../components/PhotoCredit";
import Seo from "../../../components/SEO/Seo";

import * as styles from "./bands.module.scss";

interface BandData {
  mdx: {
    frontmatter: {
      title: string
      active_dates: string
      hero_image_alt: string
      hero_image_credit_link: string
      hero_image_credit_text: string
      hero_image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

export default function Band({ data: { mdx: { frontmatter } }, children }: Readonly<PageProps<BandData>>) {
  const image = getImage(frontmatter.hero_image);

  return (
    <main className={styles.bands}>
      <MaxWidthContainer>
        {image && (
          <GatsbyImage
            className={styles.bands__hero}
            image={image}
            alt={frontmatter.hero_image_alt}
          />
        )}

        <PhotoCredit link={frontmatter.hero_image_credit_link} text={frontmatter.hero_image_credit_text} />

        <Heading level={1}>
          {frontmatter.title}
        </Heading>

        <Paragraph>Active: {frontmatter.active_dates}</Paragraph>

        {children}
      </MaxWidthContainer>
    </main >
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        active_dates
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        title
      }
    }
  }
`;


const Head: HeadFC<string> = () => (
  <Seo title="Bands | Elliot Reed | Musician" />
)