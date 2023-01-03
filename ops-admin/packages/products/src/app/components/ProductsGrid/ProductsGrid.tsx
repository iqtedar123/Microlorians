import { useEffect, useState } from 'react';
import { ProductI } from '@shared/types/types';
import Product from '../Product/Product';
import { css } from '@emotion/react';
import { getDocsFromFirestore } from '@shared/firebase/firebase';

const fetchProducts = async (
  setProducts: React.Dispatch<React.SetStateAction<ProductI[]>>
) => {
  const querySnapshot = await getDocsFromFirestore("products");
  const products: ProductI[] = querySnapshot.docs.map((doc) => {
    const { title, category, description, image, price, rating } = doc.data();
    return {
      id: doc.id,
      title,
      category,
      description,
      image,
      price,
      rating
    }
  })
  setProducts(products)
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
