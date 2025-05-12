import { Icon } from "astro-icon/components";

import styles from "./go-to-detail-link.module.scss";

interface GoToDetailLinkProps {
    children: React.ReactNode
    to: string
}

export default function GoToDetailLink({ children, to }: Readonly<GoToDetailLinkProps>) {
    return (
        <a
            href={to}
            className={styles.goToDetailLink}
        >
            {children} <Icon name="tabler:chevron-right" />
        </a>
    );
}