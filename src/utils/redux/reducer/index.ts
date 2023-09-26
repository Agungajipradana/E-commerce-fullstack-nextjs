import { combineReducers } from "redux";
import ProductReduce from "./productReducer";

const rootReducer = combineReducers({
  productState: ProductReduce,
});

export default rootReducer;
