import * as ActionType from "../constant/productConstant";

const init_state = {
  product: [],
};

const ProductReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_PRODUCT_REQUEST:
      return { ...state };
    case ActionType.GET_PRODUCT_SUCCESS:
      return GetProduct(state, action);
    default:
      return { ...state };
  }
};

const GetProduct = (state: any, action: any) => {
  return {
    ...state,
    allProduct: action.payload,
  };
};

export default ProductReduce;
