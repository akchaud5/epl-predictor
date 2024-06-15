import axios from 'axios';

const baseURL = 'http://localhost:3000';

const api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchData = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const postData = async (data) => {
    try {
        const response = await api.post('/call-python', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

