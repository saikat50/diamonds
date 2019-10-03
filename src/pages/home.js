import React from 'react';
import {Container} from 'react-bootstrap'
import MyModal from '../components/MyModal'
import MyNavbar from '../components/MyNavbar'
import HomePageBody from '../components/HomePageBody'

export default class Home extends React.Component {

    render() {
      return (
        <Container>
          <MyNavbar />
          <div class="slidecontainer">
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
  
          </div>
          <MyModal />
          <HomePageBody />
        </Container>
      );
    }
  }