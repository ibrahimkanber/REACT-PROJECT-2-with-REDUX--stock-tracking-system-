import React, { Component } from 'react'
import Navi from '../navi/Navi';
import { Row, Col } from "reactstrap";
import CategoryList from '../categories/CategoryList';
import ProductList from '../products/ProductList';
import TextInput from '../toolbox/TextInput';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';



export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3">
                        <CategoryList />
                        <TextInput/>
                    </Col>
                    <Col xs="9">
                        <ProductList />
                    </Col>
                </Row>
            </div>
        )
    }
}
