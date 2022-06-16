import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalState } from '../store';
import { Product } from '../store/modules/cart/types';
import { addProductToCartRequest } from '../store/modules/cart/actions';

interface CatalogItemProps {
  product: Product;
}

const CatalogItem = ({ product }: CatalogItemProps) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<GlobalState, boolean>((state) => {
    return state.cart.failedStockCheck.includes(parseInt(product.id));
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span> {'   '}
      <button type="button" onClick={handleAddProductToCart}>
        Add to cart
      </button>
      {hasFailedStockCheck && (
        <span style={{ color: 'red' }}>
          <strong>Out of stock</strong>
        </span>
      )}
    </article>
  );
};

export default CatalogItem;
