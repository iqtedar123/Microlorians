import { useEffect, useState } from 'react';
import { ProductI } from '@shared/types/types';
import Product from '../Product/Product';
import { css } from '@emotion/react';

const fetchProducts = (
  setProducts: React.Dispatch<React.SetStateAction<ProductI[]>>
) => {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => setProducts(json));
};

const styles = {
  wrapper: css({
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    padding: 8,
    columnGap: 8,
    rowGap: 30,
  }),
};
const ProductsGrid = () => {
  const [products, setProducts] = useState<ProductI[]>([]);
  useEffect(() => {
    fetchProducts(setProducts);
  }, []);
  return (
    <div css={styles.wrapper}>
      {products.length > 0 &&
        products.map((product) => <Product key={product.id} {...product} />)}
    </div>
  );
};

export default ProductsGrid;
