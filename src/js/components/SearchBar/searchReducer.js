const defaultState = {
    city: '',
    name: '',
    lat: '',
    lon: '',
    icon: '',
    temp: '',
    pressure: '',
    humidity: '',
    temp_min: '',
    temp_max: '',
    wind_speed: '',

};

export default function SearchReducer(state = defaultState, action = {}) {
    const { type, payload } = action;
    console.log('testing reducer', payload);
    switch (type) {
        case 'ADD_CITY': {
            return {
                ...state,
                city: payload.city
            };
        }

        case 'API_CALL_TO_PAYLOAD': {
            return {
                ...state,
                name: payload.data.name,
                lat: payload.data.coord.lat,
                lon: payload.data.coord.lon,
                icon: payload.data.weather[0].icon,
                temp: payload.data.main.temp,
                pressure: payload.data.main.pressure,
                humidity: payload.data.main.humidity,
                temp_min: payload.data.main.temp_min,
                temp_max: payload.data.main.temp_max,
                wind_speed: payload.data.wind.speed
            }
        }

        default: {
            return state;
        }
    }
}
