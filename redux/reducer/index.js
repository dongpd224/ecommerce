import { combineReducers } from "redux";
import quantityReducer from "./itemsquantity";


const rootReducer = combineReducers({
    itemsquantity: quantityReducer,
});
export default rootReducer