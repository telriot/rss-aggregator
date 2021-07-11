// src/Filter-context.tsx
import React from 'react';
import { FEEDS } from 'public/feeds';

// TYPES
type Action =
	| { type: 'textSearchSet'; payload: string }
	| { type: 'feedToggled'; payload: number }
	| { type: 'modalToggled' };
type Dispatch = (action: Action) => void;
type State = {
	textSearch: string;
	activeFeeds: number[];
	isModalOpen: boolean;
};
type FilterProviderProps = { children: React.ReactNode };

// CONTEXT
const FilterStateContext = React.createContext<
	{ state: State; dispatch: Dispatch } | undefined
>(undefined);

// REDUCER
function filterReducer(state: State, action: Action) {
	switch (action.type) {
		case 'textSearchSet': {
			return {
				...state,
				textSearch: action.payload
			};
		}
		case 'feedToggled': {
			const isActive = state.activeFeeds.includes(action.payload);
			return {
				...state,
				activeFeeds: isActive
					? state.activeFeeds.filter((feedId) => feedId !== action.payload)
					: state.activeFeeds.concat(action.payload)
			};
		}
		case 'modalToggled': {
			return {
				...state,
				isModalOpen: !state.isModalOpen
			};
		}
		default: {
			throw new Error(`Unhandled action type`);
		}
	}
}

// PROVIDER
function FilterProvider({ children }: FilterProviderProps) {
	const [state, dispatch] = React.useReducer(filterReducer, {
		textSearch: '',
		activeFeeds: FEEDS.map((feed) => feed.id),
		isModalOpen: false
	});

	const value = { state, dispatch };
	return (
		<FilterStateContext.Provider value={value}>
			{children}
		</FilterStateContext.Provider>
	);
}

// HOOK
function useFilter() {
	const context = React.useContext(FilterStateContext);
	if (context === undefined) {
		throw new Error('useFilter must be used within a FilterProvider');
	}
	return context;
}


export { FilterProvider, useFilter };
