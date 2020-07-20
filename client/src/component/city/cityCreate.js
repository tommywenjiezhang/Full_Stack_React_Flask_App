import React, {Component} from 'react';
import CityForm from './cityItems/cityForm'
class CityCreate extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-10 offset-md-1">
                    <h1>Create a new City</h1>
                    < CityForm />
                </div>
            </div>
        );
    }
}

export default CityCreate;