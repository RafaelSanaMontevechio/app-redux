import { ActionTypes, Product } from './types';

export function addProductToCartRequest(product: Product) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_REQUEST,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: Product) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: number | string) {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_FAILURE,
    payload: {
      productId,
    },
  };
}
