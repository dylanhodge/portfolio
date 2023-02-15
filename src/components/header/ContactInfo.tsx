import styles from './Header.module.scss';
import properties from "../../resources/properties";
import {AiOutlineMail, AiFillLinkedin, AiFillGithub} from "react-icons/ai";

export const ContactInfo = () => {
    return (
        <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
                <a className={styles.contactItemText} href={`mailto:${properties.email}`}>{properties.email}</a>
                <AiOutlineMail size={'1.5em'}/>
            </div>
            <div className={styles.contactItem}>
                <a className={styles.contactItemText} href={`https://${properties.linkedIn}`}>{properties.linkedIn}</a>
                <AiFillLinkedin size={'1.5em'}/>
            </div>
            <div className={styles.contactItem}>
                <a className={styles.contactItemText} href={`https://${properties.github}`}>{properties.github}</a>
                <AiFillGithub size={'1.5em'}/>
            </div>
        </div>
    );
};
