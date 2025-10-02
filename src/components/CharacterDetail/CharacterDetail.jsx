import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useCharacterDetail from '../../hooks/useCharacterDetail';
import Loading from '../Loading/Loading';

const CharacterDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { character, loading, error } = useCharacterDetail(id);

	if (loading) return <Loading />;

	if (error || !character) {
		return (
			<div className="text-center py-12">
				<i className="fas fa-exclamation-triangle text-5xl text-yellow-500 mb-4"></i>
				<h3 className="text-2xl font-bold mb-2">
					Error al cargar el personaje
				</h3>
				<p className="text-gray-400 mb-4">{error}</p>
				<button
					onClick={() => navigate('/')}
					className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
				>
					Volver al Inicio
				</button>
			</div>
		);
	}

	const statusClass = `status-${character.status.toLowerCase()}`;

	return (
		<div className="max-w-4xl mx-auto">
			{/* Breadcrumb y Botón Volver */}
			<div className="flex items-center justify-between mb-8">
				<div className="flex items-center space-x-2 text-sm text-gray-400">
					<Link
						to="/"
						className="hover:text-white transition duration-300"
					>
						<i className="fas fa-home mr-1"></i>
						Inicio
					</Link>
					<span>/</span>
					<span className="text-white">Detalles de {character.name}</span>
				</div>

				<button
					onClick={() => navigate('/')}
					className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center"
				>
					<i className="fas fa-arrow-left mr-2"></i>
					Volver
				</button>
			</div>

			{/* Tarjeta de Detalles */}
			<div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
				<div className="md:flex">
					{/* Imagen del Personaje */}
					<div className="md:w-2/5">
						<img
							src={character.image}
							alt={character.name}
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Información del Personaje */}
					<div className="md:w-3/5 p-8">
						<div className="flex items-start justify-between mb-6">
							<h1 className="text-3xl font-bold title-font">
								{character.name}
							</h1>
							<span
								className={`${statusClass} text-white text-sm font-bold px-3 py-1 rounded-full`}
							>
								{character.status}
							</span>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							<div className="space-y-4">
								<div>
									<h3 className="text-lg font-semibold text-blue-400 mb-2">
										<i className="fas fa-dna mr-2"></i>
										Información Básica
									</h3>
									<div className="space-y-2">
										<p>
											<span className="font-medium">Especie:</span>{' '}
											{character.species}
										</p>
										<p>
											<span className="font-medium">Género:</span>{' '}
											{character.gender}
										</p>
										<p>
											<span className="font-medium">Tipo:</span>{' '}
											{character.type || 'No especificado'}
										</p>
									</div>
								</div>

								<div>
									<h3 className="text-lg font-semibold text-green-400 mb-2">
										<i className="fas fa-globe mr-2"></i>
										Origen
									</h3>
									<p>{character.origin.name}</p>
								</div>
							</div>

							<div className="space-y-4">
								<div>
									<h3 className="text-lg font-semibold text-purple-400 mb-2">
										<i className="fas fa-map-marker-alt mr-2"></i>
										Ubicación Actual
									</h3>
									<p>{character.location.name}</p>
								</div>

								<div>
									<h3 className="text-lg font-semibold text-yellow-400 mb-2">
										<i className="fas fa-tv mr-2"></i>
										Apariciones
									</h3>
									<p>
										{character.episode.length} episodio
										{character.episode.length !== 1 ? 's' : ''}
									</p>
								</div>
							</div>
						</div>

						{/* Información adicional */}
						<div className="bg-gray-900 rounded-lg p-4">
							<h3 className="text-lg font-semibold mb-3">
								<i className="fas fa-info-circle mr-2 text-gray-400"></i>
								Información Adicional
							</h3>
							<div className="grid grid-cols-2 gap-4 text-sm">
								<div>
									<span className="text-gray-400">Creado:</span>
									<p>{new Date(character.created).toLocaleDateString()}</p>
								</div>
								<div>
									<span className="text-gray-400">ID:</span>
									<p>#{character.id}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Sección de Episodios */}
			<div className="mt-8 bg-gray-800 rounded-xl p-6">
				<h2 className="text-2xl font-bold mb-4">
					<i className="fas fa-list mr-2"></i>
					Lista de Episodios
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
					{character.episode.slice(0, 12).map((episodeUrl, index) => {
						const episodeNumber = episodeUrl.split('/').pop();
						return (
							<div
								key={index}
								className="bg-gray-700 rounded-lg p-3 text-center hover:bg-gray-600 transition duration-300"
							>
								<div className="text-blue-400 font-bold">Episodio</div>
								<div className="text-white">#{episodeNumber}</div>
							</div>
						);
					})}
					{character.episode.length > 12 && (
						<div className="bg-gray-700 rounded-lg p-3 text-center">
							<div className="text-gray-400">
								+{character.episode.length - 12} más
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CharacterDetail;
