import Loading from '../Loading/Loading';
import CharacterCard from '../CharacterCard/CharacterCard';
import { useCharacters } from '../../hooks/useCharacters';
import Pagination from '../Pagination/Pagination';

const Results = () => {
	const { state, characters, loading, error, pagination } = useCharacters();

	if (loading) return <Loading />;

	if (error) {
		return (
			<div className="col-span-full text-center py-12">
				<i className="fas fa-exclamation-triangle text-5xl text-yellow-500 mb-4"></i>
				<h3 className="text-2xl font-bold mb-2">
					Error al cargar los personajes
				</h3>
				<p className="text-gray-400">Inténtalo de nuevo más tarde.</p>
			</div>
		);
	}

	return (
		<div className="mb-8">
			<div className="flex justify-between items-center mb-6">
				<h2 className="text-2xl font-bold">
					{state.filters.name || state.filters.status || state.filters.species
						? `Resultados de búsqueda (${pagination.count} encontrados)`
						: `Personajes (${pagination.count} en total)`}
				</h2>
				<Pagination />
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{characters.map((character) => (
					<CharacterCard
						key={character.id}
						character={character}
					/>
				))}
			</div>
		</div>
	);
};

export default Results;
