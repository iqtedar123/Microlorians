import styled from '@emotion/styled';
import { LoginApp } from 'login-app';
import { Products } from 'products';
import Header from '@shared/Header/Header';
import { Global, css } from '@emotion/react';
import { initializeApp } from 'firebase/app';

import { Route, Routes, Link } from 'react-router-dom';

const StyledApp = styled.div`
  // Your style here
`;

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
  return (
    <StyledApp>
      <Global
        styles={css`
          body {
            margin: 0px;
          }
        `}
      />
      <Header />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<div>This is the generated root route</div>} />
        <Route path="/login" element={<LoginApp />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
