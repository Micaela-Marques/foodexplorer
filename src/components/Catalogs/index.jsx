import { Container } from './styles'
import { Carousel } from '../Carousel'

export function Catalog({ Icon, title, theme, foods, userDefault }) {
  return (
    <Container {...theme}>
      {Icon && <Icon />}
      <h1>{title}</h1>
      <div
        style={{
          padding: '0px 1.5rem'
        }}
      >
        <Carousel
          foods={foods}
          userDefault={userDefault}
        />
      </div>
    </Container>
  )
}
