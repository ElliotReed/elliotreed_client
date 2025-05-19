import styles from "./image-gallery.module.scss";

interface ImageProps {
    src: string
    alt: string
}

interface ImageGalleryProps { children: React.ReactNode[] }

export default function ImageGallery({ children }: Readonly<ImageGalleryProps>) {
    return (
        <ul className={styles["image-gallery"]}>
            {children.map((child: React.ReactNode, index: number) => {
                return (
                    <li key={index} className={styles.image}>
                        {child}
                    </li>
                )
            }
            )}
        </ul>
    );
}