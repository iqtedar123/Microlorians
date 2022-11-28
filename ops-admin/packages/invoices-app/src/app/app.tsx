import styled from '@emotion/styled';
import InvoicesGrid from './components/InvoicesGrid/InvoicesGrid';

const StyledApp = styled.div`
  // Your style here
`;

export const Invoices = () => {
  return (
    <StyledApp>
      <InvoicesGrid />
    </StyledApp>
  );
};

export default Invoices;
