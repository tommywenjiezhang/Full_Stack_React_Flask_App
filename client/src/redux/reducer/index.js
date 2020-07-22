import { combineReducers } from "redux";
import cityReducer from "./cityReducer" ;
import { reducer as formReducer } from 'redux-form'
import userReducer from './userReducer'


export default combineReducers({
    cities:cityReducer,
    form:formReducer,
    user:userReducer
});