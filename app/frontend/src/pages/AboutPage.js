import React from 'react';
import Container1 from "../components/Container1";
import TeamCustomizationForm from "../components/TeamCustomization";

const AboutPage = () => {
    return (
        <div>
            <Container1/>
            <div className="larger-header-div">
                <h1 className="larger-header">About Me</h1>
            </div>
        </div>
    );
}

export default AboutPage;