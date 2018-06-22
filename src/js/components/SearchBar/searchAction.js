import axios from 'axios';

// action with axios call to api
// http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=42db0dcc3ec86d73d68942eb995746b6

export function addCity(city) {
    console.log('inside of action', city);
    return {
        type: 'ADD_CITY',
        payload: {city} 
    }
}

export function apiCallToPayload(city) {
    let weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=42db0dcc3ec86d73d68942eb995746b6`
    return {
        type: 'API_CALL_TO_PAYLOAD',
        payload: axios
            .get(weatherAPI)
            .then(response => response.data)
    };

}
