import React from 'react'
import { Container,Form, Button, Alert } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import DiamondNavbar from '../components/DiamondNavbar';
import User from '../Classes/User'
import Parse from 'parse';

class SignupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invalidLogin: false,
            successLogin: false
        }

        this.emailInput = React.createRef();
        this.pwdInput = React.createRef();
        this.userInput = React.createRef();
        this.lnameInput = React.createRef();
        this.fnameInput = React.createRef();
    }

    signup= ()=> {

        const user = new Parse.User()
        user.set('username', this.userInput.current.value);
        user.set('email', this.emailInput.current.value);
        user.set('lname', this.lnameInput.current.value);
        user.set('fname', this.fnameInput.current.value);
        user.set('password', this.pwdInput.current.value);
        user.set('isLogin', true);
        
        user.signUp().then((user) => {

          console.log('User signed up', user);
          this.props.handleLogin(new User(user));
          this.setState({successLogin: true});

        }).catch(error => {

          console.error('Error while signing up user', error);
          this.setState({invalidLogin: true});
        });

    }

    render() {
        const { activeUser, handleLogout } = this.props;
        if (this.state.successLogin) {
            return <Redirect to="/home"/>
        }

        return (
            <Container>
            <DiamondNavbar  allMessages={this.state.allMessages} activeUser={activeUser} handleLogout={handleLogout}/>
            <div className="login">
                <h1>SignUp to Diamonds</h1>
                <p>or <a href="#/login">Allready have an accout? Login here</a></p>
                <Alert variant="danger" show={this.state.invalidLogin}>
                    Signup has failed! Please choose a complex password
                </Alert>
                <Form>
                <Form.Group controlId="formBasicUsername">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control ref={this.userInput} type="text" placeholder="Enter username"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={this.emailInput} type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={this.pwdInput}  type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicfname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control ref={this.fnameInput} type="text" placeholder="Enter first name"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasiclname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control ref={this.lnameInput} type="text" placeholder="Enter Last name"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Button variant="success" type="button" block onClick={this.signup}>
                        Signup
                    </Button>
                </Form>
            </div>
            </Container>
        );
    }
}
export default SignupPage;