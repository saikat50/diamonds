import React from 'react';
import { Container, Jumbotron, ListGroup } from 'react-bootstrap'

import DiamondNavbar from '../components/DiamondNavbar';

export default class About extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const { activeUser, handleLogout, allMessages } = this.props;
        return (
            <Container>
                <DiamondNavbar cart={this.props.cart} allMessages={allMessages} activeUser={activeUser} handleLogout={handleLogout} />
                <Jumbotron fluid>
                    <Container>
                        <h1>About</h1>
                        <p>
                            this web sight has been built by Boaz Pinto as a final front end web development course project.

                        </p>
                        <h1>Features</h1>
                        <ListGroup>
                            <ListGroup.Item variant="primary">Search</ListGroup.Item>
                            <ListGroup.Item>show my listings - filter to owner=activeuser</ListGroup.Item>
                            <ListGroup.Item>clear all filters - clear filters</ListGroup.Item>
                            <ListGroup.Item>Add new Diamond - popup window to enter all diamond parameters</ListGroup.Item>
                            <ListGroup.Item>Acordion - click to see aditional information and action buttons</ListGroup.Item>
                            <ListGroup.Item>Delete - action buuton for the owner of the diamond</ListGroup.Item>
                            <ListGroup.Item>contact - action button for user to send message to the owner</ListGroup.Item>
                            <ListGroup.Item>filter - filter the list of diamonds by min weight and max weight</ListGroup.Item>
                            <ListGroup.Item>filter - filter the list by shapes buttons, mutiple selectio, clear all and select all</ListGroup.Item>
                            <ListGroup.Item>filter - double sided range input for color and clarity</ListGroup.Item>
                            <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
                            <ListGroup.Item variant="success">Success</ListGroup.Item>
                            <ListGroup.Item variant="danger">Danger</ListGroup.Item>
                            <ListGroup.Item variant="warning">Warning</ListGroup.Item>
                            <ListGroup.Item variant="info">Info</ListGroup.Item>
                            <ListGroup.Item variant="light">Light</ListGroup.Item>
                            <ListGroup.Item variant="dark">Dark</ListGroup.Item>
                        </ListGroup>
                        <h1>Contact</h1>
                        <p>
                            Boaz Pinto - pintob@gmail.com

                        </p>
                    </Container>
                </Jumbotron>
            </Container>
        );
    }
}

