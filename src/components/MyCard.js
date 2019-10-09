import React from 'react'
import Dots from './Dots'



//display a single card of home page

export class MyCard extends React.Component {

    
    render() {
      var objStyle = {
        width: "100%",
        height: "200px",
        margine: "20px"
      }
      return (
        <div className="white-background">
          {/* image */}
          <img alt="" src={this.props.img} style={objStyle} />
          {/* h5 */}
          <h5>{this.props.label}</h5>
          {/* p */}
          <p className="margBottom30">{this.props.text}</p>
          {/* Dots */}
          {/* <Dots num={this.props.num} total={this.props.total} /> */}
        </div>
      );
    }
  }