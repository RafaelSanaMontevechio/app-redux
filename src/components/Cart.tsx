import { useSelector } from 'react-redux';

import { GlobalState } from '../store';
import { CartItem } from '../store/modules/cart/types';

const Cart: React.FC = () => {
  const cart = useSelector<GlobalState, CartItem[]>(
    (state) => state.cart.items,
  );

  console.log(cart);

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>SubTotal</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{(item.product.price * item.quantity).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cart;
