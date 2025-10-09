import React, { useCallback } from 'react';
import { useAppContext } from '../context/AppContext';

const useAuth = () => {
	const { state, dispatch } = useAppContext();

	const login = useCallback(
		async (email, password) => {
			dispatch({ type: 'AUTH_START' });

			try {
				await new Promise((resolve) => setTimeout(resolve, 1500));
				// const response = await handleLogin(email, password);

				if (email && password) {
					const user = {
						id: 1,
						email,
						name: email.split('@')[0],
						avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
							email.split('@')[0]
						)}&background=random`,
					};

					dispatch({ type: 'LOGIN_SUCCESS', payload: user });
					return { success: true };
				} else {
					throw new Error('Credenciales inválidas');
				}
			} catch (error) {
				dispatch({ type: 'AUTH_ERROR', payload: error.message });
				return { success: false, error: error.message };
			}
		},
		[dispatch]
	);

	const register = useCallback(
		async (email, password, name) => {
			dispatch({ type: 'AUTH_START' });

			try {
				await new Promise((resolve) => setTimeout(resolve, 1500));
				// const response = await handleLogin(email, password);

				if (email && password && name) {
					const user = {
						id: Date.now(),
						email,
						name,
						avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
							name
						)}&background=random`,
					};

					dispatch({ type: 'LOGIN_SUCCESS', payload: user });
					return { success: true };
				} else {
					throw new Error('Todos los campos son obligatorios');
				}
			} catch (error) {
				dispatch({ type: 'AUTH_ERROR', payload: error.message });
				return { success: false, error: error.message };
			}
		},
		[dispatch]
	);

	const logout = useCallback(() => {
		dispatch({ type: 'LOGOUT' });
	}, [dispatch]);

	return {
		isAuthenticated: state.auth.isAuthenticated,
		user: state.auth.user,
		loading: state.auth.loading,
		login,
		register,
		logout,
	};
};

export default useAuth;
