import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

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

        if (redirectToHome) {
            return <Redirect to="/"/>
        }

        const signupLink = !activeUser ? <Nav.Link href="#/signup">Signup</Nav.Link> : null;
        const loginLink = !activeUser ? <Nav.Link href="#/login">Login</Nav.Link> : null;
        const logoutLink = activeUser ? <Nav.Link onClick={this.logout}>Logout</Nav.Link> : null;


        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#/"><img className="logo" src="https://lh3.googleusercontent.com/OF9EKU3HAk7CBZGxTv4dOAUXAUaSAXrUt3qKpB9MORDvNbT_4ZZyK3wCut6nnm4OO16RtfVlopxuhEiU3NjQxX1w4DTjsNh4Ub2V-vbt2jobmzOwC5mFAq5gfNJPCLBst16Rh-5uMnFj6oLx9mbLrBQacL5KGVlwyM6w7lxop-jiiLxLk5_6JMqUhTcM4iOYQzT71r5VDSuJvwZCTlVuYM9qSGv0wTXCvAn-iTaTpBoRZ69Z53oh9ro2ULO3NdwIwruzKseRGC4KbQWuWSDUsuP9AMiCh0iDT5w_pyXazxQv_iduDdZx5T--PZg0jdyjL5TxtEfjd2Ld3xpmvGuhQrF1obv1uBtSR32Tvvc_unEPEkjba2FdM3QPzh1Rx6bMB3YdG3BwtzR-SOrN8hoNcPAgDnEYKWx1ulZxDveI43HgXC8DEsEBWL3mgb2YyI2AXJ60b9--Ly1bFUKjRxOrURw7XiTtdas6YzOQ4ZJobmKPCeY-YKzBM51DCJUIoNFcu7ybcocwaH0DpA9XU_m6pzEBHqX8Cu_pmdYM70T2_k8B5kx04tYbXLfARtUrupRs6O5QTECsTmHg7jg88Dx6-ZRfbvUKHGVhXDNM-EjLvSMGth4nVma-KFUlqONHh96vabl_BzqBFPTwMl5yZ8PdcagqU1ubdZYZ6wVXXWuaKIr7yv-ZkBf1IaX0=s512-no"></img>Diamonds</Navbar.Brand>
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