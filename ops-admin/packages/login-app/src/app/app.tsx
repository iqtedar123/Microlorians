import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '@shared/firebase/firebase';
import '@web-components/index';
import Button from '@shared/Button/Button';

const styles = {
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  }),
  footer: css({
    position: 'absolute',
    bottom: 0,
  })
};

export const LoginApp = () => {
  const navigate = useNavigate();
  const login = async () => {
    try {
      const promise = await signInWithGoogle();
      if (promise) {
        localStorage.setItem('user', JSON.stringify(promise));
        navigate('/products');
      } else {
        console.error('Error logging in');
      }
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div css={styles.wrapper}>
      <Button onClick={login} label="Sign in with Google" />
      <footer css={styles.footer}>
        <my-component-2 />
      </footer>
    </div>
  );
};
