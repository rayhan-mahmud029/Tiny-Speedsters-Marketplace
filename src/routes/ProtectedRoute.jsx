import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);


    const location = useLocation();

    if (user) {
        return children;
    } else if (!loading) {
        alert('Please login first')
        return <Navigate to='/login' state={{ from: location }} replace />
    }else{
        return null;
    }
};

export default ProtectedRoute;