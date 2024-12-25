import React from 'react';
import { Navigate, useLocation } from 'react-router';
import Cookie from 'js-cookie';

export default function Logout() {
  const location = useLocation();

  Cookie.remove('token');
  const allCookies = document.cookie;
  console.log(allCookies);

  return <Navigate to="/" state={{ from: location }} replace />;
}
