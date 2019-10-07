import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import diamondLogo from '../data/1c7be669e68d05366ad16b7d2b40333b-diamond-gemstone-black-icon-by-vexels.png'

class DiamondNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToHome: false
        }

        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.handleLogout();

        if (window.location.hash != "#/") {
            this.setState({redirectToHome: true})
        }
    }

    // // this function in onvoked after every render (but not the first)
    // componentDidUpdate() {
    //     if (this.state.redirectToHome) {
    //         this.setState({redirectToHome: false})
    //     }
    // }

    

    render() {
        const { activeUser } = this.props;
        const { redirectToHome } = this.state;

        // if (redirectToHome) {
        //     return <Redirect to="/"/>
        // }

        const signupLink = !activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null;
        const loginLink = !activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null;
        const logoutLink = activeUser ? <Nav.Link onClick={this.logout}>{this.props.activeUser.fname+" Logout"}</Nav.Link> : null;


        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#/"><img className="logo" src={diamondLogo}></img>Diamonds</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/search">Search</Nav.Link>
                        <Nav.Link href="#/messages">Messages</Nav.Link>
                        <Nav.Link href="#/about">About</Nav.Link>
                    </Nav>

                    <Nav className="ml-auto">
                        {signupLink}
                        {loginLink}
                        {logoutLink}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default DiamondNavbar;