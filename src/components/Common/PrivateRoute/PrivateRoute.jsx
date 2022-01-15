import React from 'react';
import { useSelector } from 'react-redux';
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
