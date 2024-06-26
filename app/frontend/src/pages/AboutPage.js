import React from 'react';
import Container4 from "../components/Container4";

const AboutPage = () => {
    return (
        <div>
            <Container4
                headerText="About"
                paragraphText="In case you were wondering who made this web app!"
                buttonText="Read More"
            />
            <div className="larger-header-div">
                <h1 className="larger-header">About Me</h1>
            </div>
        </div>
    );
}

export default AboutPage;