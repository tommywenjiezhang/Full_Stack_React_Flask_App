import React from 'react';
import CityTableRow from "./cityTableRow";
import {connect} from "react-redux";

const CityTable = (props) => {
    const cities = props.cities ? props.cities : [{cityName:"Loading"}];

     const renderDeleteResponse = (props) => {
        const {response} = props
        console.log(response)
        if(response.message){
            return (<div className="alert alert-success">{response.cityName} is deleted</div>)
        }

    }

    return (
        <div>
            {renderDeleteResponse(props)}
            <table className="table" id="cityTable">
            <th>CityID</th>
            <th>CityName</th>
            <th>City's Country</th>
            <th>City's Abbreviation</th>
            <th>City's Population</th>
            <th>Control</th>
            <th>Control</th>
            {cities.map(city => <CityTableRow key={city.id} city={city}/>)}
        </table>
        </div>
    );
};

const mapStatetoProps = ({cities}) => {
    const { response} = cities
    return { response}
}


export default connect(mapStatetoProps,  null )(CityTable);