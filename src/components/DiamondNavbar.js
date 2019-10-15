import React from 'react'
import { Navbar, Nav,Badge,Image } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import diamondLogo from '../data/1c7be669e68d05366ad16b7d2b40333b-diamond-gemstone-black-icon-by-vexels.png'
import {usersMessages} from '../Classes/Message'

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
        const { activeUser,allMessages } = this.props;
        const { redirectToHome } = this.state;
        // console.log("navbar");
        // console.log(allMessages);
        let pic;
        // if (activeUser) console.log(activeUser.pic);
        if (activeUser&&activeUser.pic) { pic = activeUser.pic["_url"] } else { pic = "https://aussiegossip.com.au/wp-content/uploads/2015/11/anonymous-logo-transparent-wallpaper-4.png" }

        const signupLink = !activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null;
        const loginLink = !activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null;
        const logoutLink = activeUser ? <Nav.Link onClick={this.logout}><Image style={{width:"50px"}} src={pic} roundedCircle />{" "+this.props.activeUser.fname+" Logout"}</Nav.Link> : null;
        const newMessages=usersMessages( activeUser,allMessages).new;
        let myBadge="";
        if (newMessages){myBadge=(<Badge pill variant="success">{newMessages}</Badge>)}

        return (
            
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#/"><img className="logo" src={diamondLogo}></img>Diamonds</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#/search">Search</Nav.Link>
                        <Nav.Link href="#/messages">Messages{myBadge}</Nav.Link>
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