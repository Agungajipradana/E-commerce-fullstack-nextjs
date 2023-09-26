import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeProduct from "../constant/productConstant";
import { handleGetProduct } from "./ProductSaga";

function* watchAll() {
  yield all([
    //Product
    takeEvery(ActionTypeProduct.GET_PRODUCT_REQUEST, handleGetProduct),
  ]);
}

export default watchAll;
