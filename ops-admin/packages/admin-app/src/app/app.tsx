import { LoginApp } from 'login-app';
import { Products } from 'products';
import Header from '@shared/Header/Header';
import { Global, css } from '@emotion/react';
import { initializeApp } from 'firebase/app';
import MicroloriansImage from '../assets/microlorians.png';

import { Route, Routes, useNavigate } from 'react-router-dom';
import Button from '@shared/Button/Button';

const styles = {
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 100px',
    marginTop: 30,
    justifyContent: 'center',
    gap: 16,
    color: 'white',
  }),
  title: css({
    color: 'white',
  }),
  block: css({
    display: 'block',
  }),
  appTitle: css({
    color: 'transparent',
    backgroundClip: 'text',
    backgroundImage: 'linear-gradient(to right, #3b82f6, #06b6d4)',
  }),
  content: css({
    display: 'flex',
    flexDirection: 'row',
    gap: '5em',
  }),
  leftContainer: css({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }),
};

const config = {
  apiKey: 'AIzaSyAykX19aNWn5w33Igy16fQv559mgM7GtEo',
  authDomain: 'microlorians.firebaseapp.com',
  projectId: 'microlorians',
  storageBucket: 'microlorians.appspot.com',
  messagingSenderId: '791857598478',
  appId: '1:791857598478:web:69882abcec191447b22c5f',
  measurementId: 'G-X24KV8H7Z2',
};

const app = initializeApp(config);

export function App() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div css={styles.wrapper}>
        <Global
          styles={css`
            body {
              margin: 0px;
              background-color: rgb(0, 30, 60);
            }
          `}
        />
        <div css={styles.content}>
          <div css={styles.leftContainer}>
            <h1 css={styles.title}>
              Welcome to <span css={styles.appTitle}>Ops-Admin</span>.
              <span css={styles.block}>
                Developed by the <span css={styles.appTitle}>Microlorians</span>
                !
              </span>
            </h1>
            <h2>
              Each page in this application is an independent microapp part of a
              larger monorepo.
            </h2>
            <Button label={'Login'} onClick={() => navigate('/login')} />
          </div>
          <img src={MicroloriansImage} />
        </div>
        <Routes>
          <Route path="/" element={null} />
          <Route path="/login" element={<LoginApp />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
