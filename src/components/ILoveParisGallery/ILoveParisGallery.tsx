import { Image } from "astro:assets"

import ImageGallery from "../ImageGallery";

import rootsImage from "./iloveparis-roots.jpg";
import kuvoImage from "./iloveparis-kuvo.jpg";
import bohemianImage from "./iloveparis-bohemian.jpg";
import redImage from "./iloveparis-red.jpg";

interface ILoveParisGalleryProps {
    onClick: React.ReactEventHandler
}

export default function ILoveParisGallery({ onClick }: Readonly<ILoveParisGalleryProps>) {
    return (
        <div onClick={onClick}>
            <ImageGallery>
                <Image
                    src={rootsImage}
                    alt="Kristi Stice performing onstage with Gypsy Swing Revue for Blue Roots Denver."
                />
                <Image
                    src={kuvoImage}
                    alt="KUVO 89.3 FM performance with Kristi Stice and Gypsy Swing Revue."
                />
                <Image
                    src={bohemianImage}
                    alt="Bohemian Nights performance with Kristi Stice and Gypsy Swing Revue."
                />
                <Image
                    src={redImage}
                    alt="Performance with Kristi Stice and Gypsy Swing Revue at the Red Rocks Amphitheater."
                />
            </ImageGallery>
        </div>
    );
}