// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isSignedIn } from '@shared/firebase/firebase';

const PrivateRoute = () => {
  const authenticated = isSignedIn();
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
