
import React, { Component } from 'react'
import * as cartActions from "../../redux/actions/cartActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table,Button } from 'reactstrap';

class CartDetail extends Component {

    removeItemFromCart(cartItem){
        this.props.removeFromCart(cartItem.product)
    }
  
    render() {
   
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.cart.map((cartItem,index )=> (

                                <tr key={cartItem.id}>
                                    <td>{index+1}</td>
                                    <td>{cartItem.product.productName}</td>
                                    <td>{cartItem.product.unitPrice}</td>
                                    <td>{cartItem.quantity}</td>
                                
                                    <td> <Button color="danger" onClick={()=>this.removeItemFromCart(cartItem)} >Del</Button> </td>
                                   
                                </tr>

                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
        
    }
}

function mapDispatchToProps(dispatch){
    return{
        removeFromCart:bindActionCreators(cartActions.removeFromCart,dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CartDetail)
