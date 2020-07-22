import {LOGIN_ERROR, LOGIN_USER} from '../action/userAction/actionType'

const userInitialState = {
    user:{},
    errors:{}
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
        default:
            return {...state}
    }
}
export  default user