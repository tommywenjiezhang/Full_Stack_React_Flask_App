import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import {Redirect} from 'react-router-dom'
import * as Validation from '../../validation'
import '../cityAsset/style.css'

class CityForm extends Component {
    constructor(formProps) {
        super(formProps);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            redirectToNewPage: false
        }

    }
    renderInput({input,label,meta: { touched, error, warning } }){
        return (
            <div className="form-group">
                <label >{label}</label>
                <input className="form-control" {...input}/>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>

        )
    }
    handleSubmit(formValues){

    }


     onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };
    render() {
        const {required, geocode, maxLength,number} = Validation
        if (this.state.redirectToNewPage) {
             return (
             <Redirect to="/"/>)
        }
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field  name="lat" component={this.renderInput} label="lat" validate={[required,geocode]}/>
                <Field name="lng" component={this.renderInput} label="lng" validate={[required,geocode]}/>
                <Field name="abbreviation" component={this.renderInput} label="abbreviaton" validate={[required,maxLength(3)]}/>
                <Field name="capital" component={this.renderInput} label="capital" validate={[required]}/>
                <Field name="cityName" component={this.renderInput} label="cityName" validate={[required]}/>
                <Field name="country" component={this.renderInput} label="country" validate={[required]}/>
                <Field name="population" component={this.renderInput} label="population" validate={[required,number]}/>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        );
    }

}


export default reduxForm({form:'city'
})(CityForm)