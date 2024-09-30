import { Container } from './styles'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Catalog } from '../../components/Catalog'
import { useEffect, useState, useCallback } from 'react'
import { api } from '../../Services/api'
import { useSearch } from '../../providers/SearchContext'

export function Home({ userDefault }) {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const { searchTerm } = useSearch()

  const fetchProducts = useCallback(async () => {
    const initialProducts = [
      {
        id: 1,
        title: 'Refeições',
        foods: [],
        userDefault
      },
      {
        id: 2,
        title: 'Sobremesa',
        foods: [],
        userDefault
      },
      {
        id: 3,
        title: 'Bebidas',
        foods: [],
        userDefault
      }
    ]

    try {
      const updatedProducts = await Promise.all(
        initialProducts.map(async (product) => {
          const queryParams = new URLSearchParams({
            category: product.title,
            name: '' // A filtragem será feita após a chamada
          }).toString()

          const { data } = await api.get(`/product?${queryParams}`)
          return { ...product, foods: data }
        })
      )

      setProducts(updatedProducts)
      setFilteredProducts(updatedProducts) // Inicializa com todos os produtos
    } catch (error) {
      console.error(
        'Erro ao buscar produtos:',
        error.response ? error.response.data : error.message
      )
    }
  }, [userDefault])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  useEffect(() => {
    // Filtrar produtos quando searchTerm mudar
    const filtered = products
      .map((catalogItem) => {
        const filteredFoods = catalogItem.foods.filter((food) =>
          food.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

        // Retornar apenas categorias com alimentos filtrados
        if (filteredFoods.length > 0) {
          return {
            ...catalogItem,
            foods: filteredFoods
          }
        }
        return null // Retorna null para categorias sem produtos
      })
      .filter(Boolean) // Remove os nulls da lista

    setFilteredProducts(filtered)
  }, [searchTerm, products])

  return (
    <Container>
      <Header />
      {filteredProducts.map((catalogItem) => (
        <Catalog
          key={catalogItem.id} // Garante que cada catalogItem tenha um ID único
          {...catalogItem}
          searchTerm={searchTerm}
        />
      ))}
      <Footer />
    </Container>
  )
}
