import React from 'react';
import TextContainer from "../components/TextContainer";

const AboutPage = () => {
    return (
        <div>
            <TextContainer
                headerText="About"
                paragraphText="In case you were wondering who made this web app!"
                buttonText="Read More"
                targetId="target"
            />
            <div id="target" className="about-container2">
                <div className="about-picture-container">
                    <img className="profile-image" src="../assets/mattw.jpg" alt="Profile Picture"/>
                </div>
                <div className="about-text-container2">
                    <h1 className="about-header">Overview</h1>
                    <p className="about-description">
                        I am an incoming Computer Science senior at Arizona State University, looking
                        to further my experience in the industry. My main interests are Software Engineering and and
                        Artificial Intelligence, specifically related to Machine Learning. I'm a hardworking individual
                        who is adaptable to many situations and puts in a daily commitment to learning and
                        improvement.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;