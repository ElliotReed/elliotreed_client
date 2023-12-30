import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

import { Seo } from "../../../components/SEO/Seo";
import MaxWidthContainer from "../../../components/MaxWidthContainer/MaxWidthContainer";

import * as styles from "./portfolio.module.scss";

function PaddingContainer({ children }: Readonly<React.PropsWithChildren>) {
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

interface Image {
  image: IGatsbyImageData
  alt: string
}

interface ItemNode {
  node: {
    blurb: string
    description: string
    production: boolean
    project: string;
    url: string;
    images: Image[]
  }
}

interface QueryResult {
  allPortfolioJson: {
    edges: ItemNode[]
  }
}

export default function PortfolioPage({ data }: Readonly<PageProps<QueryResult>>) {

  return (
    <main className={styles.portfolioPage}>
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
                {edge.node.images.map((projectImage) => {
                  const imageData = getImage(projectImage.image)
                  if (!imageData) {
                    return
                  }
                  return (
                    <GatsbyImage
                      key={projectImage.alt}
                      image={imageData}
                      alt={projectImage.alt}
                    />
                  )
                })
                }
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
                  {edge.node.project}
                </a>
              </article>
            </li>
          ))}
        </ul>
      </MaxWidthContainer>
    </main>
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

export const Head: HeadFC<string> = () => (
  <Seo title="Developer | Portfolio" />
)