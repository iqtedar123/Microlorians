import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SharedProps {}

const StyledShared = styled.div`
  color: pink;
`;

export function Shared(props: SharedProps) {
  return (
    <StyledShared>
      <h1>Welcome to Shared!</h1>
    </StyledShared>
  );
}

export default Shared;
