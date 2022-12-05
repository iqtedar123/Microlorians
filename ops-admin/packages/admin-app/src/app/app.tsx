import { LoginApp } from 'login-app';
import { Products } from 'products';
import { Invoices } from 'invoices-app';
import Header from '@shared/Header/Header';
import { initializeApp } from 'firebase/app';

import { Route, Routes } from 'react-router-dom';
import LandingPage from '@admin-app/components/landing-page/LandingPage';
import { css, Global } from '@emotion/react';
import '@web-components/index';

const config = {
  apiKey: 'AIzaSyAykX19aNWn5w33Igy16fQv559mgM7GtEo',
  authDomain: 'microlorians.firebaseapp.com',
  projectId: 'microlorians',
  storageBucket: 'microlorians.appspot.com',
  messagingSenderId: '791857598478',
  appId: '1:791857598478:web:69882abcec191447b22c5f',
  measurementId: 'G-X24KV8H7Z2',
};

initializeApp(config);

const styles = {
  wrapper: css({
    paddingRight: 8,
  }),
};

export function App() {
  return (
    <div css={styles.wrapper}>
      <Global
        styles={css`
          body {
            margin: 0px;
            background-color: rgb(0, 30, 60);
          }
        `}
      />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginApp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
      <my-component-2 />
    </div>
  );
}

export default App;
