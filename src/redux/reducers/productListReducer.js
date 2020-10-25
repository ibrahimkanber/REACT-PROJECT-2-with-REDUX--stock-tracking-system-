import * as actionTypes from "../actions/actionTypes";
import * as initialState from "./initialState"

// console.log(initialState.default.currentCategory)

export default function productListReducer(state=initialState.default.products,action) {
      // console.log(action)
      // console.log(actionTypes.CHANGE_CATEGORY)
      switch (action.type){
          case actionTypes.GET_PRODUCTS_SUCCESS:
              return action.payload
        default:
              
            return state;
            
      }  
}
