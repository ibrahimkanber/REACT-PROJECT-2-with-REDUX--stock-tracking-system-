import * as actionTypes from "../actions/actionTypes";
import * as initialState from "./initialState"

// console.log(initialState.default.currentCategory)

export default function changeCategoryReducer(state=initialState.default.currentCategory,action) {
      // console.log(action)
      // console.log(actionTypes.CHANGE_CATEGORY)
      switch (action.type){
          case actionTypes.CHANGE_CATEGORY:
              return action.payload
        default:
              
            return state;
            
      }  
}

