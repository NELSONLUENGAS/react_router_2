const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async (page = 1, filters = {}) => {
	let url = `${BASE_URL}/?page=${page}`;

	if (filters.name) url += `&name=${encodeURIComponent(filters.name)}`;
	if (filters.status) url += `&status=${filters.status}`;
	if (filters.species) url += `&species=${filters.species}`;

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		throw new Error('Error fetching characters');
	}
};

export const fetchCharacter = async (id) => {
	try {
		const response = await fetch(`${BASE_URL}/${id}`);
		if (!response.ok) {
			throw new Error('Character not found');
		}
		return await response.json();
	} catch (error) {
		throw new Error('Error fetching character');
	}
};
