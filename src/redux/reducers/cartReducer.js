import * as actionTypes from "../actions/actionTypes";
import * as initialState from "./initialState";


export default function cartReducer(state=initialState.default.cart,action){
    // console.log(action)
    switch (action.type){
        case actionTypes.ADD_TO_CARD:
            var addedItem=state.find(c=>c.product.id===action.payload.product.id)
            // console.log(addedItem)
            if (addedItem){
                var newState=state.map(cartItem=>{
                //    console.log(action.payload)
                    if(cartItem.product.id===action.payload.product.id){
                        let x=Object.assign({},addedItem,{quantity:addedItem.quantity+1})
                        console.log(x)
                        return x
                    }
                 
                    return cartItem
                })
              
                return newState;
            }else{
                return [...state,{...action.payload}]
            } 

            case actionTypes.REMOVE_FROM_CARD:
                // console.log(state[0].product.id)
                // console.log(action)
                const newState2=state.filter(item=>item.product.id!== action.payload.id)
                return newState2

        default:
           
            return state      
    }
}


