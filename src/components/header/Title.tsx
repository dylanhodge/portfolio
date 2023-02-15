import styles from './Header.module.scss';
import properties from "../../resources/properties";

export const Title = () => {
    return (
        <div className={styles.title}>
            {properties.title} at {properties.company}
        </div>
    )
};
