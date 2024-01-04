import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import ImageGallery from "../ImageGallery";

export default function ILoveParisGallery() {
  return (
    <ImageGallery>
      <StaticImage
        src="./iloveparis-roots.jpg"
        alt=""
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
  );
}