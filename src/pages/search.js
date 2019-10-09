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
import priceList from '../data/prices.json';
const axios = require('axios').default


export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diamondArr: [],
      prices: [],
      isLoading: true,
      filter: {
        shape: ["BR"],
        colorMin: "D",
        colorMax: "D",
        clarityMin: "FL",
        clarityMax: "IF",
        weightMin: 1.05,
        weightMax: 10000,
        owner:false

      },
      edit: -1
    }
  }
  componentDidMount() {
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
        console.log(newDiamond.pic1);
        diamondArr.push(newDiamond);
        console.log(diamondArr[0].pic1);
      })
      isLoading = false;
      this.setState({ diamondArr, isLoading, prices })
    }, (error) => {

      console.error('Error while fetching Diamond', error);
    });
  }

  saveDiamond = (diamond, atEdit) => {
    let { edit, diamondArr } = this.state;
    console.log("atedit:" + atEdit)
    if (atEdit === -1) {

      const Diamond = Parse.Object.extend('Diamond');
      const myNewObject = new Diamond();

      myNewObject.set('lotID', diamond.lotID);
      myNewObject.set('shape', diamond.shape);
      myNewObject.set('weight', Number(diamond.weight));
      myNewObject.set('color', diamond.color);
      myNewObject.set('clarity', diamond.clarity);
      myNewObject.set('cut', diamond.cut);
      myNewObject.set('polish', diamond.polish);
      myNewObject.set('symmetry', diamond.symmetry);
      myNewObject.set('fluorescence', diamond.fluorescence);
      myNewObject.set('fluorescenceColor', diamond.fluorescenceColor);
      myNewObject.set('lab', diamond.lab);
      myNewObject.set('certificateNumber', diamond.certificateNumber);
      myNewObject.set('depth', Number(diamond.depth));
      myNewObject.set('table', Number(diamond.table));
      myNewObject.set('crownAngle', Number(diamond.crownAngle));
      myNewObject.set('crownHeight', Number(diamond.crownHeight));
      myNewObject.set('pavillionAngle', Number(diamond.pavillionAngle));
      myNewObject.set('pavillionDepth', Number(diamond.pavillionDepth));
      myNewObject.set('starLength', Number(diamond.starLength));
      myNewObject.set('lowerHalf', Number(diamond.lowerHalf));
      myNewObject.set('girdle', diamond.girdle);
      myNewObject.set('culet', diamond.culet);
      myNewObject.set('list', Number(diamond.list));
      myNewObject.set('discount', Number(diamond.discount));
      myNewObject.set('pricePerCarat', Number(diamond.pricePerCarat));
      myNewObject.set('links', diamond.links);
      // myNewObject.set('inclusions',diamond.inclusions);
      myNewObject.set('keepDiscount', diamond.keepDiscount);
      myNewObject.set('diamMin', Number(diamond.diamMin));
      myNewObject.set('diamMax', Number(diamond.diamMax));
      myNewObject.set('deptAvg', Number(diamond.deptAvg));
      myNewObject.set('owner', Parse.User.current());
      // myNewObject.set('pic1', new Parse.File("resume.txt", { base64: btoa("My file content") }));
      // myNewObject.set('pic2', new Parse.File("resume.txt", { base64: btoa("My file content") }));
      // if (!diamond.pic1.file) myNewObject.set('pic1', new Parse.File(diamond.pic1.name, diamond.pic1.file));
      // if (!diamond.pic2.file) myNewObject.set('pic2', new Parse.File(diamond.pic2.name, diamond.pic2.file));
console.log(myNewObject)
      myNewObject.save().then(
        (result) => {
          console.log('Diamond created', result);
          diamondArr.push(new Diamond1(result));
          edit = -1;
          this.setState({ edit, diamondArr });
        },
        (error) => {
          console.error('Error while creating Diamond: ', error);
        }
      );
    }
    else {
      const Diamond = Parse.Object.extend('Diamond');
      const query = new Parse.Query(Diamond);
      // here you put the objectId that you want to update
      query.get(diamond.id).then((object) => {
        object.set('lotID', diamond.lotID);
        object.set('shape', diamond.shape);
        object.set('weight', Number(diamond.weight));
        object.set('color', diamond.color);
        object.set('clarity', diamond.clarity);
        object.set('cut', diamond.cut);
        object.set('polish', diamond.polish);
        object.set('symmetry', diamond.symmetry);
        object.set('fluorescence', diamond.fluorescence);
        object.set('fluorescenceColor', diamond.fluorescenceColor);
        object.set('lab', diamond.lab);
        object.set('certificateNumber', diamond.certificateNumber);
        object.set('depth', Number(diamond.depth));
        object.set('table', Number(diamond.table));
        object.set('crownAngle', Number(diamond.crownAngle));
        object.set('crownHeight', Number(diamond.crownHeight));
        object.set('pavillionAngle', Number(diamond.pavillionAngle));
        object.set('pavillionDepth', Number(diamond.pavillionDepth));
        object.set('starLength', Number(diamond.starLength));
        object.set('lowerHalf', Number(diamond.lowerHalf));
        object.set('girdle', diamond.girdle);
        object.set('culet', diamond.culet);
        object.set('list', Number(diamond.list));
        object.set('discount', Number(diamond.discount));
        object.set('pricePerCarat', Number(diamond.pricePerCarat));
        object.set('links', diamond.links);
        // object.set('inclusions',diamond.inclusions);
        object.set('keepDiscount', diamond.keepDiscount);
        object.set('diamMin', Number(diamond.diamMin));
        object.set('diamMax', Number(diamond.diamMax));
        object.set('deptAvg', Number(diamond.deptAvg));
        object.set('owner', Parse.User.current());
        // if (diamond.pic1!=={}) object.set('pic1', new Parse.File(diamond.pic1.name, diamond.pic1.file));
        // if (diamond.pic2!=={}) object.set('pic2', new Parse.File(diamond.pic2.name, diamond.pic2.file));
        object.save().then((response) => {
          // You can use the "get" method to get the value of an attribute
          // Ex: response.get("<ATTRIBUTE_NAME>")

          console.log('Updated Diamond', response);
          diamondArr = diamondArr.splice(atEdit, 1, new Diamond1(response));
          edit = -1;
          this.setState({ edit, diamondArr });
        }, (error) => {

          console.error('Error while updating Diamond', error);
        });
      });

    }

  }

  deleteDiamond = (index) => {
    let { diamondArr } = this.state;
    let id = diamondArr[index].id;
    const Diamond = Parse.Object.extend('Diamond');
    const query = new Parse.Query(Diamond);
    // here you put the objectId that you want to delete
    query.get(id).then((object) => {
      object.destroy().then((response) => {

        var newArr = diamondArr.splice(index, 1);
        this.setState(newArr);
        console.log('Deleted Diamond', response);
      }, (error) => {

        console.error('Error while deleting Diamond', error);
      });
    });


  }
setFilter = (filter)=>{
this.setState({filter})
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
    console.log(this.state.diamondArr[0].pic1)
    return (

      <Container >
        {/* <MyNavbar user={this.state.user}/> */}
        <DiamondNavbar activeUser={activeUser} handleLogout={handleLogout} />
        <AddDiamond  filter={this.state.filter} setFilter={this.setFilter}  activeUser={activeUser} saveDiamond={this.saveDiamond} cancelEdit={this.cancelEdit} addEdit={this.addEdit} prices={this.state.prices} edit={this.state.edit} diamonds={this.state.diamondArr} />
        {/* <MyModal  user={this.state.user}  activeUser={activeUser} /> */}
        <DiamondList filter={this.state.filter} setFilter={this.setFilter} ownerName={this.props.ownerName} activeUser={activeUser} deleteDiamond={this.deleteDiamond} editDiamond={this.editDiamond} list={this.state.diamondArr} />
      </Container>
    );
  }
}

export default Search;