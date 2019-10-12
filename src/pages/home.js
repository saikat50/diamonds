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
      const { activeUser, handleLogout,allMessages } = this.props;
      console.log("home");
      console.log(allMessages);
      return (
        <Container>
          <DiamondNavbar  allMessages={allMessages} activeUser={activeUser} handleLogout={handleLogout}/>
          <HomePageBody />
        </Container>
      );
    }
  }

