import { Container } from './styles'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Catalog } from '../../components/Catalog'
import { useEffect, useState, useCallback } from 'react'
import { api } from '../../Services/api'

export function Home({ userDefault, searchName }) {
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
        title: 'Sobremesas',
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
            name: searchName || ''
          }).toString()

          const { data } = await api.get(`/product?${queryParams}`)
          return { ...product, foods: data }
        })
      )

      setProducts(updatedProducts)
    } catch (error) {
      console.error(
        'Erro ao buscar produtos:',
        error.response ? error.response.data : error.message
      )
    }
  }, [searchName, userDefault]) // Incluímos userDefault também

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <Container>
      <Header />
      {products.map((catalogItem) => (
        <Catalog
          key={catalogItem.id}
          {...catalogItem}
        />
      ))}
      <Footer />
    </Container>
  )
}
