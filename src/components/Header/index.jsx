import styled from 'styled-components'
import { Container, ImgHeader, Section } from './styles'

export function Header() {
  return (
    <Container>
      <ImgHeader />

      <Section>
        <h1>Sabores inigualáveis</h1>
        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
      </Section>
    </Container>
  )
}
