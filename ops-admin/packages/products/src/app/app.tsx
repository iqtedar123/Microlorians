import styled from '@emotion/styled';
import ProductsGrid from '@products/app/components/ProductsGrid/ProductsGrid';

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
