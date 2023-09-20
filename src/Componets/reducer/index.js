import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";

const rootreducer = combineReducers({
    product : ProductReducer
})

export default rootreducer;