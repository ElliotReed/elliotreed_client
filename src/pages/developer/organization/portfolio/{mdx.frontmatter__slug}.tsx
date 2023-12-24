import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";

import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import ExternalLink from "../../../../components/ExternalLink";
import Heading from "../../../../components/Heading/Heading";
import MaxWidthContainer from "../../../../components/MaxWidthContainer";
import Paragraph from "../../../../components/UI/Paragraph/Paragraph";
import Seo from "../../../../components/SEO/Seo";

import * as styles from "./organization-portfolio.modules.scss";

interface OrganizationData {
  mdx: {
    frontmatter: {
      title: string
      date: string
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

export default function OrganizationPortfolio({ data, children }: Readonly<PageProps<OrganizationData>>) {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <main className={styles.organizationPortfolio}>
      <MaxWidthContainer>
        {image && (<GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />)
        }
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
        <Paragraph>Posted: {data.mdx.frontmatter.date}</Paragraph>
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
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;


const Head: HeadFC<string> = () => (
  <Seo title="Organization Portfolio | Elliot Reed | Developer" />
)