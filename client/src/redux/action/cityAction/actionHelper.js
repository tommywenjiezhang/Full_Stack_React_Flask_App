import * as CityActionCreator from "./actionCreator";
import _ from "lodash";
import axios from "axios";
import {cityApi} from "../../../api/cityApi";

const _get_all_cities = async (dispatch) => {
    const citiesResponse = await cityApi.get("/api/cities/")
    dispatch(CityActionCreator.getAllCities(citiesResponse.data))
}

const _delete_city = _.memoize(async (city_id, dispatch) => {
    const response = await axios.delete("/api/cities/" + city_id)
    dispatch(CityActionCreator.deleteCity(response))
})

const _create_city = _.memoize(async (city,dispatch) => {
    console.log("city is ")
    console.log(city)
    const cityPostRes = await axios.post("/api/cities/", {
        ...city
    })
    dispatch(CityActionCreator.addCity(cityPostRes))
})

const _fetchGetCityImage = _.memoize(async (cityName,dispatch) => {
     const response = await axios.get("https://api.unsplash.com/search/photos/",
            {
                params: {
                    client_id: process.env.REACT_APP_UPSPLASH_API_KEY,
                    query: cityName
                }
            })
        const url = response.data.results[0].urls.regular
        dispatch(CityActionCreator.cityImage(url))
})

export {_get_all_cities, _delete_city, _create_city, _fetchGetCityImage}