import React, { useState } from 'react';
import { fetchData } from '../services/api';
import HomeContainer from '../components/HomeContainer';


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
            <HomeContainer/>
        </div>
    );
}

export default HomePage;
