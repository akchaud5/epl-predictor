import React, { useState } from 'react';
import { fetchData } from '../services/api';

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
            <h2>Home Page</h2>
            <button onClick={fetchDataFromBackend}>Fetch Data</button>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    );
}

export default HomePage;
