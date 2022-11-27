import styled from '@emotion/styled';
import ProductsGrid from '@products/components/ProductsGrid/ProductsGrid';

const StyledApp = styled.div`
  // Your style here
`;

export const Products = () => {
  return (
    <StyledApp>
      <ProductsGrid />
    </StyledApp>
  );
};
