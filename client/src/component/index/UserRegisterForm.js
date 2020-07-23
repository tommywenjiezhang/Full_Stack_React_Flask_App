import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import * as Validation from '../validation'
import {minValue} from "../validation";

class UserRegisterForm extends Component {
    constructor(props) {
        super(props);
    }

    renderInput({input,label,meta: { touched, error, warning }}){
        return (
            <div className="form-group">
                <label >{label}</label>
                <input className="form-control" {...input}/>
                 {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>

        )
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        const {email,phoneNumber,required, maxLength} = Validation
        return (
             <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                 <Field  name="username" component={this.renderInput} label="username" validate={[required,maxLength(15),minValue(5)]}/>
                 <Field name='password' component={this.renderInput} label="password" validate={[required,minValue(8)]}/>
                 <Field name='name' component={this.renderInput} label="name" validate={[required]}/>
                 <Field name='email' component={this.renderInput} label='email' validate={[required,email]} />
                 <Field name='phone' component={this.renderInput} label='phone' validate={[required,phoneNumber]} />
                 <button className='btn btn-success' type="submit">Submit</button>
                 <Link to="/" >Go back home </Link>
            </form>
        );
    }
}

export default reduxForm({form:'userRegister'})(UserRegisterForm)