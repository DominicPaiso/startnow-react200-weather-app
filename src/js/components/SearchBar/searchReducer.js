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
    history: []
};

export default function searchReducer(state = defaultState, action) {
    console.log('action' , action);
    const { type, payload } = action;
    console.log('testing reducer', payload);
    switch (type) {
        case 'ADD_CITY': {
            return {
                ...state,
                city: payload
            };
        }

        case 'API_CALL_TO_PAYLOAD_FULFILLED': {
            return {
                ...state,
                name: payload.name,
                lat: payload.coord.lat,
                lon: payload.coord.lon,
                icon: payload.weather[0].icon,
                temp: payload.main.temp,
                pressure: payload.main.pressure,
                humidity: payload.main.humidity,
                temp_min: payload.main.temp_min,
                temp_max: payload.main.temp_max,
                wind_speed: payload.wind.speed,
                history: [payload.history,
                    ...state.history]
            }
        }

        // case 'GET_HISTORY': {
        //     return {
        //         ...state,
        //         history: payload
        //     }
        // }

        default: {
            return state;
        }
    }
}
