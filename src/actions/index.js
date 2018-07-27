import axios from 'axios';

const API_KEY = '3d44e94440143e729fcd7ac03b3c007a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const response = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: response
    }
}