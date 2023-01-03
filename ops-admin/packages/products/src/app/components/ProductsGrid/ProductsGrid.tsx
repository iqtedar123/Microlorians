import { useEffect, useState } from 'react';
import { ProductI } from '@shared/types/types';
import Product from '../Product/Product';
import { css } from '@emotion/react';
import { getDocsFromFirestore } from '@shared/firebase/firebase';
import AddProduct from '../AddProduct/AddProduct';

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
      {!showAddProduct && <button onClick={() => setShowAddProduct(true)} >Add Product</button>}
      {!showAddProduct && products.length > 0 && <div css={styles.productsWrapper}>
        {products.map((product) => <Product key={product.id} {...product} />)}
      </div>}
      {showAddProduct && <AddProduct toggleView={() => setShowAddProduct(false)} />}
    </div>
  );
};

export default ProductsGrid;
