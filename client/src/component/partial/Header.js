import React, { Component } from 'react';
import { Navbar, Nav, Dropdown, Collapse } from 'react-bootstrap'
import Layout from "./Layout";

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed:false
        }

    }
    toggleNavbar(){
        this.setState({
            collapsed:!this.state.collapsed
        })
    }
    render() {
        return (
            <div>
                <Layout />
                <Navbar expand="lg"
                activeKey="/home"
                className = "navContainer"
            >
                <button onClick={this.toggleNavbar} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <Navbar.Brand href="/">City App</Navbar.Brand>
                <Collapse in={this.state.collapsed} id="navbarResponsive">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Item className="nav-item">
                                <Nav.Link href="/" eventKey="home">home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link href="/new" eventKey="create">create new city</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link href="/login" eventKey="login">login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <Nav.Link href="/register" eventKey="register">register</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Collapse>
            </Navbar>
            </div>

        );
    }
}

export default Header;
