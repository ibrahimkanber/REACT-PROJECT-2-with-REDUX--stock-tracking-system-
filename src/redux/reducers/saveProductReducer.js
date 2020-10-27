import * as actionTypes from "../actions/actionTypes";
import * as initialState from "./initialState"

// console.log(initialState.default.currentCategory)

export default function saveProductReducer(state = initialState.default.savedProduct, action) {
    // console.log(action)
    // console.log(actionTypes.CHANGE_CATEGORY)
    switch (action.type) {
        case actionTypes.UPDATE_PRODUCT_SUCCESS:
            return action.payload

        case actionTypes.CREATE_PRODUCT_SUCCESS:
            return action.payload

        default:

            return state;

    }
}
