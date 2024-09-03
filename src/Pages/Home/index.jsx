import { Container } from './styles'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Catalog } from '../../components/Catalog'
import { snackData } from './Refeições'
import { dessertData } from './Sobremesa'
import { drinksData } from './Bebidas'

export function Home({ userDefault }) {
  const listCatalogs = [
    {
      id: 1,
      title: 'Refeição',
      foods: snackData,
      userDefault: userDefault
    },
    {
      id: 2,
      title: 'Sobremesa',
      foods: dessertData,
      userDefault: userDefault
    },
    {
      id: 3,
      title: 'Bebidas',
      foods: drinksData,
      userDefault: userDefault
    }
  ]

  return (
    <Container>
      <Header />
      {listCatalogs.map((catalogItem) => (
        <Catalog
          key={catalogItem.id}
          {...catalogItem}
        />
      ))}
      <Footer />
    </Container>
  )
}
