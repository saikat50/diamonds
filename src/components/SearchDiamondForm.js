import React from 'react'
import VerticalSlider from './Slider'



//IN BUILT
export default class SearchDiamondForm extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
  
      var width60 = { width: "60px" };
      return (
  
        <div className="diamondRow bgPink baseSlider">
       
          <div className="row" >
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="row">
                <div className="col-4">
                  <div className="content diamondContent">
                    <h5 className="noMarginBottom">SHAPE:</h5>
                    <select id="shape">
                      <option value="BR">BR</option>
                      <option value="OV">OV</option>
                      <option value="PS">PS</option>
                      <option value="MQ">MQ</option>
                      <option value="PRI">PRI</option>
                      <option value="RAD">RAD</option>
                      <option value="CB">CB</option>
                      <option value="CMB">CMB</option>
                      <option value="BG">BG</option>
                      <option value="TP">TP</option>
                      <option value="HM">HM</option>
                    </select>
                  </div>
                </div>
                <div className="col-4">
                  <div className="content diamondContent">
                    <h5 className="noMarginBottom">WEIGHT:</h5>
                    <p>From:</p>
                    <input id="weight1" type="number" style={width60} />
                    <p>To:</p>
                    <input id="weight1" type="number" style={width60} />
                  </div>
                </div>
                <div className="col-4">
                  <div className="content diamondContent">
                  <VerticalSlider type="Color"/>
                    {/* <h5 className="noMarginBottom">COLOR:</h5>
                    <p>From:</p>
                    <select id="colorFrom">
                      <option value=""></option>
                      <option value="0">D</option>
                      <option value="1">E</option>
                      <option value="2">F</option>
                      <option value="3">G</option>
                      <option value="4">H</option>
                      <option value="5">I</option>
                      <option value="6">J</option>
                      <option value="7">K</option>
                      <option value="8">L</option>
                      <option value="9">M</option>
                      <option value="10">N</option>
                      <option value="11">OP</option>
                      <option value="12">QR</option>
                      <option value="13">ST</option>
                      <option value="14">UV</option>
                      <option value="15">WX</option>
                      <option value="16">YZ</option>
                      <option value="17">F0-LIGHT FANCY</option>
                      <option value="18">F1-FANCY</option>
                      <option value="19">F2-FANCY VIVID</option>
                      <option value="20">F3-FANCY INTENCE</option>
  
                    </select>
                    <p>To:</p>
                    <select id="colorTo">
                      <option value=""></option>
                      <option value="0">D</option>
                      <option value="1">E</option>
                      <option value="2">F</option>
                      <option value="3">G</option>
                      <option value="4">H</option>
                      <option value="5">I</option>
                      <option value="6">J</option>
                      <option value="7">K</option>
                      <option value="8">L</option>
                      <option value="9">M</option>
                      <option value="10">N</option>
                      <option value="11">OP</option>
                      <option value="12">QR</option>
                      <option value="13">ST</option>
                      <option value="14">UV</option>
                      <option value="15">WX</option>
                      <option value="16">YZ</option>
                      <option value="17">F0-LIGHT FANCY</option>
                      <option value="18">F1-FANCY</option>
                      <option value="19">F2-FANCY VIVID</option>
                      <option value="20">F3-FANCY INTENCE</option>
                    </select> */}
                  </div>
                </div>
              </div>
            </div >
          </div >
        </div >
      );
    }
  }
  