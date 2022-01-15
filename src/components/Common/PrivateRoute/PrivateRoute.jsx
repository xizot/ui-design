import React from 'react';
import { Navigate } from 'react-router';

function PrivateRoute({ children, backUrl }) {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={`/login?backUrl=${backUrl}`} />
  );
}

export default PrivateRoute;
