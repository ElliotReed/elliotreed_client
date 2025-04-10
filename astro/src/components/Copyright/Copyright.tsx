import styles from "./copyright.module.scss";

interface CopyrightProps {
    originYear: string,
    holder: string,
    link: {
        to?: string | undefined,
        target?: string | undefined
    }
}

const Copyright = ({ originYear, holder, link }: CopyrightProps) => {
    const date = new Date()
    const year = date.getFullYear().toString();
    const copyright = `${originYear === year ? originYear : originYear + '-' + year}`;
    const target = link.target ? link.target : '_self';
    const content = link.to ? (<a href={link.to} target={target} rel={link.target === "_blank" ? "noopener noreferrer" : ""}>{holder}</a>) : holder;

    return (
        <p className={styles.copyright}>
            Copyright &copy; {copyright} {content}
        </p>
    );
}

export default Copyright
