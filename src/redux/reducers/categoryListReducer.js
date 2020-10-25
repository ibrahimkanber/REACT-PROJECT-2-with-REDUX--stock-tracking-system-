import * as actionTypes from "../actions/actionTypes";
import * as initialState from "./initialState"

// console.log(initialState.default.currentCategory)

export default function categoryListReduceer(state=initialState.default.categories,action) {
      switch (action.type){
          case actionTypes.GET_CATEGORIES_SUCCESS:
              return action.payload
        default:
              
            return state;
            
      }  
}