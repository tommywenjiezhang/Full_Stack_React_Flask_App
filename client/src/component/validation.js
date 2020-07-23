import React from "react";

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
       <div className="alert alert-danger alert-dismissible fade show mt-1">
           Invalid email address
        </div> : undefined

const required = (value) => {
    if(value){
        return undefined
    }
    else{
        return (
            <div className="alert alert-danger alert-dismissible fade show">
            Required Field
        </div>)
    }
}

const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined
const phoneNumber = value => value && !/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/i.test(value) ? <div className="alert alert-danger alert-dismissible fade show mt-1">
            Invalid Phone number
        </div> : undefined
const minValue = min => value =>
  value && value < min ? <div className="alert alert-danger alert-dismissible fade show mt-1">
      { `Must be at least ${min}` }
        </div> : undefined
const maxLength = max => value =>
  value && value.length > max ?  <div className="alert alert-danger alert-dismissible fade show mt-1">
      {`Must be ${max} characters or less`}
        </div> : undefined
const minValue18 = minValue(18)
const maxLength15 = maxLength(15)

const geocode = value => value && !/\d+.\d+/.test(value)?<div className="alert alert-danger alert-dismissible fade show mt-1">
            Invalid geocode
        </div>: undefined
export {email,number,phoneNumber,minValue18,maxLength15,geocode,required,maxLength,minValue}