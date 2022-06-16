import { Reducer } from 'redux';

/* A library that allows us to create a new state based on the previous state. */
import produce from 'immer';

import { ActionTypes, CartState } from './types';

const INITIAL_STATE: CartState = { items: [], failedStockCheck: [] };

const cart: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  // with immer
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS:
        const { product } = action.payload;

        /* If the product is already in the cart, we just need to update the quantity. */
        const productIndex = draft.items.findIndex(
          (item) => item.product.id === product.id,
        );

        if (productIndex >= 0) {
          draft.items[productIndex].quantity += 1;
        } else {
          draft.items.push({
            product,
            quantity: 1,
          });
        }

        break;

      case ActionTypes.ADD_PRODUCT_TO_CART_FAILURE:
        draft.failedStockCheck.push(action.payload.productId);
        break;

      default:
        return draft;
    }
  });
};

export default cart;
