import {LOGIN_ERROR, LOGIN_USER, REGISTER_USER} from '../action/userAction/actionType'

const userInitialState = {
    user:{},
    errors:{},
    newUser:{}
}
const user = (state=userInitialState, action) =>{
    switch (action.type) {
        case LOGIN_USER:
            const user = action.payload
            return {
                ...state,
                user: {...state.user,...user}
            }
        case LOGIN_ERROR:
            const error = action.payload
            return{
                ...state,
                errors: {...state.errors,...error}
            }
        case REGISTER_USER:
            const userObj = action.payload
            console.log(userObj)
            return{
                ...state,
                newUser:{...userObj}
            }
        default:
            return {...state}
    }
}
export  default user