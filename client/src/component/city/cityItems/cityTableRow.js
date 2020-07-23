import React from 'react';
import { connect } from "react-redux";
import {get_single_city, delete_city} from "../../../redux/action/cityAction/City"
import { Link } from 'react-router-dom';

const CityTableRow = (props) => {
    const {city,key,get_single_city, delete_city} = props;
    const onDeleteClick = (e) => {
        e.preventDefault()
        delete_city(e.target.key)
    }

    return (
        <tr key = {key} onClick={() => get_single_city(city)}  >
            <td >{city.id}</td>
            <td >{city.cityName}</td>
            <td>{city.country}</td>
            <td>{city.abbreviation}</td>
            <td>{city.population}</td>
            <td>
                <form key={key} onSubmit={(e) => {
                    e.preventDefault()
                    delete_city(city.id)
                }}>
                    <input type="submit" value="delete" className="btn btn-danger"/>
                </form>
            </td>
            <td>
                  <Link to={`/edit/${city.id}`} className="btn btn-secondary">
                    Edit
                 </Link>
            </td>
        </tr>
    );
};

export default connect(null, {get_single_city,delete_city})(CityTableRow);