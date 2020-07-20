import React, {Component} from 'react';
import {connect} from "react-redux";
import {get_city_image,delete_city} from "../../../redux/action/cityAction/City"
import CityMap from "./cityMap";

class CityView extends Component {
    constructor(props) {
        super(props);
        this.renderCityImage = this.renderCityImage.bind(this);
    }
    componentDidMount() {

    }
    componentDidUpdate() {
        this.renderCityImage();
    }
    renderCityMap(){

    }
    renderCityImage() {
         const {city} = this.props.city ? this.props : {city: {cityName: "New York"}}
         if(city.cityName && city.cityName.length > 0){
         this.props.get_city_image(city.cityName);
         }
    }

    render() {
        const {city} = this.props.city ? this.props : {city: {cityName: "New York"}}
        const {cityImage:{url}} = this.props.cityImage ? this.props : {cityImage:{url:'../cityAsset/noavailable.jpeg'}}
        console.log(city.id)
        return (
            <div className="card">
                <div className='row'>
                    <div className="col-md-12">
                        <img className="img-fluid" src={url}/>
                        <h1 className="card-title">{city.cityName}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({cities,response}) => {
    const {city, cityImage} = cities;
    console.log(response)
    return {city,cityImage} ;
}
export default connect(mapStateToProps, {get_city_image,delete_city})(CityView);