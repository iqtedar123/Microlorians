import { LoginApp } from 'login-app';
import { Products } from 'products';
import { Invoices } from 'invoices-app';
import Header from '@shared/Header/Header';

import { Route, Routes } from 'react-router-dom';
import LandingPage from '@admin-app/components/landing-page/LandingPage';
import { css, Global } from '@emotion/react';
import '@web-components/index';
import PrivateRoute from './PrivateRoute';

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
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/invoices" element={<Invoices />} />
      </Routes>
      <my-component-2 />
    </div>
  );
}

export default App;
