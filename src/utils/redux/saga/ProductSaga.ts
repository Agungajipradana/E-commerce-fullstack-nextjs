import { call, put } from "redux-saga/effects";
import Product from "@/pages/api/axios/Product";
import { GetProductSuccess, GetProductFailed } from "../action/productAction";

function* handleGetProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Product.getAllProducts, payload);
    yield put(GetProductSuccess(result));
  } catch (error) {
    yield put(GetProductFailed(error));
  }
}

export { handleGetProduct };
