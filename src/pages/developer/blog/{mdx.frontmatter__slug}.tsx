import * as React from "react";
import { HeadFC, PageProps, graphql } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import Seo from "../../../components/SEO/Seo";
import Paragraph from "../../../components/UI/Paragraph/Paragraph";
import Heading from "../../../components/Heading/Heading";
import MaxWidthContainer from "../../../components/MaxWidthContainer";
import ExternalLink from "../../../components/ExternalLink";

import * as styles from "./blog-post.module.scss";
import PhotoCredit from "../../../components/PhotoCredit";
interface BlogPostData {
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
      updated_date: string
    }
  }
}

export default function BlogPost({ data: { mdx: { frontmatter } }, children }: Readonly<PageProps<BlogPostData>>) {
  const image = getImage(frontmatter.hero_image);

  return (
    <main className={styles.blogPost}>
      <MaxWidthContainer>
        {image && (
          <GatsbyImage
            alt={frontmatter.hero_image_alt}
            imgClassName={styles.blogPost__hero}
            image={image}
          />
        )}
        <PhotoCredit
          link={frontmatter.hero_image_credit_link}
          text={frontmatter.hero_image_credit_text}
        />
        <Heading level={1}>
          {frontmatter.title}
        </Heading>
        <span><small>Posted: {frontmatter.date}</small></span>
        {frontmatter.updated_date && (
          <span>, <small>Updated: {frontmatter.updated_date}</small></span>
        )}
        {children}
      </MaxWidthContainer>
    </main>
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
        updated_date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;

// export const Head: HeadFC<string> = () => <Seo title=`Blog |  ${data.mdx.frontmatter.title} | Elliot Reed | Developer` />
export const Head: HeadFC<string> = ({ data }: PageProps<BlogPostData>) => <Seo title={`${data.mdx.frontmatter.title} | Blog | Elliot Reed | Developer`} />