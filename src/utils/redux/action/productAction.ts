import * as ActionProduct from "../constant/productConstant";

// export const GetProductRequest = (payload: any) => ({
//   type: ActionProduct.GET_PRODUCT_REQUEST,
//   payload,
// });
export const GetProductRequest = () => ({
  type: ActionProduct.GET_PRODUCT_REQUEST,
});

export const GetProductSuccess = (payload: any) => ({
  type: ActionProduct.GET_PRODUCT_SUCCESS,
  payload,
});

export const GetProductFailed = (payload: any) => ({
  type: ActionProduct.GET_PRODUCT_FAILED,
  payload,
});
