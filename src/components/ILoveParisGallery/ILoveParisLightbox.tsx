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

import { Image } from "astro:assets"

import ImageGallery from "../ImageGallery";

import rootsImage from "./iloveparis-roots.jpg";
import kuvoImage from "./iloveparis-kuvo.jpg";
import bohemianImage from "./iloveparis-bohemian.jpg";
import redImage from "./iloveparis-red.jpg";

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

    const slides = [
        rootsImage,
        kuvoImage,
        bohemianImage,
        redImage
    ]
    // 

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
                            // <ParisImage slide={slide} />
                            <Image src={slide} />
                        ) : undefined,
                }}
            />
            {/* <ILoveParisGallery onClick={handleClick} /> */}
            <button onClick={handleClick}>show</button >
        </>);
}
