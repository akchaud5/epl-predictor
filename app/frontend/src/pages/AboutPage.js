import React from 'react';
import TextContainer from "../components/TextContainer";
import FooterContainer from "../components/FooterContainer";
import AboutContainer from '../components/AboutContainer';
import '../styles/about.css';

const AboutPage = () => {
    return (
        <div>
            <TextContainer
                headerText="About"
                paragraphText="In case you were wondering who made this web app!"
                buttonText="Read More"
                targetId="target"
            />
            <AboutContainer reverseOrder={false} source={"/assets/mattw.jpg"} />
            <FooterContainer />
        </div>
    );
}

export default AboutPage;
