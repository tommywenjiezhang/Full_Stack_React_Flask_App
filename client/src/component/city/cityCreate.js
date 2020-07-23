import React, {Component} from 'react';
import CityForm from './cityItems/cityForm'
import { connect } from "react-redux";
import {create_city} from "../../redux/action/cityAction/City";

class CityCreate extends Component {
    constructor(props) {
        super(props);

    }
    onSubmit = formValues => {
        this.props.create_city(formValues)
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-10 col-md-10 col-sm-10 offset-sm-1 offset-md-1">
                    <h1>Create a new City</h1>
                    < CityForm onSubmit={this.onSubmit} />
                </div>
            </div>
        );
    }
}

export default connect(
  null,
  {create_city}
)(CityCreate);