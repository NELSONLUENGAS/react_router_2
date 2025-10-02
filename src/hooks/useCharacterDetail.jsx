import { useCallback, useEffect, useState } from 'react';
import { fetchCharacter } from '../services/api';

const useCharacterDetail = (characterId) => {
	const [character, setCharacter] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const loadCharacterDetail = useCallback(async (id) => {
		if (!id) return;

		setLoading(true);
		setError(null);

		try {
			const data = await fetchCharacter(id);
			setCharacter(data);
		} catch (error) {
			setError('Error al cargar el personaje');
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		if (characterId) {
			loadCharacterDetail(characterId);
		}
	}, [characterId, loadCharacterDetail]);

	return {
		character,
		loading,
		error,
	};
};

export default useCharacterDetail;
