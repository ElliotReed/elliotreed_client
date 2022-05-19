import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Head from "../../../components/head"
import MaxWidthContainer from "../../../components/UI/maxWidthContainer"
import * as styles from "./portfolio.module.scss"

function PaddingContainer({ children }) {
  return <div className={styles.paddingContainer}>{children}</div>
}

function HeaderContent() {
  return (
    <div className={styles.portfolioHeader}>
      <h1>Portfolio</h1>
      <hr></hr>
      <p>A selection of projects I have built.</p>
    </div>
  )
}

export default function PortfolioPage({ data }) {
  return (
    <div className={styles.pageWrapper}>
      {console.log("data; ", data)}
      <Head title="Developer | Portfolio" />
      <MaxWidthContainer>
        <PaddingContainer>
          <HeaderContent />
        </PaddingContainer>
      </MaxWidthContainer>
      <MaxWidthContainer>
        <ul className={styles.list}>
          {data.allPortfolioJson.edges.map((edge) => (
            <li key={edge.node.project} className={styles.card}>
              <div className={styles.card__display}>
                {edge.node.images.map((image) => (
                  <GatsbyImage image={getImage(image.image)} alt={image.alt} />
                ))}
              </div>
              <article className={styles.card__info}>
                <h2>{edge.node.project}</h2>
                <h3 className={styles.blurb}>{edge.node.blurb}</h3>
                <p>{edge.node.description}</p>
                {!edge.node.production && (
                  <p className={styles.productionFalse}>Not production ready</p>
                )}
                <a
                  href={edge.node.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {edge.node.url}
                </a>
              </article>
            </li>
          ))}
        </ul>
      </MaxWidthContainer>
    </div>
  )
}

export const query = graphql`
  {
    allPortfolioJson {
      edges {
        node {
          blurb
          description
          images {
            alt
            image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                  transformOptions: { fit: CONTAIN }
                  quality: 90
                )
              }
            }
          }
          production
          project
          url
        }
      }
    }
  }
`
