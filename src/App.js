import React from 'react';
import './App.css';
import './multiselect.css'
import { Switch, Route} from 'react-router-dom'
import {Home} from './pages/home'
import {Search} from './pages/search.js'
import jsonUsers from './data/users'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/Signup'

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
      // activeUser: 
      // null,
      activeUser:  {
        "id": "duXjSsEtGt",
        "fname": "Boaz",
        "lname": "Pinto",
        "email": "pintob@gmail.com",
        "pwd": "123"
    },
      allUsers: jsonUsers,

    }

    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);


    console.log(this.state.allRecipes);
  }

  handleLogout() {
    this.setState({activeUser: null});
  }

  handleLogin(activeUser) {

    this.setState({activeUser});
  }
  ownerName=(userId)=>{
    for (var i=0;i<this.state.allUsers.length;i++){
      if (this.state.allUsers[i].id==userId) return this.state.allUsers[i].fname+" "+this.state.allUsers[i].lname
    }

  }
  render() {
    const { activeUser, allUsers } = this.state;
    return (
     

        <Switch>
          <Route  exact path="/" ><Home  activeUser={activeUser} handleLogout={this.handleLogout}></Home></Route>
          <Route  exact path="/home" ><Home  activeUser={activeUser} handleLogout={this.handleLogout}></Home></Route>
          <Route  exact path="/search"><Search ownerName={this.ownerName} activeUser={activeUser} handleLogout={this.handleLogout}></Search></Route>
          <Route  exact path="/login"> <LoginPage  handleLogout={this.handleLogout} activeUser={activeUser} users={allUsers} handleLogin={this.handleLogin}></LoginPage></Route>
          <Route  exact path="/signup"> <SignupPage  handleLogout={this.handleLogout} activeUser={activeUser} users={allUsers} handleLogin={this.handleLogin}></SignupPage></Route>
        </Switch>
      
      // </div>
    );
  }
}

export default App;
