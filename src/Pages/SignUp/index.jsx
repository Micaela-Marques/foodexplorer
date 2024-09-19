import { useState } from 'react'
import { Container, Background, Form, Main } from './styles'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

import { api } from '../../Services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSignUp() {
    if (!name || !email || !password) {
      setError('Preencha todos os campos')
    
      return
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres')
    
      return
    }

    setLoading(true)
    setError('')
    

    api
      .post('/users', { name, email, password })
      .then(() => {
       
        alert('Usuário cadastrado com sucesso!')
      })
      .catch((error) => {
        if (error.response) {
          setError(error.response.data.error)
        } else {
          setError('Erro ao cadastrar o usuário. Tente novamente.')
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

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
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            <Input
              type="email"
              label="Email"
              placeholder="Exemplo: exemplo@exemplo.com.br"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            <Input
              type="password"
              label="Senha"
              placeholder="No mínimo 6 caracteres"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <Button
              title={loading ? 'Criando conta...' : 'Criar conta'}
              onClick={handleSignUp}
              disabled={loading}
            />

            <Link to="/login">Já tenho uma conta</Link>
          </Form>
        </div>
      </Main>
    </Container>
  )
}
