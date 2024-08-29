import { Container } from './styles'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
// import { Catalog } from '../../components/catalog'
// import { snackData } from './Refeições'
// import { dessertData } from './Sobremesa'
// import { drinksData } from './Bebidas'


export function Home({ userDefault }) {
  return (
    <Container>
      <Header />
      {/* <Catalog
        userDefault={userDefault}
        foods={snackData}
        title="Refeição"
      />
      <Catalog
        userDefault={userDefault}
        foods={dessertData}
        title="Sobremesa"
      />
      <Catalog
        userDefault={userDefault}
        foods={drinksData}
        title="Bebidas"
      /> */}
      <Footer />
    </Container>
  )
}
