import React from 'react';
import { Container, InputGroup, FormControl, ListGroup,Image,Badge } from 'react-bootstrap'
import HomePageBody from '../components/HomePageBody'
import DiamondNavbar from '../components/DiamondNavbar';
import {usersMessages} from '../Classes/Message'
import { Redirect } from 'react-router-dom'

export class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter:"",
            redirectTo:""
        }
    }
    filterUsers=(e)=>{
        let {filter}=this.state;
        filter=e.target.value;
        this.setState({filter})
    }
    compareFunction=(a,b)=>{
        if (a.new&&!b.new) {return -1}
        else if (!a.new&&b.new)  {return 1}
        else if (a.lastMessageRecieved>b.lastMessageRecieved) {return -1}
        else return 1;
    }
  redirectToUserMessage(id){
      let redirectTo="/messages/"+id;
      this.setState({redirectTo});
  }
    render() {
        if (this.state.redirectTo) {return <Redirect to={this.state.redirectTo}/>}
        const { activeUser, handleLogout, allUsers,allMessages } = this.props;
        const {filter}=this.state;
        let listUsers = [];
        let pic;
        let newMessages="";
        let allUsersSorted=[];
        
        if (!activeUser) {
            return <Redirect to="/" />
        }

        allUsers.forEach(user=>{
            let userMessages=usersMessages(activeUser,allMessages,user)
            allUsersSorted.push({user:user,new:userMessages.new,lastMessageRecieved:userMessages.last})
        })
        allUsersSorted.sort(this.compareFunction)
        allUsersSorted.forEach(user => {
            let lastMessageRecieved="";
            if (activeUser && activeUser.id!==user.user.id && ( user.user.username.toLowerCase().includes(filter.toLowerCase())||user.user.lname.toLowerCase().includes(filter.toLowerCase())||user.user.fname.toLowerCase().includes(filter.toLowerCase()))){
                if (user.user.pic)  {pic=user.user.pic["_url"]} else {pic="https://aussiegossip.com.au/wp-content/uploads/2015/11/anonymous-logo-transparent-wallpaper-4.png"}
                if (user.new) {newMessages=  <Badge pill variant="success">{user.new} </Badge>} else {newMessages=""}
                if (user.lastMessageRecieved) lastMessageRecieved=(`${user.lastMessageRecieved}`)
                listUsers.push(<ListGroup.Item>
                                <div className="pointer" style={{border:"1px solid"}} onClick={()=>{ this.redirectToUserMessage(user.user.id)}}>
                                    <Image style={{height:"50px"}} src={pic}>
                                    </Image>
                                    {`  ${user.user.username}: ${user.user.fname} ${user.user.lname} `}{newMessages}{" "+lastMessageRecieved}
                                </div>
                                </ListGroup.Item>)
            }
        });
        return (
            <Container>
                <DiamondNavbar allMessages={allMessages}  activeUser={activeUser} handleLogout={handleLogout} />
                <h3>Messages:</h3>
                <InputGroup onChange={this.filterUsers} className="mb-0">
                    <FormControl
                        placeholder="Search user"
                        aria-label="User"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <ListGroup>
                    {listUsers}
                </ListGroup>
            </Container>
        );
    }
}

