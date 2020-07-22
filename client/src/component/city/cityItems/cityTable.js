import React from 'react';
import CityTableRow from "./cityTableRow";

const CityTable = (props) => {
    const cities = props.cities ? props.cities : [{cityName:"Loading"}];
    return (
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
    );
};



export default CityTable;