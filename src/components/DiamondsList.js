import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import ShowDiamond from '../components/ShowDiamond'
import SearchDiamondForm from '../components/SearchDiamondForm'
// import {user,listPrice} from '../App'

//RECIVES 3 PROPS 
//deleteDiamond=FUNCTION TO DELETE A DIAMOND(INDEX OF THE DELETED DIAMOND) 
//editDiamond=FUNCTION THAT CHANGES THE STATE OF THE FATHER COMPONENT SO
//                          THE ADDDIAMOND MODAL CHANGES TO EDIT MODAL(INDEX OF THE DIAMOND TO BE EDITED) 
//list=ARRAY OF DIAMONDS
export default class DiamondList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    }
  }
  // CALLS THE FATHER COMPONENT'S FUNCTION DELETEDIAMOND WITH THE INDEX OF THE DIAMOND
  deleteDiamond = (element) => {
    this.props.deleteDiamond(element.target.value)
  }
  // CALLS THE FATHER COMPONENT'S FUNCTION EDITDIAMOND WITH THE INDEX OF THE DIAMOND
  editDiamond = (element) => {
    this.props.editDiamond(element.target.value)
  }
  render() {
    var result = [];
    for (var i = 0; i < this.state.list.length; i++) {
      if (this.state.list[i].inFilter(this.props.filter)
        && (!this.props.filter.owner
          || this.state.list[i].owner.id === this.props.activeUser.id)) {
        if (!this.props.activeUser) {
          //IF anonimus 
          //DISPLAY SINGLE DIAMOND

          result.push(<ShowDiamond ownerName={this.props.ownerName} edit={i} description={this.state.list[i]}>
            <ButtonToolbar>
              {/* DISPLAY THE USER'S ACTION BUTTONS */}
              <Button value={i} style={{ width: "100px", height: "60px", marginLeft: "15px", marginTop: "10px" }} variant="success">Purchase</Button>
            </ButtonToolbar>
          </ShowDiamond>);
        }

        else
          if (this.state.list[i].owner.id == this.props.activeUser.id) {
            //IF THE USER IS THE OWNER OF THE DIAMOND
            //DISPLAY SINGLE DIAMOND
            result.push(<ShowDiamond ownerName={this.props.ownerName} edit={i} description={this.state.list[i]}>
              <ButtonToolbar>
                {/* DISPLAY THE OWNER'S ACTION BUTTONS */}
                <Button onClick={this.editDiamond} value={i} style={{ width: "100px", height: "60px", marginLeft: "15px", marginTop: "10px" }} variant="warning">Edit</Button>
                <Button onClick={this.deleteDiamond} value={i} style={{ width: "100px", height: "60px", marginLeft: "15px", marginTop: "10px" }} variant="danger">Delete</Button>
                <Button value={i} style={{ width: "100px", height: "60px", marginLeft: "15px", marginTop: "10px" }} variant="dark" >Add to Auction</Button>
              </ButtonToolbar>
            </ShowDiamond>);
          }
          else {
            //IF THE USER IS NOT THE OWNER OF THE DIAMOND
            //DISPLAY SINGLE DIAMOND
            result.push(<ShowDiamond ownerName={this.props.ownerName} edit={i} description={this.state.list[i]}>
              <ButtonToolbar>
                {/* DISPLAY THE USER'S ACTION BUTTONS */}
                <Button value={i} style={{ width: "100px", height: "60px", marginLeft: "15px", marginTop: "10px" }} variant="primary">Offer</Button>
                <Button value={i} style={{ width: "100px", height: "60px", marginLeft: "15px", marginTop: "10px" }} variant="success">Purchase</Button>
                <Button value={i} style={{ width: "100px", height: "60px", marginLeft: "15px", marginTop: "10px" }} variant="secondary" >Contact seller</Button>
                <Button value={i} style={{ width: "100px", height: "60px", marginLeft: "15px", marginTop: "10px" }} variant="info" >Bid</Button>
              </ButtonToolbar>
            </ShowDiamond>);
          }
      }
    }

    return (
      <div>
        <SearchDiamondForm filter={this.props.filter} setFilter={this.props.setFilter}/>
        {result}
      </div>
    );
  }
}
