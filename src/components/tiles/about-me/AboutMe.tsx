import properties from "../../../resources/properties";
import styles from './AboutMe.module.scss';
import {Card} from "../../common/Card";
import me from '../../../resources/me.jpg';

export const AboutMe = () => {
    return (
        <Card title={'About Me'}>
            <div className={styles.aboutMeContainer}>
                <div className={styles.aboutMeMessage}>{properties.messages.welcome}</div>
                <div className={styles.aboutMeImage}><img className={styles.profilePic} src={me} alt={properties.name}/></div>
            </div>
        </Card>
    )
};
