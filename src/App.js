import React from 'react';
import './App.css';
import './multiselect.css'
import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Messages } from './pages/messages'
import { Search } from './pages/search.js'
import jsonUsers from './data/users'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/Signup'
import Parse from 'parse';
import User from './Classes/User'
import {Message,usersMessages} from './Classes/Message'
import UserMessages from '../src/components/UserMessages'

// input: 4c's of diamond and a pricelist. output : list price of the diamond
export function listPrice(shape, color, clarity, weight, priceList) {
  console.log(shape, color, clarity, weight, priceList[0])
  if (shape !== "BR" && shape !== "round") { shape = "pear" } else { shape = "round" };
  for (var i = 0; i < priceList.length; i++) { //searches the right price on the pricelist
    if (shape === priceList[i].shape && color === priceList[i].color &&
      clarity === priceList[i].clarity && weight >= priceList[i].low_size &&
      weight <= priceList[i].high_size)
      return priceList[i].caratprice;
  }
  return 0;
}



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser:
        null,
      //   activeUser:  {
      //     "id": "duXjSsEtGt",
      //     "fname": "Boaz",
      //     "lname": "Pinto",
      //     "email": "pintob@gmail.com",
      //     "pwd": "123"
      // },
      allUsers: [],
      allMessages:[],
      isLoading:true
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);


  }
  componentDidMount() {
    let allUsers=[];
    let allMessages=[];

    const parseMessages = Parse.Object.extend('Messages');
    const query1 = new Parse.Query(parseMessages);

    query1.find().then((results) => {
      // You can use the "get" method to get the value of an attribute
      // Ex: response.get("<ATTRIBUTE_NAME>")
      console.log('Messages found', results);
      results.forEach(message=>{
        allMessages.push(new Message(message))
      });
      console.log('allmessages');
      console.log(allMessages);
      this.setState({allMessages:allMessages,isLoading:false});
    }, (error) => {
      console.error('Error while fetching Messages', error);
    });

    const parseUser = new Parse.User();
    const query = new Parse.Query(parseUser);

    query.find().then((users) => {
      console.log('User found', users);
      users.forEach(user=>{
        allUsers.push(new User(user))
        this.setState({allUsers});
      })
    }, (error) => {
      console.error('Error while fetching user', error);
    });

  }
  handleLogout() {
    const User1 = new Parse.User();
    const query = new Parse.Query(User1);
    const { activeUser } = this.state;
    // Finds the user by its ID
    query.get(activeUser.id).then((user) => {
      // Updates the data we want

      user.set('isLogin', false);
      user.set('lastLogout', new Date());

      // Saves the user with the updated data
      user.save().then((response) => {
        console.log('Updated user logout', response);
      }).catch((error) => {

        console.error('Error while updating user', error);
      });
    });
    this.setState({ activeUser: null });
  }

  handleLogin(activeUser) {

    this.setState({ activeUser });
  }
  ownerName = (userId) => {
    for (var i = 0; i < this.state.allUsers.length; i++) {
      if (this.state.allUsers[i].id == userId) return this.state.allUsers[i].fname + " " + this.state.allUsers[i].lname
    }

  }
  addMessage= (text,fromID,toID)=>{
    console.log(text);
    console.log(fromID);
    console.log(toID);
    let {allMessages}=this.state;
    const User2 = new Parse.User();
    const User1 = new Parse.User();
    const query2 = new Parse.Query(User2);
    const query1 = new Parse.Query(User1);
    let from,to;

    query1.get(fromID).then((from1) => {
        from=from1;
        console.log('User found', from1);
        query2.get(toID).then((to1) => {
                to=to1;
                console.log('User found', to1);

                const Messages = Parse.Object.extend('Messages');
                const myNewObject = new Messages();      
                myNewObject.set('from', from);
                myNewObject.set('to', to);
                myNewObject.set('text', text);
                myNewObject.set('read', false);
                myNewObject.set('deleted', false);
        
                myNewObject.save().then(
                    (result) => {
                        console.log('Messages created', result);
                        allMessages.push(new Message(result));
                        this.setState({allMessages});
                        alert("The Message: '"+text+"' has been sent");

                    },
                    (error) => {
                            console.error('Error while creating Messages: ', error);
                    });
        }, (error) => {
     
                console.error('Error while fetching user', error);
        });

    }, (error) => {
   
          console.error('Error while fetching user', error);
    });

  }

  render() {
  
    const { activeUser, allUsers,isLoading,allMessages} = this.state;
    if (isLoading) return false;
    console.log("finishloading");
    console.log(allMessages);
    return (


      <Switch>
        <Route exact path="/" ><Home   allMessages={allMessages} activeUser={activeUser} handleLogout={this.handleLogout}></Home></Route>
        <Route exact path="/home" ><Home   allMessages={allMessages} activeUser={activeUser} handleLogout={this.handleLogout}></Home></Route>
        <Route exact path="/messages" ><Messages  allMessages={allMessages} allUsers={allUsers} activeUser={activeUser} handleLogout={this.handleLogout}></Messages></Route>
        <Route exact path="/messages/:id" ><UserMessages addMessage={this.addMessage} allMessages={allMessages} allUsers={allUsers} activeUser={activeUser} handleLogout={this.handleLogout}></UserMessages></Route>
        <Route exact path="/search"><Search  addMessage={this.addMessage}   allMessages={allMessages} ownerName={this.ownerName} activeUser={activeUser} handleLogout={this.handleLogout}></Search></Route>
        <Route exact path="/login"> <LoginPage   allMessages={allMessages} handleLogout={this.handleLogout} activeUser={activeUser} users={allUsers} handleLogin={this.handleLogin}></LoginPage></Route>
        <Route exact path="/signup"> <SignupPage   allMessages={allMessages} handleLogout={this.handleLogout} activeUser={activeUser} users={allUsers} handleLogin={this.handleLogin}></SignupPage></Route>
      </Switch>

      // </div>
    );
  }
}

export default App;
