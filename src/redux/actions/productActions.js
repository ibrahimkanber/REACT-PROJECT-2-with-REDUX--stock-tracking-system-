import * as actionTypes from "./actionTypes";
export function getProductsSuccess(products) {
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: products
    }
}



export function getProducts(categoryId) {
    return function (dispatch) {
        let URL = "http://localhost:3000/products";
        if (categoryId){
            URL=URL+"?categoryId="+categoryId
           
        }
        return (fetch(URL).then(res => res.json()).then(res => dispatch(getProductsSuccess(res))))
    }
}