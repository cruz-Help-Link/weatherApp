import axios from 'axios';

const API_KEY = '708593b2fefa8f87d1926259c7f4708a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';

export default fetchWeather = async (location) => {
    try{
        const response = await axios.get(`${BASE_URL}?q=${location}&appid=${API_KEY}&units=metric`);
        return response.data;

    } catch(error) {
        console.error(error);
        return null;
    }
}