import React from 'react';
import { Container, InputGroup, FormControl, ListGroup, Image, Badge, Row, Col,Button } from 'react-bootstrap'
import HomePageBody from '../components/HomePageBody'
import DiamondNavbar from '../components/DiamondNavbar';
import { usersMessages } from '../Classes/Message'
import { userDetails } from '../Classes/User'
import deleteImg from '../data/icons8-delete-message-26.png'
import readMessage from '../data/seen-300x225.webp'
import recievedMessage from '../data/V-512.png'

export function fullMinutes(min){
    if (min>9) return min;
    return "0"+min;
}
export function parseDateTime(dateTime){
    let answer=""
 const today=new Date();
 if (dateTime.getFullYear()!=today.getFullYear()||dateTime.getMonth()!=today.getMonth()||dateTime.getDate()!=today.getDate()) 
                    answer=answer+dateTime.getDate()+"/"+dateTime.getMonth()+"/"+dateTime.getFullYear()+" "
answer=answer+dateTime.getHours()+":"+fullMinutes(dateTime.getMinutes());
return answer;
}



export default class UserMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message:"",
            filter: "",
             id:window.location.hash.substring(11)
            // id: "Q1AKkgMzMS"
            // id:this.props.match.params.id
        }
    
    }

    componentDidMount(){
        this.conv.scrollTop = this.conv.scrollHeight;
        const { activeUser, allMessages,messageRead,allUsers } = this.props;
        let theSender = userDetails(this.state.id, allUsers);
        let conversation = usersMessages(activeUser, allMessages, theSender);
        conversation.messages.forEach(message => {
            console.log("from "+message.from.id+theSender.id+" is read? "+message.read)
            if (message.from.id===theSender.id && !message.read){
                console.log('now should be read message '+message.id)
                messageRead(message);
            }
        })
    }
    
    render() {
        let messageDate;
        let pic;
        let index=-1;
        const { activeUser, handleLogout, allUsers, allMessages, addMessage,deleteMessage,markDeleted } = this.props;
        let theSender = userDetails(this.state.id, allUsers);
        console.log(this.state.id);
        console.log("the sender");
        console.log(theSender);
        
        if (theSender.pic) { pic = theSender.pic["_url"] } else { pic = "https://aussiegossip.com.au/wp-content/uploads/2015/11/anonymous-logo-transparent-wallpaper-4.png" }
        let showConversation = [];
        let conversation = usersMessages(activeUser, allMessages, theSender);
        conversation.messages.forEach(message => {
            index++;
            messageDate=parseDateTime(message.createdAt);
            console.log(message.from);
            console.log(activeUser.id);
            if (message.from.id === activeUser.id) {
                showConversation.push(<Row>
                    <Col xl="4" lg="4" md="4" sm="4" xs="4" ></Col>
                    <Col style={{display:"flex"}} xl="8" lg="8" md="8" sm="8" xs="8" >
                        <spam className="from">
                            <div style={{display:"flex"}}>
                            <p  style={{color:"red"}}>You:</p>
                            <img onClick={(e)=>{deleteMessage(e.target.id)}} className="deleteMessage" id={message.id} style={{width:"15px",height:"15px",marginLeft:"auto",marginRight:"5px"}} src={deleteImg}></img>
                            </div>
                            <p>{message.text}</p>
                            <div style={{display:"flex"}}>
                            <img style={{width:"15px",height:"15px",marginRight:"auto",marginLeft:"5px"}} src={recievedMessage} hidden=
                            {(message.read||!message.recieved)}
                            ></img>
                            <img style={{width:"15px",height:"15px",marginRight:"auto",marginLeft:"5px"}} src={readMessage} hidden={!message.read}></img>
                            <p style={{fontSize:"10px",color:"black",marginLeft:"auto"}}>{messageDate}</p>
                            </div>
                        </spam>
                    </Col>
                </Row>)
            }
            else if(!message.deleted) {
                showConversation.push(<Row>

                    <Col xl="8" lg="8" md="8" sm="8" xs="8" >
                        <spam className="to">
                        <div style={{display:"flex"}}>
                            <p>{theSender.fname}:</p>
                            <img onClick={(e)=>{markDeleted(e.target.id)}}  className="deleteMessage"  id={message.id} style={{width:"15px",height:"15px",marginLeft:"auto",marginRight:"5px"}} src={deleteImg}></img>
                            </div>
                            <p>{message.text}</p>
                            <p style={{fontSize:"10px",color:"black",marginLeft:"auto"}}>{messageDate}</p>
                        </spam>
                    </Col>
                    <Col xl="4" lg="4" md="4" sm="4" xs="4" ></Col>
                </Row>)
            }
        })
        return (
            <Container id="page-container">
                <DiamondNavbar cart={this.props.cart} allMessages={allMessages} activeUser={activeUser} handleLogout={handleLogout} />

                <div className="userHeader"><Image style={{ width: "40px" }} src={pic}></Image>{`  ${theSender.fname} ${theSender.lname}`}
                </div>
                <Container ref={(element)=>{this.conv=element}} className="body">
                    {showConversation}
                </Container>
                <div id="footer">
                    <InputGroup className="mb-0">
                        <FormControl
                            value={this.state.message}
                            onChange={(event)=>{
                                let {message}=this.state;
                                message=event.target.value;
                                this.setState({message});
                            }}
                            placeholder="Write Something"
                            aria-label="User"
                            aria-describedby="basic-addon1"
                        />
                         <InputGroup.Append>
                             <Button onClick={()=>{
                                     let {message}=this.state;
                                    addMessage(message,activeUser.id,theSender.id);
                                    message="";
                                    this.setState({message});
                             }} 
                             variant="primary">Send</Button>
                         </InputGroup.Append>
                    </InputGroup>
                </div>

            </Container>
        );
    }
}

