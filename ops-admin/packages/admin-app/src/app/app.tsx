import { LoginApp } from 'login-app';
import { Products } from 'products';
import { Invoices } from 'invoices-app';
import Header from '@shared/Header/Header';

import { Route, Routes } from 'react-router-dom';
import LandingPage from '@admin-app/components/landing-page/LandingPage';
import { css, Global } from '@emotion/react';
import PrivateRoute from './PrivateRoute';

export function App() {
  return (
    <div>
      <Global
        styles={css`
        html {
          -webkit-text-size-adjust: 100%;
          font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
          line-height: 1.5;
          tab-size: 4;
          scroll-behavior: smooth;
        }
        body {
          font-family: inherit;
          line-height: inherit;
          margin: 0;
        }
          body {
            margin: 0px;
            background-color: rgb(247, 247, 247);
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
    </div>
  );
}

export default App;
