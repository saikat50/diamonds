import React from 'react'
import {Row,Col,Accordion,Card} from 'react-bootstrap'



//This Stupid component receives two props : edit & description. edit is the index of the diamond and description is all the data of the diamond
//it uses acordeon to show the details of single diamond
export default class ShowDiamond extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
  
      var bgColorClass = "";
      if (this.props.edit % 2 === 0) { bgColorClass = "light-blue" };
      var pics = [];
      for (var i = 0; i < this.props.description.links.length; i++) {
        pics.push(<div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="content diamondContent">
            <a href="#"><img className="smallPic" src={this.props.description.links[i]} /></a>
          </div>
        </div>);
      }
      return (
        <div>
          {/* below are the details visible in accordeon */}
          <Accordion defaultActiveKey="0" >
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={this.props.edit}>
                <Row>
                  <Col lg="2" md="6" sm="12">
                    <Row>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">LOT</h5>
                          <p>{this.props.description.lotID}</p>
                        </div>
                      </Col>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">SHAPE</h5>
                          <p>{this.props.description.shape}</p>
                        </div>
                      </Col>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">CARAT</h5>
                          <p>{this.props.description.weight}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="2" md="6" sm="12">
                    <Row>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">COL</h5>
                          <p>{this.props.description.color}</p>
                        </div>
                      </Col>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">CLAR</h5>
                          <p>{this.props.description.clarity}</p>
                        </div>
                      </Col>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">CUT</h5>
                          <p>{this.props.description.cut}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="2" md="6" sm="12">
                    <Row>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">POL</h5>
                          <p>{this.props.description.polish}</p>
                        </div>
                      </Col>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">SYM</h5>
                          <p>{this.props.description.symmetry}</p>
                        </div>
                      </Col>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">FL</h5>
                          <p>{this.props.description.fluorescence + " " + this.props.description.fluorescenceColor}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="2" md="6" sm="12">
                    <Row>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">DEPT</h5>
                          <p>{this.props.description.depth}</p>
                        </div>
                      </Col>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">TABL</h5>
                          <p>{this.props.description.table}</p>
                        </div>
                      </Col>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">LAB</h5>
                          <p>{this.props.description.lab}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="2" md="6" sm="12">
                    <Row>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">GIRD</h5>
                          <p>{this.props.description.girdle}</p>
                        </div>
                      </Col>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">CULET</h5>
                          <p>{this.props.description.culet}</p>
                        </div>
                      </Col>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">CERT</h5>
                          <a target="_blank" href={"http://www.gia.edu/report-check?reportno=" + this.props.description.certificateNumber}><p>{this.props.description.certificateNumber}</p></a>
  
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg="2" md="6" sm="12">
                    <Row>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">LIST</h5>
                          <p>{this.props.description.list}</p>
                        </div>
                      </Col>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">DISC</h5>
                          <p>{Math.floor(this.props.description.discount * 10) / 10 + "%"}</p>
                        </div>
                      </Col>
                      <Col className="innerCol" xl="4">
                        <div className="content diamondContent">
                          <h5 className="noMarginBottom">PRICE</h5>
                          <p>{this.props.description.pricePerCarat}</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
  
                </Row>
                {/* below are the details hiden in Accordion */}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={this.props.edit}>
                <Card.Body>
                  <Row>
  
                    <Col xl="1" lg="2" md="3" sm="4" xs="6">
                      <div className="content diamondContent">
                        <h5 className="noMarginBottom">OWNER</h5>
                        <p>{this.props.description.owner}</p>
                      </div>
                    </Col>
                    <Col xl="1" lg="2" md="3" sm="4" xs="6">
                      <div className="content diamondContent">
                        <h5 className="noMarginBottom">CROWN ANGLE</h5>
                        <p>{this.props.description.crownAngle}</p>
                      </div>
                    </Col>
                    <Col xl="1" lg="2" md="3" sm="4" xs="6">
                      <div className="content diamondContent">
                        <h5 className="noMarginBottom">CRN HEIGHT</h5>
                        <p>{this.props.description.crownHeight}</p>
                      </div>
                    </Col>
                    <Col xl="1" lg="2" md="3" sm="4" xs="6">
                      <div className="content diamondContent">
                        <h5 className="noMarginBottom">PAV ANGLE</h5>
                        <p>{this.props.description.pavillionAngle}</p>
                      </div>
                    </Col>
                    <Col xl="1" lg="2" md="3" sm="4" xs="6">
                      <div className="content diamondContent">
                        <h5 className="noMarginBottom">PAV DEPT</h5>
                        <p>{this.props.description.pavillionDepth}</p>
                      </div>
                    </Col>
                    <Col xl="1" lg="2" md="3" sm="4" xs="6">
                      <div className="content diamondContent">
                        <h5 className="noMarginBottom">STAR LENG</h5>
                        <p>{this.props.description.starLength}</p>
                      </div>
                    </Col>
                    <Col xl="1" lg="2" md="3" sm="4" xs="6">
                      <div className="content diamondContent">
                        <h5 className="noMarginBottom">LOWER HALF</h5>
                        <p>{this.props.description.lowerHalf}</p>
                      </div>
                    </Col>
                    <Col xl="1" lg="2" md="3" sm="4" xs="6">
                      <div className="content diamondContent">
                        <h5 className="noMarginBottom">Measurements</h5>
                        <p>{this.props.description.measurements()}</p>
                      </div>
                    </Col>
                    <Col xl="1" lg="2" md="3" sm="4" xs="6">
                      <div className="content diamondContent">
                        <h5 className="noMarginBottom">INCLUSION DESCRIPTION</h5>
                        <p>{this.props.description.inclusions}</p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    {pics}
                  </Row>
                  <Row>
                    {/* these childres are the action buttons and are declared in the father componenet DiamondList */}
                    {this.props.children}
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      );
    }
  }
  