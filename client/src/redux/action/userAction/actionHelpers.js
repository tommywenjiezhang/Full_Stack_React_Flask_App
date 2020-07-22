import {loginError, loginUser, registerUser} from "./actionCreator";
import {userApi} from "../../../api/userApi"
import history from "../../../history";
import _ from 'lodash'

const _user_login = async (dispatch, user) => {

    try{
        const response = await userApi.post("/auth", user)
        if(response.data.message){
        dispatch(loginError(response.data))
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
            dispatch(loginUser(userObject))
            history.push("/")
        }
        }
    }catch (error) {
        if (401 === error.response.status){
            dispatch(loginError({msg:"user enter wrong credential"}))
        }
    }
}

const _user_register = async (dispatch,user) => {
    try{
        const response = await userApi.post("/register",user)
        if(response.data){
            const {message} = response.data
            dispatch(registerUser(_.pick(user,['name','username','email'])))
        }
    }
    catch(error){
        console.log(error)
    }
}

export {_user_login,_user_register}