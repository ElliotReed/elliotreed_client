import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import ImageGallery from "../ImageGallery";

interface ILoveParisGalleryProps {
  onClick: React.ReactEventHandler
}

export default function ILoveParisGallery({ onClick }: Readonly<ILoveParisGalleryProps>) {
  return (
    <div onClick={onClick}>
      <ImageGallery>
        <StaticImage
          src="./iloveparis-roots.jpg"
          alt="Kristi Stice performing onstage with Gypsy Swing Revue for Blue Roots Denver."
        />
        <StaticImage
          src="./iloveparis-kuvo.jpg"
          alt=""
        />
        <StaticImage
          src="./iloveparis-bohemian.jpg"
          alt=""
        />
        <StaticImage
          src="./iloveparis-red.jpg"
          alt=""
        />
      </ImageGallery>
    </div>
  );
}