import React from 'react';
import Container4 from "../components/Container4";

const InformationPage = () => {
    return (
        <div>
            <Container4
                headerText="Information"
                paragraphText="This page is intended to provide information about the machine learning models and techniques used for this project."
                buttonText="Read More"
            />
            <div className="larger-header-div">
                <h1 className="larger-header">Information Page</h1>
            </div>
        </div>
    );
}

export default InformationPage;