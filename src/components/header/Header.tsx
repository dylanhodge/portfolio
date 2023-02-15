import styles from './Header.module.scss';
import {Name} from "./Name";
import {Title} from "./Title";
import {ContactInfo} from "./ContactInfo";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.nameTitleContainer}>
                <Name/>
                <Title/>
            </div>
            <ContactInfo/>
        </div>
    )
};
