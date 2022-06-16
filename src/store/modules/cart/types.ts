export enum ActionTypes {
  ADD_PRODUCT_TO_CART_REQUEST = '@cart/ADD_PRODUCT_TO_CART_REQUEST',
  ADD_PRODUCT_TO_CART_SUCCESS = '@cart/ADD_PRODUCT_TO_CART_SUCCESS',
  ADD_PRODUCT_TO_CART_FAILURE = '@cart/ADD_PRODUCT_TO_CART_FAILURE',
}

export interface Product {
  id: string;
  title: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  failedStockCheck: number[];
}
