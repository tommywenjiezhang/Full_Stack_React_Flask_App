import {FETCH_CITY_IMAGE, GET_ALL_CITIES, SELECT_CITY, DELETE_CITY, ADD_CITY} from "../action/cityAction/actionType";

const citiesInitialState = {
    cities:[]
}
const cities = (state=citiesInitialState, action) => {
    switch (action.type) {
        case GET_ALL_CITIES:
            const {cities} = action.payload;
            console.log(cities)
            return {
                ...state,
                cities: [...state.cities, ...cities]
            };
        case SELECT_CITY:
            const {city} = action.payload;
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
            console.log(response)
            return{
                ...state,
                response: {
                    ...response
                }
            }
        case ADD_CITY:
            const {cityPostRes} = action.payload;
            console.log(cityPostRes)
            return{
                ...state,
                response: {
                    ...cityPostRes
                }
            }
        default:
            return {...state}

    }
}

export default cities