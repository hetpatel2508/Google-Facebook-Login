import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Cookie from 'js-cookie'

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const token = Cookie.get('token');

  // If no token is found, redirect to login page
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Return the protected content (children) if token is present
  return children;
};

export default PrivateRoute;
