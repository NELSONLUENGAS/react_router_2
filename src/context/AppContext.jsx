import { createContext, useReducer, useContext } from 'react';

const AppContext = createContext();

const initialState = {
	characters: [],
	filters: {
		name: '',
		status: '',
		species: '',
	},
	pagination: {
		currentPage: 1,
		totalPages: 0,
		count: 0,
	},
	loading: false,
	error: null,
	selectedCharacter: null,
	isModalOpen: false,
	characterDetail: null,
	characterDetailLoading: false,
	characterDetailError: null,
};

function appReducer(state, action) {
	switch (action.type) {
		case 'SET_LOADING':
			return { ...state, loading: action.payload };
		case 'SET_ERROR':
			return { ...state, error: action.payload, loading: false };
		case 'SET_CHARACTERS':
			return {
				...state,
				characters: action.payload.characters,
				pagination: {
					...state.pagination,
					totalPages: action.payload.info.pages,
					count: action.payload.info.count,
				},
				loading: false,
				error: null,
			};
		case 'SET_CHARACTER_DETAIL_LOADING':
			return {
				...state,
				characterDetailLoading: action.payload,
			};
		case 'SET_CHARACTER_DETAIL':
			return {
				...state,
				characterDetail: action.payload,
				characterDetailLoading: false,
				characterDetailError: null,
			};
		case 'SET_CHARACTER_DETAIL_ERROR':
			return {
				...state,
				characterDetailError: action.payload,
				characterDetailLoading: false,
			};
		default:
			return state;
	}
}

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('useAppContext debe usuarse dentro de AppProvider');
	}

	return context;
};
