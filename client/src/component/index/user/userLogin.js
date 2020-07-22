import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userPostFetch} from '../../../redux/action/userAction/action'
import UserLoginForm from "../UserLoginForm";
import CityForm from "../../city/cityItems/cityForm";


 const mapStateToProps = ({user}) => ({user})
class UserLogin extends Component {
    constructor(props) {
        super(props);
    }
    onSubmit = (formValues) => {
        this.props.userPostFetch(formValues)
    }

    render() {
        return (
            <div className="col-lg-10 offset-md-1">
                <h1>Login a User</h1>
                <UserLoginForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(mapStateToProps, {userPostFetch})(UserLogin);