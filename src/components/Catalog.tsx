import { useEffect, useState } from 'react';

import api from '../services/api';

import { Product } from '../store/modules/cart/types';

import CatalogItem from './CatalogItem';

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>

      {products.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Catalog;
