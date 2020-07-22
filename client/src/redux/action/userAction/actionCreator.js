import {LOGIN_ERROR, LOGIN_USER} from "./actionType";


export const loginUser = userObj => ({
    type: LOGIN_USER,
    payload: userObj
})


export const loginError = errorObject => ({
    type: LOGIN_ERROR,
    payload: errorObject
})

