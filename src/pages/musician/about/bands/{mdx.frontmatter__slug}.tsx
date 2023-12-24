import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";

import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import ExternalLink from "../../../../components/ExternalLink";
import Heading from "../../../../components/Heading/Heading";
import MaxWidthContainer from "../../../../components/MaxWidthContainer";
import Paragraph from "../../../../components/UI/Paragraph/Paragraph";
import Seo from "../../../../components/SEO/Seo";

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

export default function Band({ data, children }: Readonly<PageProps<BandData>>) {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <main className={styles.bands}>
      <MaxWidthContainer>
        {image && (
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
        )}
        <Paragraph>
          <small>
            Photo Credit: <ExternalLink to={data.mdx.frontmatter.hero_image_credit_link}>
              {data.mdx.frontmatter.hero_image_credit_text}
            </ExternalLink>
          </small>
        </Paragraph>

        <Heading level={1}>
          {data.mdx.frontmatter.title}
        </Heading>
        <Paragraph>Active: {data.mdx.frontmatter.active_dates}</Paragraph>
        {children}
      </MaxWidthContainer>
    </main >
  );
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        active_dates
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
        }}
      }
    }
  }
`;


const Head: HeadFC<string> = () => (
  <Seo title="Bands | Elliot Reed | Musician" />
)