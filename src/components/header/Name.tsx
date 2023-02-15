import styles from './Header.module.scss';
import properties from "../../resources/properties";

export const Name = () => {
    return (
        <div className={styles.name}>
            {properties.name}
        </div>
    );
};
