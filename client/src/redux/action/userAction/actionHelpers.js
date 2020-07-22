import {loginError, loginUser} from "./actionCreator";
import {userApi} from "../../../api/userApi"
import * as UserActionCreator from './actionCreator'

const _user_login = async (dispatch, user) => {

    try{
        const response = await userApi.post("/auth", user)
        if(response.data.message){
        dispatch(UserActionCreator.loginError(response.data))
        }
        else{
        localStorage.setItem("token", response.data.access_token)
        localStorage.setItem("user_id",response.data.user_id)
       const res = await fetch('http://localhost:8081/api/login', {
            method:'post',
            headers: new Headers({
                'Authorization': 'JWT ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            }),
           body: JSON.stringify({user_id:localStorage.getItem('user_id')})
        })
        const userObject = await res.json()
        console.log(userObject)
        if(userObject){
            dispatch(UserActionCreator.loginUser(userObject))
        }
        }
    }catch (error) {
        if (401 === error.response.status){
            dispatch(loginError({msg:"user enter wrong credential"}))
        }
    }


}

export {_user_login}