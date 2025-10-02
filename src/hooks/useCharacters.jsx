import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchCharacters } from '../services/api.js';

export const useCharacters = () => {
	const { state, dispatch } = useAppContext();
	const { filters, pagination } = state;

	useEffect(() => {
		const loadCharacters = async () => {
			dispatch({ type: 'SET_LOADING', payload: true });

			try {
				const data = await fetchCharacters(pagination.currentPage, filters);

				if (data.error) {
					dispatch({
						type: 'SET_ERROR',
						payload: 'No se encontraron personajes',
					});
					return;
				}

				dispatch({
					type: 'SET_CHARACTERS',
					payload: {
						characters: data.results,
						info: data.info,
					},
				});
			} catch (error) {
				dispatch({
					type: 'SET_ERROR',
					payload: 'Error al cargar los personajes',
				});
			}
		};

		loadCharacters();
	}, [pagination.currentPage, filters, dispatch]);

	return {
		characters: state.characters,
		loading: state.loading,
		error: state.error,
		pagination: state.pagination,
		state: state,
	};
};
