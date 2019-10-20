import React from 'react'
import { Container,Table } from 'react-bootstrap'
// import { Redirect } from 'react-router-dom';
import DiamondNavbar from '../components/DiamondNavbar';
import { Diamond1 } from '../Classes/Diamond';
import Parse from 'parse';
// import User from '../Classes/User'
// import Parse from 'parse';

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            diamondsInCart: []
        }
    }
    componentDidMount(){
            let diamondsInCart=[];
            const {cart}=this.props;
            const Diamond = Parse.Object.extend('Diamond');
            const query = new Parse.Query(Diamond);

            query.find().then((results) => {
                // You can use the "get" method to get the value of an attribute
                // Ex: response.get("<ATTRIBUTE_NAME>")
                results.forEach(diamond=>{
                    if (cart.includes(diamond.id)) {diamondsInCart.push(new Diamond1(diamond))};
                })
                console.log('Diamond found', results);
                this.setState({diamondsInCart});
            }, (error) => {
                
                console.error('Error while fetching Diamond', error);
            });
        }
        render() {
            const { activeUser, handleLogout, allMessages, cart } = this.props;
            const { diamondsInCart } = this.state;
            let index=-1;
            let tableLines=[];
            let weight,price,lineTotal,total;
            total=0;
            diamondsInCart.forEach(diamond=>{
                index++;
                weight=diamond.weight;
                price=diamond.pricePerCarat;
                lineTotal=weight*price;
                total+=lineTotal;
                tableLines.push(           
                 <tr>
                    <td>{index}</td>
                    <td>{diamond.owner.id}</td>
                    <td>{`${diamond.lotID} ${diamond.shape} ${diamond.color} ${diamond.clarity}`}</td>
                    <td>{weight}</td>
                    <td>{price}</td>
                    <td>{lineTotal}</td>
                    <td>@mdo</td>
                </tr>)
            })

            return (
                <Container>
                    <DiamondNavbar cart={cart} allMessages={allMessages} activeUser={activeUser} handleLogout={handleLogout} />
                    Shopping Cart
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Owner</th>
                                <th>Description</th>
                                <th>Weight</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableLines}
                        </tbody>
                    </Table>
                </Container>
            );
        }
    }
    export default ShoppingCart;