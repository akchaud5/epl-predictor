import React, { useState } from 'react';
import { fetchData } from '../services/api';
import HomeContainer from '../components/HomeContainer';
import PreviewContainer from "../components/PreviewContainer";
import FooterContainer from "../components/FooterContainer";
import Navbar from "../components/Navbar";


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
            <Navbar />
            <HomeContainer/>
            <PreviewContainer/>
            <FooterContainer/>
        </div>
    );
}

export default HomePage;
