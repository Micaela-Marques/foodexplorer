import { Container, Background, Form, Main } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <Container>
      <Main>
        <div>
          <Background />
        </div>

        <div>
          <Form>
            <h1>Crie sua Conta</h1>
            <Input
              type="text"
              label="Seu nome"
              placeholder="Exemplo: Maria da Silva"
            />

            <Input
              type="text"
              label="Email"
              placeholder="Exemplo: exemplo@exemplo.com.br"
            />

            <Input
              type="text"
              label="Senha"
              placeholder="No minimo 6 caracteres"
            />

            <Button title="Criar conta" />

            <Link to="/login">Já tenho uma conta</Link>
          </Form>
        </div>
      </Main>
    </Container>
  )
}
