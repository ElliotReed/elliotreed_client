import styles from "./back-button.module.scss";

export default function BackButton() {
    return (
        <button className={styles.backButton} onClick={() => history.back()}>
            ← Go Back
        </button>
    );
}
