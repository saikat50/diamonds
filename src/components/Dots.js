import React from 'react'


// display small round dots
export class Dots extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      var arr = [];
      for (var i = 0; i < this.props.total; i++) {
        if (i + 1 === this.props.num) {
          arr.push(<div className="smallRoundBlue"></div>)
        } else {
          arr.push(<div className="smallRoundLightBlue"></div>)
        }
      }
      return (
        <div className="inline">
          {arr}
        </div>
      );
    }
  }

  export default Dots;