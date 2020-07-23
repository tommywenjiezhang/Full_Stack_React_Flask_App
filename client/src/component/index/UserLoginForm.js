import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux';
import * as Validation from '../validation'



class UserLoginForm extends Component {
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
        const {required}  = Validation
        return (
             <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                 <Field  name="username" component={this.renderInput} label="username" validate={[required]}/>
                 <Field name='password' component={this.renderInput} label="password" validate={[required]}/>
                 <button className='btn btn-success' type="submit">Submit</button>
            </form>
        );
    }
}

export default reduxForm({form:'userLogin'})(UserLoginForm)