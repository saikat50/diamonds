import React from 'react';
import { Container, InputGroup, FormControl, ListGroup, Image, Badge, Row, Col } from 'react-bootstrap'
import HomePageBody from '../components/HomePageBody'
import DiamondNavbar from '../components/DiamondNavbar';
import { usersMessages } from '../Classes/Message'
import { userDetails } from '../Classes/User'

export default class UserMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "",
            id: "Q1AKkgMzMS"
            // this.props.match.params.id
        }
    }
    componentDidMount(){
        this.conv.scrollTop = this.conv.scrollHeight;
    }
    render() {
        let pic;
        const { activeUser, handleLogout, allUsers, allMessages } = this.props;
        let theSender = userDetails(this.state.id, allUsers);
        console.log("the sender");
        console.log(theSender);
        if (theSender.pic) { pic = theSender.pic["_url"] } else { pic = "https://aussiegossip.com.au/wp-content/uploads/2015/11/anonymous-logo-transparent-wallpaper-4.png" }
        let showConversation = [];
        let conversation = usersMessages(activeUser, allMessages, theSender);
        conversation.messages.forEach(message => {
            console.log(message.from);
            console.log(activeUser.id)
            if (message.from.id === activeUser.id) {
                showConversation.push(<Row>
                    <Col xl="6" lg="6" md="6" sm="6" xs="6" ></Col>
                    <Col xl="6" lg="6" md="6" sm="6" xs="6" >
                        <spam className="from">
                            <p>You:</p>
                            <p>{message.text}</p>
                        </spam>
                    </Col>
                </Row>)
            }
            else {
                showConversation.push(<Row>

                    <Col xl="6" lg="6" md="6" sm="6" xs="6" >
                        <spam className="to">
                            <p>{theSender.fname}:</p>
                            <p>{message.text}</p>
                        </spam>
                    </Col>
                    <Col xl="6" lg="6" md="6" sm="6" xs="6" ></Col>
                </Row>)
            }
        })
        return (
            <Container id="page-container">
                <DiamondNavbar allMessages={allMessages} activeUser={activeUser} handleLogout={handleLogout} />

                <div className="userHeader"><Image style={{ width: "40px" }} src={pic}></Image>{`  ${theSender.fname} ${theSender.lname}`}</div>
                <Container ref={(element)=>{this.conv=element}} className="body">
                    {showConversation}
                </Container>
                <div id="footer">
                    <InputGroup className="mb-0">
                        <FormControl
                            onChange={(event)=>{event.target.addEventListener("keyup", function(event) {
                                // Number 13 is the "Enter" key on the keyboard
                                if (event.keyCode === 13) {
                                    this.props.addMessage(event.target.value,activeUser,theSender);
                                }
                              });}}
                            placeholder="Write Something"
                            aria-label="User"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </div>

            </Container>
        );
    }
}

