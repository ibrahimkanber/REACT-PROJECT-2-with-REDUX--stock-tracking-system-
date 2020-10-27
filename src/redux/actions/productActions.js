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

export function saveProductApi(product){
    return fetch("http://localhost:3000/products/"+(product.id||""),{
        method:product.id? "PUT":"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(product)
    })
    .then(handleResponse)
    .catch(handleError)
}


export async function handleResponse(res){
    if (res.ok){
        return res.json()
    }

    const error=await res.text()
    throw new Error(error)
}

export function handleError(error){
    console.error("Something went wrong...")
    throw(error)
}


export function saveProduct(product){
        return function(dispatch){
            return saveProductApi(product).then(savedProduct=>{
                product.id? dispatch(updateProductsSuccess(savedProduct)):dispatch(createProductsSuccess(product))
            }).catch(err=>{
                throw err;
            })
        }
}


export function createProductsSuccess(product){
    return{
        type:actionTypes.CREATE_PRODUCT_SUCCESS,
        payload: product
    }
}
export function updateProductsSuccess(product){
    return{
        type:actionTypes.UPDATE_PRODUCT_SUCCESS,
        payload: product
    }
}