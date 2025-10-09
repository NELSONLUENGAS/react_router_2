import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CharacterCard from '../CharacterCard/CharacterCard';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
	const { user, logout } = useAuth();
	const favorites = [];
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/');
	};

	return (
		<div className="max-w-6xl mx-auto">
			{/* Header del perfil */}
			<div className="bg-gray-800 rounded-xl p-8 mb-8 shadow-2xl">
				<div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
					<img
						src={user?.avatar}
						alt={user?.name}
						className="w-32 h-32 rounded-full border-4 border-blue-500"
					/>
					<div className="flex-1 text-center md:text-left">
						<h1 className="text-3xl font-bold title-font mb-2">{user?.name}</h1>
						<p className="text-gray-400 mb-4">{user?.email}</p>
						<p className="text-gray-300">
							Miembro desde {new Date().toLocaleDateString()}
						</p>
					</div>
					<div className="flex space-x-4">
						<button
							onClick={handleLogout}
							className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
						>
							Cerrar Sesión
						</button>
					</div>
				</div>
			</div>

			{/* Estadísticas */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
				<div className="bg-gray-800 rounded-xl p-6 text-center">
					<div className="text-3xl font-bold text-blue-400 mb-2">
						{favorites.length}
					</div>
					<div className="text-gray-400">Personajes Favoritos</div>
				</div>
				<div className="bg-gray-800 rounded-xl p-6 text-center">
					<div className="text-3xl font-bold text-green-400 mb-2">0</div>
					<div className="text-gray-400">Episodios Vistos</div>
				</div>
				<div className="bg-gray-800 rounded-xl p-6 text-center">
					<div className="text-3xl font-bold text-purple-400 mb-2">1</div>
					<div className="text-gray-400">Días como Miembro</div>
				</div>
			</div>

			{/* Favoritos */}
			<div className="bg-gray-800 rounded-xl p-8">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-2xl font-bold title-font">Mis Favoritos</h2>
					<Link
						to="/"
						className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
					>
						Explorar Personajes
					</Link>
				</div>

				{favorites.length > 0 ? (
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{favorites.map((character) => (
							<CharacterCard
								key={character.id}
								character={character}
							/>
						))}
					</div>
				) : (
					<div className="text-center py-12">
						<i className="fas fa-heart text-5xl text-gray-600 mb-4"></i>
						<h3 className="text-xl font-bold mb-2">No tienes favoritos aún</h3>
						<p className="text-gray-400 mb-4">
							Descubre personajes y agrégalos a tus favoritos
						</p>
						<Link
							to="/"
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
						>
							Explorar Personajes
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Profile;
