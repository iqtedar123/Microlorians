import styled from '@emotion/styled';
import Button from '@shared/Button/Button';

const StyledApp = styled.div`
  // Your style here
`;

export const LoginApp = () => {
  return (
    <StyledApp>
      <Button label={'Login'} onClick={() => alert('Button Pressed')} />
    </StyledApp>
  );
};
