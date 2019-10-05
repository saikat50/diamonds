import React from 'react'
import { Container,Form, Button, Alert } from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import DiamondNavbar from '../components/DiamondNavbar';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invalidLogin: false,
            successLogin: false
        }

        this.emailInput = React.createRef();
        this.pwdInput = React.createRef();

        this.login = this.login.bind(this);
    }

    login() {

        const { users } = this.props;
        let newActiveUser = null;
        for (let i = 0; i < users.length && !newActiveUser; i++) {
            if (users[i].email === this.emailInput.current.value &&
                users[i].pwd === this.pwdInput.current.value) {
                    newActiveUser = users[i];
                }
        }

        if (newActiveUser) {
            this.props.handleLogin(newActiveUser);
            this.setState({successLogin: true});

        } else {
            this.setState({invalidLogin: true});
        }


    }

    render() {
        const { activeUser, handleLogout } = this.props;
        if (this.state.successLogin) {
            return <Redirect to="/home"/>
        }

        return (
            <Container>
            <DiamondNavbar activeUser={activeUser} handleLogout={handleLogout}/>
            <div className="login">
                <h1>Login to Diamonds</h1>
                <p>or <a href="#/signup">create an account</a></p>
                <Alert variant="danger" show={this.state.invalidLogin}>
                    Invalid email or password!
                </Alert>
                <Form>
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
                    <Button variant="success" type="button" block onClick={this.login}>
                        Login
                    </Button>
                </Form>
            </div>
            </Container>
        );
    }
}
export default LoginPage;