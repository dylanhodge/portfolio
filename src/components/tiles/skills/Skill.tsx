import styles from './Skills.module.scss';
import {BsCircle, BsCircleFill} from "react-icons/bs";

type SkillProps = {
    title: string,
    level: 1 | 2 | 3 | 4 | 5
};

export const Skill = ({
    title,
    level
}: SkillProps) => {
    return (
        <div className={styles.skillContainer}>
            <div>{title}</div>
            <div className={styles.skillBubbles}>
                {Array(level).fill(<BsCircleFill/>)}
                {Array(5 - level).fill(<BsCircle/>)}
            </div>
        </div>
    );
};
