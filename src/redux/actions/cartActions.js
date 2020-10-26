import * as actionTypes from "./actionTypes";

export function addToCart(cartItem){
    return{
        type: actionTypes.ADD_TO_CARD,
        payload:cartItem
    }
}
export function removeFromCart(product){
    console.log(product)
    return{
        type: actionTypes.REMOVE_FROM_CARD,
        payload:product
    }
}