import { combineReducers } from "redux";
import cityReducer from "./cityReducer" ;
import { reducer as formReducer } from 'redux-form'


export default combineReducers({cities:cityReducer,
    form:formReducer
});