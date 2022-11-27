import { css } from '@emotion/react';
import Button from '@shared/Button/Button';
import Input from '@shared/Input/Input';
import { useNavigate } from 'react-router-dom';

const styles = {
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  }),
};

export const LoginApp = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate('/products');
  };
  return (
    <div css={styles.wrapper}>
      <Input type="email" label={'Email Address'} />
      <Input type="password" label={'Password'} />
      <Button label={'Login'} onClick={login} />
    </div>
  );
};
