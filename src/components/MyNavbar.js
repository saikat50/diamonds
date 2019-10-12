import React from 'react'
import {Nav,Navbar,Button,Badge,Form} from 'react-bootstrap'
import Search from '../pages/search'
import App from '../App'
import {ReactDOM} from 'react-dom';

//the navbar displayed in all pages
export default class MyNavbar extends React.Component {
    constructor() {
      super();
      this.openLogin = this.openLogin.bind(this);
      this.openRegister = this.openRegister.bind(this);
      this.search = this.search.bind(this);
      this.homePage = this.homePage.bind(this);
  
    }
    search() {
      ReactDOM.render(
        <Search />,
        document.getElementById("root")
      );
    }
    homePage() {
      ReactDOM.render(
        <App />,
        document.getElementById("root")
      );
  
    }
    openLogin() {
  //NEED TO BE REVIED AND CHANGED
      document.getElementById("registerSection").classList.add("notVisible");
      document.getElementById("loginSection").classList.remove("notVisible");
  
      document.getElementById("loginBut").classList.add("lightBlueBorder");
      document.getElementById("registerBut").classList.remove("lightBlueBorder");
    }
    openRegister() {
  
      document.getElementById("loginSection").classList.add("notVisible");
      document.getElementById("registerSection").classList.remove("notVisible");
  
      document.getElementById("loginBut").classList.remove("lightBlueBorder");
      document.getElementById("registerBut").classList.add("lightBlueBorder");
    }
  
  
    render() {
  
      return (
        <div >
  
          <Navbar bg="primary" variant="dark" className="fixed">
            <Navbar.Brand href="#home">
              <img className="logo" src="../src/Data/1c7be669e68d05366ad16b7d2b40333b-diamond-gemstone-black-icon-by-vexels.png"></img>
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#search">Search Diamonds</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
              <Nav.Link href="#pricing">Messages
                  <Badge variant="light">
                  9
                  </Badge>
              </Nav.Link>
            </Nav>
            <Form inline>
  
              <Button onClick={this.openLogin} className="mr-sm-2" variant="outline-light" data-toggle="modal" data-target="#myModal">Login</Button>
              <Button onClick={this.openRegister} className="mr-sm-2" variant="outline-light" data-toggle="modal" data-target="#myModal">Register</Button>
            </Form>
          </Navbar>
        </div>
      );
    }
  }
  