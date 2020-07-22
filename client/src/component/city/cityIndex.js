import React, {Component} from 'react';
import {connect} from "react-redux";
import {get_all_cities} from '../../redux/action/cityAction/City'
import CityTable from "./cityItems/cityTable";
import CityView from "./cityItems/cityView";

class CityIndex extends Component {
    constructor(props) {
        super(props);
        this.tableRef = React.createRef();
        this.renderUserLogin = this.renderUserLogin.bind(this)
    }

    componentDidMount() {
        console.log("city index mounted");
        this.props.get_all_cities();
    }
    componentDidUpdate() {

    }
    renderUserLogin(){
        if(this.props.user.user.name){
            const {user} = this.props.user
            console.log(user)
            return (
            <div className="alert alert-success" role="alert">
                {user.name} has successfully login
            </div>)
        }
    }


    render() {
        let {cities} = this.props;

        return (
            <div className="row">
                  <div className="col-lg-4 offset-lg-1 offset-md-1 mt-2">
                    <CityView />
                </div>
                    <div className="col-lg-4 offset-lg-1 offset-md-1">
                        {this.renderUserLogin()}
                    <CityTable ref={el => this.el = el} cities={cities && cities.length > 0 ? cities : [{cityName: "No City Yet"}]}/>
                </div>
            </div>
        );

    }
}


const mapStateToProps = (state) => {
    const {cities} = state.cities;
    const {user} = state
    console.log(user)
    return {cities, user}
};
export default connect(mapStateToProps, {get_all_cities})(CityIndex);