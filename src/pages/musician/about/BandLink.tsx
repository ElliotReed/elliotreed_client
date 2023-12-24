import React from "react";
import { Link } from "gatsby";

import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import * as styles from "./band-link.module.scss";

interface NodeData {
  node: {
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

export default function BandLink({ node }: Readonly<NodeData>) {
  return (
    <Link
      to={`bands/${node.frontmatter.slug}`}
      className={styles.bandLink}
    >
      {node.frontmatter.hero_image && (
        <GatsbyImage image={getImage(node.frontmatter.hero_image)}
          alt={node.frontmatter.hero_image_alt} />
      )}
      {node.frontmatter.title}
    </Link>
  );
}