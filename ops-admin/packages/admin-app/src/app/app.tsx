import styled from '@emotion/styled';
import { LoginApp } from 'login-app';
import { Products } from 'products';
import Header from '@shared/Header/Header';
import { Global, css } from '@emotion/react';

import { Route, Routes, Link } from 'react-router-dom';

const StyledApp = styled.div`
  // Your style here
`;

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
