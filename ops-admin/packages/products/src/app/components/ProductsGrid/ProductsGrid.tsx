import { useEffect, useState } from 'react';
import { ProductI } from '@shared/types/types';
import Product from '../Product/Product';
import { css } from '@emotion/react';
import { getDocsFromFirestore } from '@shared/firebase/firebase';
import AddProduct from '../AddProduct/AddProduct';
import Button from '@shared/Button/Button';
import { Breakpoints } from '@shared/utils/breakpoints';

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
  productsWrapper: css({
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    padding: 8,
    columnGap: 8,
    rowGap: 30,
  }),
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    'button': {
      width: '20%',
      alignSelf: 'center',
      marginBottom: 16,
      [Breakpoints.sm]: {
        width: '100%'
      }
    }
  })
};
const ProductsGrid = () => {
  const [products, setProducts] = useState<ProductI[]>([]);
  const [showAddProduct, setShowAddProduct] = useState(false);
  useEffect(() => {
    fetchProducts(setProducts);
  }, []);
  return (
    <div css={styles.wrapper}>
      {!showAddProduct && <Button onClick={() => setShowAddProduct(true)} label={'Add Product'} />}
      {!showAddProduct && products.length > 0 && <div css={styles.productsWrapper}>
        {products.map((product) => <Product key={product.id} {...product} />)}
      </div>}
      {showAddProduct && <AddProduct toggleView={() => setShowAddProduct(false)} />}
    </div>
  );
};

export default ProductsGrid;
