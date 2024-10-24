import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context and hooks/AuthContext';

/**
 * AuthGuard prevents authenticated users from accessing auth pages
 * (login, register, forgot-password) when they're already logged in
 */
const AuthGuard = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  // If user is already authenticated, redirect to home page
  // or to the page they were trying to access before login
  if (currentUser) {
    const intendedDestination = location.state?.from?.pathname || '/';
    return <Navigate to={intendedDestination} replace />;
  }

  // If user is not authenticated, allow access to auth pages
  return children;
};

export default AuthGuard;