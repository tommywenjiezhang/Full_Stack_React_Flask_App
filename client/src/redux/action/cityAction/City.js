import * as CityActionCreator from "./actionCreator";
import * as ActionHelper from './actionHelper'



export const get_all_cities = () => dispatch => ActionHelper._get_all_cities(dispatch)
export const get_single_city = (city) => CityActionCreator.getSingleCity(city)
export const get_city_image = cityName => dispatch => ActionHelper._fetchGetCityImage(cityName,dispatch)
export const delete_city = city_id => dispatch => ActionHelper._delete_city(city_id,dispatch)
export const create_city = city => dispatch => ActionHelper._create_city(city,dispatch)
export const edit_city = (city_id, formValues) => dispatch => ActionHelper._edit_city(city_id,formValues,dispatch)
export const fetch_single_city = (city_id) => dispatch =>ActionHelper._fetchSingleCity(city_id,dispatch)


