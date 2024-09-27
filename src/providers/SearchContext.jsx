import { createContext, useState, useContext, useCallback } from 'react'

// Cria o contexto para busca
const SearchContext = createContext()

// Hook para facilitar o acesso ao contexto
export const useSearch = () => {
  return useContext(SearchContext)
}

// Provider para gerenciar o estado de busca
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('')

  // Função que atualiza o estado de busca
  const updateSearchTerm = useCallback((term) => {
    setSearchTerm(term)
  }, [])

  const value = {
    searchTerm,
    updateSearchTerm
  }

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}
