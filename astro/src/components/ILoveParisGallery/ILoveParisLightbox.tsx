import * as React from "react";
// import { graphql, useStaticQuery } from "gatsby";

// import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Lightbox from "yet-another-react-lightbox";

import ILoveParisGallery from "./ILoveParisGallery";

import "yet-another-react-lightbox/styles.css";
import * as styles from "./i-love-paris-gallery.module.scss";

interface ParisImageProps {
  slide: any
}

function ParisImage({ slide }: Readonly<ParisImageProps>) {
  return (
    <></>
    // <GatsbyImage
    //   image={getImage(slide)}
    //   alt=""
    //   className={styles.lightboxImage}
    // />
  );
}

export default function ILoveParisLightbox() {
  const [isOpen, setIsOpen] = React.useState(false)
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       allFile(filter: {sourceInstanceName: {eq: "ILoveParisGallery"}}) {
  //         totalCount
  //         nodes {
  //           name
  //           childImageSharp {
  //             gatsbyImageData
  //           }
  //         }
  //       }
  //     }
  //   `
  // );
  // const slides = data.allFile.nodes.map(node => {
  //   return { ...node, type: "custom-slide" }
  // }).filter(node => node.childImageSharp);




  function handleClick() {
    setIsOpen(true)
  }

  return (
    <>
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={slides}
        render={{
          slide: ({ slide }) =>
            slide.type === "custom-slide" ? (
              <ParisImage slide={slide} />
            ) : undefined,
        }}
      />
      <ILoveParisGallery onClick={handleClick} />
      <button onClick={handleClick}>show</button >
    </>);
}
