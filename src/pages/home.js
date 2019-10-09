import React from 'react';
import {Container} from 'react-bootstrap'
import MyModal from '../components/MyModal'
import MyNavbar from '../components/MyNavbar'
import HomePageBody from '../components/HomePageBody'
import DiamondNavbar from '../components/DiamondNavbar';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
}
    render() {
      const { activeUser, handleLogout } = this.props;
      return (
        <Container>
          {/* <MyNavbar /> */}
          <DiamondNavbar activeUser={activeUser} handleLogout={handleLogout}/>
          <div className="slidecontainer">  
          </div>
          {/* <MyModal /> */}
          <HomePageBody />
        </Container>
      );
    }
  }

