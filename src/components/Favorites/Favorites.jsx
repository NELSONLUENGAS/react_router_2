import React from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
	const favorites = [];
	return (
		<div className="max-w-6xl mx-auto">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-3xl font-bold title-font">
					Mis Personajes Favoritos
				</h1>
				<Link
					to="/"
					className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
				>
					<i className="fas fa-arrow-left mr-2"></i>
					Volver al Explorador
				</Link>
			</div>

			{favorites.length > 0 ? (
				<>
					<div className="bg-gray-800 rounded-xl p-6 mb-6">
						<p className="text-gray-300 text-center">
							Tienes <strong>{favorites.length}</strong> personaje
							{favorites.length !== 1 ? 's' : ''} favorito
							{favorites.length !== 1 ? 's' : ''}
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
						{favorites.map((character) => (
							<CharacterCard
								key={character.id}
								character={character}
							/>
						))}
					</div>
				</>
			) : (
				<div className="text-center py-12 bg-gray-800 rounded-xl">
					<i className="fas fa-heart text-5xl text-gray-600 mb-4"></i>
					<h3 className="text-2xl font-bold mb-2">No tienes favoritos aún</h3>
					<p className="text-gray-400 mb-6 max-w-md mx-auto">
						Descubre personajes increíbles y agrégalos a tus favoritos para
						verlos aquí
					</p>
					<Link
						to="/"
						className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
					>
						<i className="fas fa-search mr-2"></i>
						Explorar Personajes
					</Link>
				</div>
			)}
		</div>
	);
};

export default Favorites;
