import React from 'react';
import {Button,Image} from 'react-bootstrap';


class ListOfLinks extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        let parse=[];
        for (var i=0;i<this.props.links.length;i++)
        {
            parse.push(
                            <p>
                            {this.props.links[i].substring(0, 10)}
                            <Image src={this.props.links[i]} style={{width:"50px"}}/>
                                <Button onClick={()=>{this.props.deleteLink(i)}}>
                                    Delete Me
                                </Button>
                            </p>);
                      
          
        
            }
        
        return (
            <div>
                 {parse}
            </div> 
        )
    }
}
 
 
export default ListOfLinks;