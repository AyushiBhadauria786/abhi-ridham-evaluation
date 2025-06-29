import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import type { RootState } from '../redux/store';

const AuthRoute = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
      return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default AuthRoute;