import {ADD_CITY, DELETE_CITY, FETCH_CITY_IMAGE, GET_ALL_CITIES, SELECT_CITY} from "./actionType";

export const getAllCities= (cities) => {
    return {
        type:GET_ALL_CITIES,
        payload:
            {
                cities
            }
    }
}

export const getSingleCity = (city) => ({type: SELECT_CITY, payload:{city}})
export const cityImage  = (url) => {
    return {
        type:FETCH_CITY_IMAGE,
        payload:{
            url
        }
    }
}

export const deleteCity = (response) => {
    return {
        type:DELETE_CITY,
        payload:{
            response
        }
    }
}

export const addCity = (city) => {
    return {
        type:ADD_CITY,
        payload: {
            city
        }
    }
}