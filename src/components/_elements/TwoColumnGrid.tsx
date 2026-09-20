import cx from "classnames";
import styles from "./two-column-grid.module.scss";

interface TwoColumnGridProps {
    smallSide: "left" | "right";
    children: React.ReactNode;
    className?: string;
}

export default function TwoColumnGrid({
    smallSide,
    children,
    className,
}: Readonly<TwoColumnGridProps>) {
    let style = styles.left;
    if (smallSide === "right") {
        style = styles.right;
    }

    return (
        <div className={cx(styles.twoColumnGrid, style, className)}>{children}</div>
    );
}