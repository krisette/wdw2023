/* eslint-disable react/prop-types */
import React, { useState, createContext, useContext } from 'react'

const defaultState = {
	search: ''
}

const SearchContext = createContext(defaultState)

export function SearchProvider({ children }) {
	const [search, setSearch] = useState('')

	return (
		<SearchContext.Provider value={{
			search,
			setSearch
		}}>
			{children}
		</SearchContext.Provider>
	)
}

export const useSearchContext = () => useContext(SearchContext)

export default SearchProvider