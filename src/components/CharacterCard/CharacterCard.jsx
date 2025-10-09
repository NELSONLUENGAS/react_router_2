import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ character }) => {
	const navigate = useNavigate();
	const statusClass = `status-${character.status.toLowerCase()}`;

	const handleQuickView = (e) => {
		e.stopPropagation();
		// Todo: openModal
	};

	const isCharFavorite = false;

	const handleViewDetails = (e) => {
		e.stopPropagation();
		navigate(`/character/${character.id}`);
	};

	return (
		<div className="bg-gray-800 rounded-xl overflow-hidden card-hover">
			<button
				onClick={'handleFavorite'}
				className={`absolute top-2 left-2 z-10 p-2 rounded-full transition duration-300 ${
					isCharFavorite
						? 'bg-red-500 text-white'
						: 'bg-gray-700 text-gray-300 hover:bg-red-500 hover:text-white'
				}`}
				title={isCharFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
			>
				<i className={`fas ${isCharFavorite ? 'fa-heart' : 'fa-heart'}`}></i>
			</button>
			<div className="relative">
				<img
					src={character.image}
					alt={character.name}
					className="w-full h-48 object-cover character-image"
				/>
				<span
					className={`absolute top-2 right-2 ${statusClass} text-white text-xs font-bold px-2 py-1 rounded-full`}
				>
					{character.status}
				</span>
			</div>

			<div className="p-4">
				<h3 className="text-xl font-bold mb-2 truncate">{character.name}</h3>
				<p className="text-gray-400 mb-1">
					<span className="font-medium">Especie:</span> {character.species}
				</p>
				<p className="text-gray-400 mb-4">
					<span className="font-medium">Origen:</span> {character.origin.name}
				</p>

				{/* Botones de acción */}
				<div className="flex space-x-2">
					<button
						onClick={handleQuickView}
						className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg transition duration-300 text-sm flex items-center justify-center"
					>
						<i className="fas fa-eye mr-1"></i>
						Vista Rápida
					</button>
					<button
						onClick={handleViewDetails}
						className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-3 rounded-lg transition duration-300 text-sm flex items-center justify-center"
					>
						<i className="fas fa-info-circle mr-1"></i>
						Detalles
					</button>
				</div>
			</div>
		</div>
	);
};

export default CharacterCard;
