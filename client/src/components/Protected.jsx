import React from 'react';
import { Navigate, useLocation } from 'react-router';
import Cookie from 'js-cookie';
import { useCookies } from 'react-cookie';

export default function Protected({ Component }) {
  const location = useLocation();

  const [cookies, setCookie] = useCookies();
  const token = cookies.token;
  console.log('Token = ' + token);

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Component />;
}
