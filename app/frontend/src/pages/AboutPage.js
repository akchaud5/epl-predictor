import React from 'react';
import TextContainer from "../components/TextContainer";
import FooterContainer from "../components/FooterContainer";
import AboutContainer from '../components/AboutContainer';
import '../styles/about.css';
import Navbar from "../components/Navbar";

const AboutPage = () => {

    const desc = "I am an incoming Computer Science senior at Arizona State University, looking to further my experience in the industry. My main interests are Software Engineering and Artificial Intelligence, specifically related to Machine Learning. I'm a hardworking individual who is adaptable to many situations and puts in a daily commitment to learning and improvement.";
    const education = "My Computer Science education has spanned the last 3 school years, including classes such as Data Structures and Algorithms, Distributed Software Development, Foundations of Machine Learning, and Operating Systems. I have also been a Undergraduate Teaching Assistant for both Intro to Theoretical Computer Science and Principles of Programming Languages.";
    return (
        <div>
            <Navbar />
            <TextContainer
                headerText="About"
                paragraphText="In case you were wondering who made this web app!"
                buttonText="Read More"
                targetId="target"
            />
            <AboutContainer reverseOrder={false} source={"/assets/mattw.jpg"} title={"Overview"} description={desc}/>
            <AboutContainer reverseOrder={true} source={"/assets/mattw.jpg"} title={"Education"} description={education}/>

            <FooterContainer />
        </div>
    );
}

export default AboutPage;
