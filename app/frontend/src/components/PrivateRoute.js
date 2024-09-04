import React from 'react';
import { Navigate, Route, Outlet } from 'react-router-dom';
import { useAuth } from '../authentication/auth-context';

const PrivateRoute = () => {
    const { authToken } = useAuth();

    return authToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

