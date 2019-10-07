import React from 'react';
import { Container } from 'react-bootstrap'
import AddDiamond from '../components/AddNewDiamond'
import DiamondList from '../components/DiamondsList'
import MyNavbar from '../components/MyNavbar'
import MyModal from '../components/MyModal'
import { user, listPrice } from '../App'
import { Diamond1 } from '../Classes/Diamond'
import DiamondNavbar from '../components/DiamondNavbar';
import diamondPic from '../data/l8cb11pkn10.jpg' 
import Parse from 'parse';
// import diamList  from '../data/diamonds-list.json';
import priceList  from '../data/prices.json';
const axios = require('axios').default


export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diamondArr: [],
      prices: [],
      isLoading: true,
      filter: {
        shape: [],
        colorMin: "",
        colorMax: "",
        clarityMin: "",
        clarityMax: "",
        weightMin: 0,
        weightMax: 0

      },
      edit: -1
    }
  }
  componentWillMount() {
    // let {diamondArr,isLoading,prices}=this.state;
    let isLoading = true;
    let diamondArr = [];
    let prices = priceList;
    var newDiamond;
    const Diamond = Parse.Object.extend('Diamond');
    const query = new Parse.Query(Diamond);
    query.find().then((diamondsParse) => {
      // You can use the "get" method to get the value of an attribute
      // Ex: response.get("<ATTRIBUTE_NAME>")
      diamondsParse.forEach((diamond) => {
        newDiamond = new Diamond1(diamond);
        console.log(newDiamond);
        diamondArr.push(newDiamond);
      })
      isLoading = false;
      this.setState({diamondArr, isLoading, prices})
    }, (error) => {

      console.error('Error while fetching Diamond', error);
    });
  }

  saveDiamond = (diamond, atEdit) => {
    let { edit, diamondArr } = this.state;
    if (atEdit === -1) {
      diamondArr.concat(new Diamond1(diamond))
    }
    else {
      diamondArr.splice(atEdit, 1, new Diamond1(diamond));
    }
    edit = -1;
    this.setState({ edit, diamondArr });
  }

  deleteDiamond = (index) => {
    let { diamondArr } = this.state;
    var newArr = diamondArr.splice(index, 1);
    this.setState(newArr);
  }

  editDiamond = (index) => {
    let newState = {
      edit: index

    }
    this.setState(newState)
  }
  cancelEdit = () => {
    let newState = {
      edit: -1
    }
    this.setState(newState)
  }
  render() {
    const { activeUser, handleLogout } = this.props;
    if (this.state.isLoading) return false;
    console.log("diamondArr:" + this.state.diamondArr)
    return (

      <Container >
        {/* <MyNavbar user={this.state.user}/> */}
        <DiamondNavbar activeUser={activeUser} handleLogout={handleLogout} />
        <AddDiamond user={this.state.user} activeUser={activeUser} saveDiamond={this.saveDiamond} cancelEdit={this.cancelEdit} addEdit={this.addEdit} prices={this.state.prices} edit={this.state.edit} filter={this.state.filter} diamonds={this.state.diamondArr} />
        {/* <MyModal  user={this.state.user}  activeUser={activeUser} /> */}
        <DiamondList ownerName={this.props.ownerName} activeUser={activeUser} deleteDiamond={this.deleteDiamond} editDiamond={this.editDiamond} list={this.state.diamondArr} />
      </Container>
    );
  }
}

export default Search;