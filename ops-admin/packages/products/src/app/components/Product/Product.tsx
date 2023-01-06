import { css } from '@emotion/react';
import { ProductI } from '@shared/types/types';

const styles = {
  wrapper: css({
    display: 'flex',
    gap: 8,
    backgroundColor: '#64748b',
    border: '1px solid rgba(0, 0, 0, 0.8)',
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
  }),
  imageWrapper: css({
    borderRadius: 8,
  }),
  image: css({
    objectFit: 'cover',
    width: '100%',
    height: 250,
  }),
  content: css({
    display: 'flex',
    flexDirection: 'column',
  }),
  title: css({
    fontWeight: 600,
    fontSize: 24,
    marginBottom: 16,
    color: 'rgb(50, 186, 246)',
  }),
  description: css({
    fontSize: 18,
    textAlign: 'start',
  }),
  price: css({
    fontWeight: 600,
    fontSize: 24,
    textAlign: 'end',
    marginTop: 'auto',
  }),
};
const Product = (product: ProductI) => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.imageWrapper}>
        <img
          src={product.image}
          alt={`${product.id}-title`}
          css={styles.image}
        />
      </div>
      <div css={styles.content}>
        <div css={styles.title}>{product.title}</div>
        <div css={styles.description}>{product.description}</div>
        <div css={styles.price}>${product.price}</div>
      </div>
    </div>
  );
};

export default Product;
