import { Container, Form, Background, Main } from './styles'
import { Link } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignIn() {
  return (
    <Container>
      <Main>
        <div>
          <Background />
        </div>

        <div>
          <Form>
            <h1>Faça Login</h1>
            <Input
              classname="input"
              type="text"
              label="Faça Login"
              placeholder="Exemplo: exemplo@exemplo.com.br"
            />

            <Input
              classname="input"
              type="password"
              label="Password"
              placeholder="No minimo 6 caracteres"
            />

            <Button title="Entrar" />

            <Link to="/register">Criar conta</Link>
          </Form>
        </div>
      </Main>
    </Container>
  )
}
