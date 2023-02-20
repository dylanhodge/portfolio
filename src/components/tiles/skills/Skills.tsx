import styles from './Skills.module.scss';
import properties from "../../../resources/properties";
import {Card} from "../../common/Card";
import {Skill} from "./Skill";

export const Skills = (): JSX.Element => {
    return (
        <Card title={'Skills'}>
            <div className={styles.skills}>
                {properties.skills.map(skill => <Skill key={skill.skill} title={skill.skill} level={skill.level}/>)}
            </div>
        </Card>
    )
};
