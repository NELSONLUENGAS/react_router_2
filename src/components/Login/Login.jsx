import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
	});

	const [error, setError] = useState('');

	const { login, loading } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const from = location.state?.from?.pathname || '/';

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		const result = await login(form.email, form.password);

		if (result.success) {
			navigate(from, { replace: true });
		} else {
			setError(result.error);
		}
	};

	const handleOnChange = (e) => {
		const { name, value } = e.target;

		setForm({
			...form,
			[name]: value,
		});
	};

	return (
		<div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold title-font text-white">
						Iniciar Sesión
					</h2>
					<p className="mt-2 text-center text-sm text-gray-400">
						O{' '}
						<Link
							to="/register"
							className="font-medium text-blue-400 hover:text-blue-300 transition duration-300"
						>
							crea una cuenta nueva
						</Link>
					</p>
				</div>

				<form
					className="mt-8 space-y-6"
					onSubmit={handleSubmit}
				>
					{error && (
						<div className="bg-red-900 bg-opacity-20 border border-red-500 text-red-200 px-4 py-3 rounded-lg">
							{error}
						</div>
					)}

					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label
								htmlFor="email"
								className="sr-only"
							>
								Email
							</label>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="input-field rounded-t-lg"
								placeholder="Email"
								value={form.email}
								onChange={handleOnChange}
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="sr-only"
							>
								Contraseña
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="input-field rounded-b-lg"
								placeholder="Contraseña"
								value={form.password}
								onChange={handleOnChange}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							disabled={loading}
							className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
						>
							{loading ? (
								<>
									<div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
									Iniciando sesión...
								</>
							) : (
								'Iniciar Sesión'
							)}
						</button>
					</div>

					<div className="text-center">
						<p className="text-xs text-gray-400">
							Usa cualquier email y contraseña para probar (simulado)
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;
