import React from "react";
import { Link } from "gatsby";

import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";

import * as styles from "./band-link.module.scss";

interface NodeData {
  node: {
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

export default function BandLink({ node }: Readonly<NodeData>) {
  const image = getImage(node.frontmatter.hero_image);

  return (

    <Link
      to={`bands/${node.frontmatter.slug}`}
      className={styles.bandLink}
    >
      {image && (
        <GatsbyImage image={image}
          alt={node?.frontmatter.hero_image_alt} />
      )}
      {node.frontmatter.title}
    </Link>
  );
}