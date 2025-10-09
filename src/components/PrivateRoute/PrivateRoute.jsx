import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
	const { isAuthenticated, loading } = useAuth();
	const location = useLocation();

	if (loading) {
		return <Loading message="Verificando autenticación..." />;
	}
	console.log(isAuthenticated);
	if (!isAuthenticated) {
		return (
			<Navigate
				to="/login"
				state={{ from: location }}
				replace
			/>
		);
	}

	return children;
};

export default PrivateRoute;
