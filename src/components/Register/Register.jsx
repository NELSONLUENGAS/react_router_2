import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
	const [form, setForm] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [error, setError] = useState('');

	const { register, loading } = useAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		const result = await register(form.email, form.password, form.name);

		if (result.success) {
			navigate('/profile');
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
						Crear Cuenta
					</h2>
					<p className="mt-2 text-center text-sm text-gray-400">
						O{' '}
						<Link
							to="/login"
							className="font-medium text-blue-400 hover:text-blue-300 transition duration-300"
						>
							inicia sesión en tu cuenta
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

					<div className="space-y-4">
						<div>
							<label
								htmlFor="name"
								className="sr-only"
							>
								Nombre
							</label>
							<input
								id="name"
								name="name"
								type="text"
								autoComplete="name"
								required
								className="input-field rounded-t-lg"
								placeholder="Nombre completo"
								value={form.name}
								onChange={handleOnChange}
							/>
						</div>
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
								className="input-field"
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
								autoComplete="new-password"
								required
								className="input-field"
								placeholder="Contraseña"
								value={form.password}
								onChange={handleOnChange}
							/>
						</div>
						<div>
							<label
								htmlFor="confirmPassword"
								className="sr-only"
							>
								Confirmar Contraseña
							</label>
							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								autoComplete="new-password"
								required
								className="input-field rounded-b-lg"
								placeholder="Confirmar contraseña"
								value={form.confirmPassword}
								onChange={handleOnChange}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							disabled={loading}
							className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition duration-300"
						>
							{loading ? (
								<>
									<div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
									Creando cuenta...
								</>
							) : (
								'Crear Cuenta'
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
