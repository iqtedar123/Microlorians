import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export const Products = () =>  {
  return (
    <StyledApp>
      <NxWelcome title="products" />
    </StyledApp>
  );
}
