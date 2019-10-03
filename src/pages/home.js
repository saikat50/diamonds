import {Container} from 'react-bootstrap'


export default class Home extends React.Component {

    render() {
      return (
        <Container>
          <Navbar />
          <div class="slidecontainer">
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
  
          </div>
          <Modal />
          <PageBody />
        </Container>
      );
    }
  }