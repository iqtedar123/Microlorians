import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '@shared/firebase/firebase';

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
      <button className="button" onClick={login}>
        <i className="fab fa-google"></i>Sign in with google
      </button>
    </div>
  );
};
