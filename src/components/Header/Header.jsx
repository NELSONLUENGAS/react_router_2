import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
	const { isAuthenticated, user, logout } = useAuth();

	const handleLogout = () => {
		logout();
	};

	return (
		<header className="text-center mb-12">
			<h1 className="title-font text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
				Rick and Morty Explorer
			</h1>
			<p className="text-xl text-gray-300 max-w-2xl mx-auto">
				Explora el multiverso y descubre todos los personajes de la serie Rick
				and Morty
			</p>

			<nav className="mt-6 flex flex-wrap justify-center items-center gap-4">
				<NavLink
					to="/"
					className={({ isActive }) =>
						`${
							isActive ? 'text-gray-500' : 'text-gray-300'
						} hover:text-white transition duration-300 font-medium`
					}
				>
					<i className="fas fa-home mr-2"></i>
					Inicio
				</NavLink>

				{isAuthenticated ? (
					<>
						<NavLink
							to="/profile"
							className={({ isActive }) =>
								`${
									isActive ? 'text-gray-500' : 'text-gray-300'
								} hover:text-white transition duration-300 font-medium`
							}
						>
							<i className="fas fa-user mr-2"></i>
							Mi Perfil
						</NavLink>
						<NavLink
							to="/favorites"
							className={({ isActive }) =>
								`${
									isActive ? 'text-gray-500' : 'text-gray-300'
								} hover:text-white transition duration-300 font-medium`
							}
						>
							<i className="fas fa-heart mr-2"></i>
							Favoritos
						</NavLink>
						<div className="flex items-center space-x-4">
							<span className="text-gray-300">
								<i className="fas fa-user-circle mr-2"></i>
								{user?.name}
							</span>
							<button
								onClick={handleLogout}
								className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 text-sm"
							>
								Cerrar Sesión
							</button>
						</div>
					</>
				) : (
					<div className="flex space-x-4">
						<Link
							to="/login"
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
						>
							<i className="fas fa-sign-in-alt mr-2"></i>
							Iniciar Sesión
						</Link>
						<Link
							to="/register"
							className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
						>
							<i className="fas fa-user-plus mr-2"></i>
							Registrarse
						</Link>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
