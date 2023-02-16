import React from 'react';
import {Container} from "./components/Container";
import {Header} from "./components/header/Header";
import {AboutMe} from "./components/tiles/about-me/AboutMe";

function App() {
    return (
        <Container>
            <Header/>
            <AboutMe/>
        </Container>
    );
}

export default App;
