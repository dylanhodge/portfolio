import React from 'react';
import styles from './App.module.scss';
import {Container} from "./components/Container";
import {Header} from "./components/header/Header";
import {AboutMe} from "./components/tiles/about-me/AboutMe";
import {Skills} from "./components/tiles/skills/Skills";
import {Certifications} from "./components/tiles/certifications/Certifications";
import {WorkExperience} from "./components/tiles/work-experience/WorkExperience";

const App = (): JSX.Element => {
    return (
        <div className={styles.app}>
            <Container>
                <Header/>
                <AboutMe/>
                <div className={styles.skillsAndCertsTable}>
                    <div className={styles.skillsAndCerts}>
                        <div className={styles.skills}>
                            <Skills/>
                        </div>
                        <div className={styles.certs}>
                            <Certifications/>
                        </div>
                    </div>
                </div>
                <WorkExperience/>
            </Container>
        </div>
    );
}

export default App;
