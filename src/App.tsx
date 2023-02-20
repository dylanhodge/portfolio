import React from 'react';
import styles from './App.module.scss';
import {Container} from "./components/Container";
import {Header} from "./components/header/Header";
import {AboutMe} from "./components/tiles/about-me/AboutMe";
import {Skills} from "./components/tiles/skills/Skills";
import {Certifications} from "./components/tiles/certifications/Certifications";

function App() {
    return (
        <Container>
            <Header/>
            <AboutMe/>
            <div className={styles.skillsAndCerts}>
                <div className={styles.skills}>
                    <Skills/>
                </div>
                <div className={styles.certs}>
                    <Certifications/>
                </div>
            </div>
        </Container>
    );
}

export default App;
