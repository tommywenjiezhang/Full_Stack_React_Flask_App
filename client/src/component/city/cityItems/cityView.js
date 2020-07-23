import React, {Component} from 'react';
import {connect} from "react-redux";
import {get_city_image,delete_city} from "../../../redux/action/cityAction/City"
import CityMap from "./cityMap";
import {cityImage} from "../../../redux/action/cityAction/actionCreator";
import '../cityAsset/noavailable.jpeg'

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
         const {city} = this.props.city ? this.props : {city: null}
         if(city.cityName && city.cityName.length > 0){
         this.props.get_city_image(city.cityName);
         }
    }

    render() {
        const {city} = this.props.city ? this.props : {city: null}
        const {cityImage:{url}} = this.props.cityImage ? this.props : {cityImage:{url:'../cityAsset/noavailable.jpeg'}}
        if (!checkIfCityAvailable(city)){
            return (
                <div className="card mt-2 text-center">
                <div className='row'>
                    <div className="col-md-12">
                        <img className="img-fluid" src={require("../cityAsset/noavailable.jpeg")}/>
                        <h1 className="card-title">Loading</h1>
                    </div>
                </div>
            </div>)
        }
        else{
            return (
            <div className="card mt-2 text-center">
                <div className='row'>
                    <div className="col-md-12">
                        <img className="img-fluid" src={url}/>
                        <h1 className="card-title mt-1 mb-2">{city.cityName}</h1>
                    </div>
                </div>
            </div>
        );
        }
    }
}
const checkIfCityAvailable = (cityImage) =>{
    if(cityImage){
        return true
    }
    else{
        return false
    }
}
const mapStateToProps = ({cities,response}) => {
    const {city, cityImage} = cities;
    console.log(response)
    return {city,cityImage} ;
}
export default connect(mapStateToProps, {get_city_image,delete_city})(CityView);