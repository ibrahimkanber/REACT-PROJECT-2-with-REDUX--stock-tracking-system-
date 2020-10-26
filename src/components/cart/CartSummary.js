import React, { Component } from 'react';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge

} from 'reactstrap';

import * as cartActions from "../../redux/actions/cartActions";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {Link} from "react-router-dom";



class CartSummary extends Component {
    renderEmpyt() {
        return (
            <NavItem>
                <NavLink>Empty Cart</NavLink>
            </NavItem>
        )
    }

    // removeItemFromCart(cartItem){
    //     this.props.removeFromCart(cartItem.product)
    // }
  

    renderSummary() {
        return (

            <UncontrolledDropdown UncontrolledDropdown nav inNavbar >


                <DropdownToggle nav caret>
                    Selected Products
  </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(item => (
                            <DropdownItem>
                                 <Badge color="danger" onClick={()=>this.props.removeFromCart(item.product)} >X</Badge>
                                {item.product.productName}
                                <Badge color="success">{item.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider/>
                    <DropdownItem> <Link to="/cart">Go to Cart</Link>  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown >



        )
    }



    render() {
        return (
            <div>
                {

                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpyt()
                }

                {/* {console.log(this.props.cart)} */}

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


export default connect(mapStateToProps,mapDispatchToProps)(CartSummary)