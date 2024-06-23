import React from 'react';
import Container1 from "../components/Container1";
import TeamCustomizationForm from "../components/TeamCustomization";

const InformationPage = () => {
    return (
        <div>
            <Container1/>
            <div className="larger-header-div">
                <h1 className="larger-header">Information Page</h1>
            </div>
            <TeamCustomizationForm/>
        </div>
    );
}

export default InformationPage;