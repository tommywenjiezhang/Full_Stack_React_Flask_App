import React, {Component} from 'react';
import {connect} from "react-redux";
import {get_all_cities} from '../../redux/action/cityAction/City'
import CityTable from "./cityItems/cityTable";
import CityView from "./cityItems/cityView";

class CityIndex extends Component {
    constructor(props) {
        super(props);
        this.tableRef = React.createRef();

    }

    componentDidMount() {
        console.log("city index mounted");
        this.props.get_all_cities();
    }
    componentDidUpdate() {

    }


    render() {
        let {cities} = this.props;
        return (
            <div className="row">
                    <div className="col-lg-4 offset-lg-1">
                    <CityTable ref={el => this.el = el} cities={cities && cities.length > 0 ? cities : [{cityName: "No City Yet"}]}/>
                </div>
                <div className="col-lg-4 offset-lg-2">
                    <CityView />
                </div>
            </div>
        );

    }
}


const mapStateToProps = (state) => {
    const {cities} = state.cities;
    return {cities}
};
export default connect(mapStateToProps, {get_all_cities})(CityIndex);