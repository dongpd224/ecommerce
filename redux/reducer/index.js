import { combineReducers } from "redux";
import quantityReducer from "./itemsquantity";
import cartReducer from "./cart";


const rootReducer = combineReducers({
    itemsquantity: quantityReducer,
    cartState: cartReducer,
});
export default rootReducer