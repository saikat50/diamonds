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
import { Message, usersMessages } from './Classes/Message'
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
      allMessages: [],
      isLoading: true,
      cart: []
    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);


  }
  getMessages = () => {
    let allMessages = [];
    const { activeUser } = this.state;
    const parseMessages = Parse.Object.extend('Messages');
    const query1 = new Parse.Query(parseMessages);
    query1.find().then((results) => {
      // You can use the "get" method to get the value of an attribute
      // Ex: response.get("<ATTRIBUTE_NAME>")
      console.log('Messages found', results);
      let message1;
      results.forEach(message => {
        // console.log("message to:");
        // console.log(message);
        message1 = new Message(message);
        if (activeUser && message1.to.id === activeUser.id && !message1.recieved) {
          message1.recieved = true;
          const Messages = Parse.Object.extend('Messages');
          const query = new Parse.Query(Messages);
          // here you put the objectId that you want to update
          query.get(message1.id).then((object) => {
            object.set('recieved', true);
            object.save().then((response) => {
              // You can use the "get" method to get the value of an attribute
              // Ex: response.get("<ATTRIBUTE_NAME>")

              console.log('Updated Messages', response);
            }, (error) => {

              console.error('Error while updating Messages', error);
            });
          });
        }
        allMessages.push(message1);

      });
      // console.log('allmessages');
      // console.log(allMessages);
      this.setState({ allMessages: allMessages, isLoading: false });
    }, (error) => {
      console.error('Error while fetching Messages', error);
    });
  }

  componentDidMount() {
    this.getMessages();
    setInterval(this.getMessages, 30000);

    let allUsers = [];
    const parseUser = new Parse.User();
    const query = new Parse.Query(parseUser);

    query.find().then((users) => {
      console.log('User found', users);
      users.forEach(user => {
        allUsers.push(new User(user))
        this.setState({ allUsers });
      })
    }, (error) => {
      console.error('Error while fetching user', error);
    });

  }
  handleLogout() {
    const User1 = new Parse.User();
    const query = new Parse.Query(User1);
    const { activeUser, cart } = this.state;
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
    cart = [];
    this.setState({ activeUser: null, cart });
  }

  handleLogin(activeUser) {
    let { cart } = this.state;
    if (cart === []) {
      cart = activeUser.cart;
    }
    else if (activeUser.cart) {
      for (var i = 0; i < activeUser.cart.length; i++) {
        cart.concat([activeUser.cart[i]]);
      }
      const User = new Parse.User();
      const query = new Parse.Query(User);

      // Finds the user by its ID
      query.get(activeUser.id).then((user) => {
        // Updates the data we want
        user.set('cart', cart);
        // Saves the user with the updated data
        user.save().then((response) => {

          console.log('Updated user', response);
        }).catch((error) => {

          console.error('Error while updating user', error);
        });
      });

    }
    else {
      const User = new Parse.User();
      const query = new Parse.Query(User);

      // Finds the user by its ID
      query.get(activeUser.id).then((user) => {
        // Updates the data we want
        user.set('cart', cart);
        // Saves the user with the updated data
        user.save().then((response) => {

          console.log('Updated user', response);
        }).catch((error) => {

          console.error('Error while updating user', error);
        });
      });

    }
    this.setState({ activeUser, cart });
  }
  ownerName = (userId) => {
    for (var i = 0; i < this.state.allUsers.length; i++) {
      if (this.state.allUsers[i].id == userId) return this.state.allUsers[i].fname + " " + this.state.allUsers[i].lname
    }

  }
  deleteMessage = (id) => {
    let { allMessages } = this.state;
    const Messages = Parse.Object.extend('Messages');
    const query = new Parse.Query(Messages);
    // here you put the objectId that you want to delete
    query.get(id).then((object) => {
      object.destroy().then((response) => {

        console.log('Deleted Messages', response);
        for (var i = 0; i < allMessages.length; i++) {
          if (id === allMessages[i].id) {
            allMessages.splice(i, 1);
            break;
          }
        }
        this.setState({ allMessages });
      }, (error) => {

        console.error('Error while deleting Messages', error);
      });
    });
  }
  addMessage = (text, fromID, toID) => {
    console.log(text);
    console.log(fromID);
    console.log(toID);
    let { allMessages } = this.state;
    const User2 = new Parse.User();
    const User1 = new Parse.User();
    const query2 = new Parse.Query(User2);
    const query1 = new Parse.Query(User1);
    let from, to;

    query1.get(fromID).then((from1) => {
      from = from1;
      console.log('User found', from1);
      query2.get(toID).then((to1) => {
        to = to1;
        console.log('User found', to1);

        const Messages = Parse.Object.extend('Messages');
        const myNewObject = new Messages();
        myNewObject.set('from', from);
        myNewObject.set('to', to);
        myNewObject.set('text', text);
        myNewObject.set('read', false);
        myNewObject.set('deleted', false);
        myNewObject.set('recieved', false);
        myNewObject.save().then(
          (result) => {
            console.log('Messages created', result);
            allMessages.push(new Message(result));
            this.setState({ allMessages });
            // alert("The Message: '"+text+"' has been sent");

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
  markDeleted = (id) => {
    let { allMessages } = this.state;
    const Messages = Parse.Object.extend('Messages');
    const query = new Parse.Query(Messages);
    // here you put the objectId that you want to update
    query.get(id).then((object) => {
      object.set('deleted', true);
      object.save().then((response) => {
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")

        console.log('Updated Messages', response);
        for (var i = 0; i < allMessages.length; i++) {
          if (id === allMessages[i].id) {
            allMessages.splice(i, 1);
            break;
          }
        }
        this.setState({ allMessages });
      }, (error) => {

        console.error('Error while updating Messages', error);
      });
    });
  }
  messageRead = (message) => {
    const Messages = Parse.Object.extend('Messages');
    const query = new Parse.Query(Messages);
    // here you put the objectId that you want to update
    let { allMessages } = this.state;
    for (var i = 0; i < allMessages.length; i++) {
      if (allMessages[i].id === message.id) {
        allMessages[i].read = true;
        break;
      }
    }
    query.get(message.id).then((object) => {
      object.set('read', true);
      object.save().then((response) => {
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        console.log('Updated Messages', response);
      }, (error) => {
        console.error('Error while updating Messages', error);
      });
    });
    this.setState({ allMessages });
  }
  addToCart = (diamondId) => {
    console.log("diamond id to add to cart");
    console.log(diamondId)
    let { activeUser, cart } = this.state;
    if(!cart) cart=[];
    cart.push(diamondId);
    console.log(cart);
    if (activeUser) {
      const User = new Parse.User();
      const query = new Parse.Query(User);

      // Finds the user by its ID
      query.get(activeUser.id).then((user) => {
        // Updates the data we want
        user.set('cart', cart);
        // Saves the user with the updated data
        user.save().then((response) => {

          console.log('Updated user', response);
        }).catch((error) => {

          console.error('Error while updating user', error);
        });
      });
      this.setState({ cart });
    }

  }
  render() {

    const { activeUser, allUsers, isLoading, allMessages } = this.state;
    if (isLoading) return false;
    console.log("finishloading");
    console.log(allMessages);
    return (


      <Switch>
        <Route exact path="/" ><Home allMessages={allMessages} activeUser={activeUser} handleLogout={this.handleLogout}></Home></Route>
        <Route exact path="/home" ><Home allMessages={allMessages} activeUser={activeUser} handleLogout={this.handleLogout}></Home></Route>
        <Route exact path="/messages" ><Messages allMessages={allMessages} allUsers={allUsers} activeUser={activeUser} handleLogout={this.handleLogout}></Messages></Route>
        <Route exact path="/messages/:id" ><UserMessages markDeleted={this.markDeleted} deleteMessage={this.deleteMessage} messageRead={this.messageRead} addMessage={this.addMessage} allMessages={allMessages} allUsers={allUsers} activeUser={activeUser} handleLogout={this.handleLogout}></UserMessages></Route>
        <Route exact path="/search"><Search addToCart={this.addToCart} addMessage={this.addMessage} allMessages={allMessages} ownerName={this.ownerName} activeUser={activeUser} handleLogout={this.handleLogout}></Search></Route>
        <Route exact path="/login"> <LoginPage allMessages={allMessages} handleLogout={this.handleLogout} activeUser={activeUser} users={allUsers} handleLogin={this.handleLogin}></LoginPage></Route>
        <Route exact path="/signup"> <SignupPage allMessages={allMessages} handleLogout={this.handleLogout} activeUser={activeUser} users={allUsers} handleLogin={this.handleLogin}></SignupPage></Route>
      </Switch>

      // </div>
    );
  }
}

export default App;
