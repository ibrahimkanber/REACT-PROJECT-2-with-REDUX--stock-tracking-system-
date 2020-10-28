import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";
import ProductDetails from "./ProductDetails";

function AddOrUpdateProduct({
  getCategories,
  saveProduct,
  getProducts,
  products,
  categories,
  history,
  ...props
}) {
  const [product, setProduct] = useState({ ...props.product });
  /////
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]);
  //////
  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }
  ///
  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }

  return (
    <div>
      <ProductDetails
        product={product}
        categories={categories}
        onChange={handleChange}
        onSave={handleSave}
      />
    </div>
  );
}

const mapDispatchToProps = { getCategories, saveProduct };

function mapStateToProps(state, ownProps) {
  console.log(state);
  console.log(ownProps);
  const productId = ownProps.match.params.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};

  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}

export function getProductById(products, productId) {
  let product = products.find((product) => product.id === productId) || null;
  return product;
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
