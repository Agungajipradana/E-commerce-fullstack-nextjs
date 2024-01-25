import { call, put } from "redux-saga/effects";
import Product from "@/pages/api/axios/Product";
import { GetProductSuccess, GetProductFailed } from "../action/productAction";

// function* handleGetProduct(action: any): any {
//   const { payload } = action;
//   try {
//     const result = yield call(Product.getAllProducts, payload);
//     yield put(GetProductSuccess(result));
//   } catch (error) {
//     yield put(GetProductFailed(error));
//   }
// }

function* handleGetProduct(): any {
  try {
    // console.log("Mengambil data produk...");
    const result = yield call(Product.getAllProducts);
    // console.log("Data produk berhasil diambil:", result.data);
    yield put(GetProductSuccess(result.data));
  } catch (error) {
    // console.error("Gagal mengambil data produk:", error);
    yield put(GetProductFailed(error));
  }
}

export { handleGetProduct };
