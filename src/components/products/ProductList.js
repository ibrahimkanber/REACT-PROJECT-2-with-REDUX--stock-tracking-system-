import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Badge, Button } from 'reactstrap';
import * as productActions from "../../redux/actions/productActions";
import { Table } from 'reactstrap';
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"

class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts()
    }

    addToCart(product){
        this.props.actions.addToCart({quantity:1,product})
        alertify.success(product.productName+"added to cart",0.5)
    }


    render() {
        return (
            <div>
                <Badge color="warning">Products</Badge>
                <Badge color="success">{this.props.currentCategory.categoryName}</Badge>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Quantity Per Unit</th>
                            <th>Units in Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(product => (

                                <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td> <Button color="success" onClick={()=>this.addToCart(product)} >Add</Button> </td>
                                   
                                </tr>

                            ))
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart:bindActionCreators(cartActions.addToCart,dispatch)

        }

    }

}


function mapStateToProps(state) {
    // console.log(state+"11")
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)