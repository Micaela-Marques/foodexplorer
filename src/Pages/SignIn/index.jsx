import { useState } from 'react'
import { Container, Form, Background, Main } from './styles'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    
    signIn({ email, password }) // Corrigido aqui para 'signIn'
  }

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
              className="input"
              type="text"
              label="Faça Login"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              className="input"
              type="password"
              label="Password"
              placeholder="No mínimo 6 caracteres"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              title="Entrar"
              onClick={handleSignIn}
            />

            <Link to="/register">Criar conta</Link>
          </Form>
        </div>
      </Main>
    </Container>
  )
}
