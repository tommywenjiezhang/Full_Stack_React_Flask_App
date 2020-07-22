import {LOGIN_ERROR, LOGIN_USER, REGISTER_USER} from "./actionType";


export const loginUser = userObj => ({
    type: LOGIN_USER,
    payload: userObj
})


export const loginError = errorObject => ({
    type: LOGIN_ERROR,
    payload: errorObject
})

export const registerUser = user => ({
    type: REGISTER_USER,
    payload: user

})