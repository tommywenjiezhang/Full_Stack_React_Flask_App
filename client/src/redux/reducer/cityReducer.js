import {
    FETCH_CITY_IMAGE,
    GET_ALL_CITIES,
    SELECT_CITY,
    DELETE_CITY,
    ADD_CITY,
    FETCH_SINGLE_CITY
} from "../action/cityAction/actionType";

const citiesInitialState = {
    cities:[],
    response:{}
}
const cities = (state=citiesInitialState, action) => {
    switch (action.type) {
        case GET_ALL_CITIES:
            const {cities} = action.payload;
            return {
                ...state,
                cities: [...state.cities, ...cities]
            };
        case SELECT_CITY:
            var {city} = action.payload;
            return{
                ...state,
                city:{...state.city,...city}
            };
        case FETCH_CITY_IMAGE:
            const {url} = action.payload;
            return{
                ...state,
                cityImage:{
                    ...state.cityImage,
                    url
                }
            }
        case DELETE_CITY:
            const {response} = action.payload;
            return{
                ...state,
                response: {...state.response, ...response}
            }
        case ADD_CITY:
            const {cityPostRes} = action.payload;
            return{
                ...state,
                response: {
                    ...cityPostRes
                }
            }
        case FETCH_SINGLE_CITY:
            var {city} = action.payload
            return{
                ...state,
                city:{
                    ...city
                }
            }
        default:
            return {...state}

    }
}

export default cities