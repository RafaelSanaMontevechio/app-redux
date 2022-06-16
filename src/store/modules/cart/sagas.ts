import { AxiosResponse } from 'axios';

import { all, takeLatest, select, call, put } from 'redux-saga/effects';

import { GlobalState } from '../..';

import api from '../../../services/api';

import { ActionTypes } from './types';

import {
  addProductToCartFailure,
  addProductToCartRequest,
  addProductToCartSuccess,
} from './actions';

type checkProductStockRequest = ReturnType<typeof addProductToCartRequest>;

interface StockResponse {
  id: number;
  quantity: number;
}

function* checkProductStock({ payload }: checkProductStockRequest) {
  const { product } = payload;

  const currentQuantity: number = yield select(
    (state: GlobalState) =>
      state.cart.items.find((item) => item.product.id === product.id)
        ?.quantity ?? 0,
  );

  const availableStockResponse: AxiosResponse<StockResponse> = yield call(
    api.get,
    `/stock/${product.id}`,
  );

  if (availableStockResponse.data.quantity > currentQuantity) {
    yield put(addProductToCartSuccess(product));
  } else {
    yield put(addProductToCartFailure(product.id));
  }
}

export default all([
  takeLatest(ActionTypes.ADD_PRODUCT_TO_CART_REQUEST, checkProductStock),
]);
