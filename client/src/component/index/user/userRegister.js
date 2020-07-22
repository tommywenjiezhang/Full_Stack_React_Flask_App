import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userRegister} from "../../../redux/action/userAction/action";
import UserRegisterForm from "../UserRegisterForm";



class UserRegister extends Component {
    constructor(props) {
        super(props);
        this.renderNewUserMessage = this.renderNewUserMessage.bind(this)
    }

    onSubmit  = (formValues) => {
        this.props.userRegister(formValues)

    }
    renderNewUserMessage(){
        const {newUser} = this.props
        if(newUser){
            console.log(newUser)
            if(newUser.name){
                 return (<div className="alert alert-success" role="alert">
                {newUser.name} has successfully Created
            </div>)
            }
        }
    }
    render() {
        return (
            <div className="col-lg-10 offset-md-1">
                <h1>Register a new User</h1>
                {this.renderNewUserMessage()}
                < UserRegisterForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

 const mapStateToProps = ({user}) => {
     const {newUser} = user
     console.log(newUser)
     return{newUser}
 }


export default connect(
    mapStateToProps,
    {userRegister}
)(UserRegister);