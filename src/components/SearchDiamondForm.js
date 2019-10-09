import React from 'react'
import HorizontalColorSlider from './Slider'
import {Form, Row, Col, FormControl } from 'react-bootstrap'
import { Button } from '@material-ui/core';
// import Multiselect from 'react-bootstrap-multiselect'
// import '../multiselect.css'


const data = [ { value:'BR' ,selected:true}, { value: 'OV',selected:true }, { value:'PS' }, { value:'MQ' }, { value:'HS' }, { value:'PRI' }, { value:'RAD' }, { value:'CU' }, { value:'EM' }, { value:'BG' }, { value:'TRI' }]
//IN BUILT
export default class SearchDiamondForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      tglAll:"Select"
    }
  }
  handleChange=()=>{
    
  }
  toggleChoice=(e)=>{
    let {filter,setFilter}=this.props;
    console.log("togglechoice");
    console.log(filter);
    console.log(e.target.innerHTML);
    console.log(filter.shape.includes(e.target.innerHTML));
    if (!filter.shape.includes(e.target.innerHTML)) {filter.shape.push(e.target.innerHTML)}
    else {
      for( var i = 0; i < filter.shape.length; i++){ 
        if ( filter.shape[i] ===e.target.innerHTML ) {
          filter.shape.splice(i, 1); 
        }
     }
    }
    setFilter(filter);
  }
  toggleAll=(e)=>{
    let allShapes=["BR","OV","PS","MQ","HS","PRI","RAD","EM","CU","BG","TRI"]
    let {filter,setFilter}=this.props;
    let {tglAll}=this.state;
    if (tglAll==="Select") {filter.shape=allShapes; tglAll="Clear"}
    else {
      filter.shape=[]; tglAll="Select"
    }
    this.setState({tglAll});
    setFilter(filter);
  }
  render() {
    console.log("filter");
    console.log(this.props.filter);
    console.log((this.props.filter.shape.includes("OV")));
    let br,ov,ps,mq,hs,pri,rad,em,cu,bg,tri;
    if (this.props.filter.shape.includes("BR")) {br="success"} else {br="light"};
    if (this.props.filter.shape.includes("OV")) {ov="success"} else {ov="light"};
    if (this.props.filter.shape.includes("MQ")) {mq="success"} else {mq="light"};
    if (this.props.filter.shape.includes("HS")) {hs="success"} else {hs="light"};
    if (this.props.filter.shape.includes("PS")) {ps="success"} else {ps="light"};
    if (this.props.filter.shape.includes("PRI")) {pri="success"} else {pri="light"};
    if (this.props.filter.shape.includes("RAD")) {rad="success"} else {rad="light"};
    if (this.props.filter.shape.includes("EM")) {em="success"} else {em="light"};
    if (this.props.filter.shape.includes("CU")) {cu="success"} else {cu="light"};
    if (this.props.filter.shape.includes("TRI")) {tri="success"} else {tri="light"};
    if (this.props.filter.shape.includes("BG")) {bg="success"} else {bg="light"};
    console.log(br);
    var width60 = { width: "60px" };
    return (
      <Form>
          <h3>Filter</h3>
        <Row>
             <Col lg="1" md="2" sm="3" xs="4">
              <button onClick={this.toggleAll}  type="button" className={`btn btn-primary`}>{this.state.tglAll}</button>
            </Col>
            <Col lg="1" md="2" sm="3" xs="4">
              <button onClick={this.toggleChoice}  type="button" className={`btn btn-${br}`}>BR</button>
            </Col>
            <Col lg="1" md="2" sm="3" xs="4">
            <button onClick={this.toggleChoice}   type="button" className={`btn btn-${ov}`}>OV</button>
            </Col>
            <Col lg="1" md="2" sm="3" xs="4">
            <button onClick={this.toggleChoice}   type="button" className={`btn btn-${ps}`}>PS</button>
            </Col>
            <Col lg="1" md="2" sm="3" xs="4">
            <button onClick={this.toggleChoice}   type="button" className={`btn btn-${mq}`}>MQ</button>
            </Col>
            <Col lg="1" md="2" sm="3" xs="4">
            <button onClick={this.toggleChoice}   type="button" className={`btn btn-${hs}`}>HS</button>
            </Col>
            <Col lg="1" md="2" sm="3" xs="4">
            <button onClick={this.toggleChoice}   type="button" className={`btn btn-${pri}`}>PRI</button>
            </Col>
            <Col lg="1" md="2" sm="3" xs="4">
            <button onClick={this.toggleChoice}   type="button" className={`btn btn-${em}`}>EM</button>
            </Col>
            <Col lg="1" md="2" sm="3" xs="4">
            <button onClick={this.toggleChoice}   type="button" className={`btn btn-${rad}`}>RAD</button>
            </Col>
            <Col lg="1" md="2" sm="3" xs="4">
            <button onClick={this.toggleChoice}   type="button" className={`btn btn-${cu}`}>CU</button>
            </Col>
            <Col lg="1" md="2" sm="3" xs="4">
            <button onClick={this.toggleChoice}   type="button" className={`btn btn-${bg}`}>BG</button>
            </Col>
            <Col lg="1" md="2" sm="3" xs="4">
            <button onClick={this.toggleChoice}   type="button" className={`btn btn-${tri}`}>TRI</button>
            </Col>
        </Row>
        <Row>
        
          {/* <Form.Group as={Col} xl="2" lg="12" sm="12" controlId="exampleForm.ControlSelect1">
            <Form.Label>Shape</Form.Label>
            <Form.Control value={this.props.filter.shape} as="select" >
              <option value=""></option>
              <option value="BR">BR</option>
              <option value="OV">OV</option>
              <option value="PS">PS</option>
              <option value="MQ">MQ</option>
              <option value="PRI">PRI</option>
              <option value="RAD">RAD</option>
              <option value="CB">CU</option>
              <option value="CMB">TR</option>
              <option value="BG">BG</option>
              <option value="TP">EM</option>
              <option value="HM">HS</option>
            </Form.Control>
          </Form.Group> */}

          <Form.Group as={Col}  xl="3" lg="3" sm="12" controlId="validationCustom05">
            <Form.Label>Weight From</Form.Label>
            <Form.Control type="number" placeholder="From" />
            <Form.Control.Feedback type="invalid">
            </Form.Control.Feedback>
            <Form.Label>Weight To</Form.Label>
            <Form.Control type="number" placeholder="To" />
            <Form.Control.Feedback type="invalid">
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col}  xl="9" lg="9" sm="12" controlId="validationCustom05">
            <HorizontalColorSlider name="Color" change={(value) => { alert(value[0]) }} />
            <HorizontalColorSlider name="Clarity" change={(value) => { alert(value[0]) }} />
          </Form.Group>
        </Row>
      </Form>
    );
  }
}
