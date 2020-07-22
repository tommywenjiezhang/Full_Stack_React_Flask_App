import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux';




class UserLoginForm extends Component {
    constructor(props) {
        super(props);
    }

    renderInput({input,label}){
        return (
            <div className="form-group">
                <label >{label}</label>
                <input className="form-control" {...input}/>
            </div>

        )
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
             <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                 <Field  name="username" component={this.renderInput} label="username"/>
                 <Field name='password' component={this.renderInput} label="password" />
                 <button type="submit">Submit</button>
            </form>
        );
    }
}

export default reduxForm({form:'userLogin'})(UserLoginForm)