import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetch_single_city , edit_city} from "../../../redux/action/cityAction/City";
import CityForm from './cityForm'
import { Redirect } from 'react-router-dom'


class CityEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {redirectToNewPage: false}
    }

    componentDidMount() {
        this.props.fetch_single_city(this.props.match.params.id)
    }
    onSubmit = formValues => {
        this.props.edit_city(this.props.match.params.id,formValues)
        this.setState({redirectToNewPage: true})
    }
    render() {
        if(!this.props.city){
            return (
            <div>
                loading
            </div>
        );
        }
        if (this.state.redirectToNewPage){
            return (
                   <Redirect to="/"/>
            )
        }
        return (
            <div>
                <h3>Edit {this.props.city.cityName} </h3>
                <CityForm
                    initialValues={_.pick(this.props.city, 'cityName', 'country', 'abbreviation')}
                    onSubmit={this.onSubmit}
                />
            </div>
        )

    }
}

const mapStatetoProps = (state) => {
    console.log(state)
    const {city} = state.cities
    return {city}
}

export default connect(mapStatetoProps,{fetch_single_city,edit_city})(CityEdit)