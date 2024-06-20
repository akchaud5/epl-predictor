import React, { useState } from 'react';
import { fetchData } from '../services/api';
import Container1 from '../components/Container1';
import Container from '../components/Container';
import TeamCustomizationForm from '../components/TeamCustomizationForm';

function HomePage() {
    const [data, setData] = useState(null);

    const fetchDataFromBackend = async () => {
        try {
            const response = await fetchData();
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <Container1/>
            <div className="larger-header-div">
                <h1 className="larger-header">Predicted Best Players per Position</h1>
            </div>
            <TeamCustomizationForm/>
        </div>
    );
}

export default HomePage;
