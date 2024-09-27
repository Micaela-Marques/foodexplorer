import { Container, Title, Header, Nav, Menu } from './style'
import { Input } from '../Input'
import { Button } from '../Button'
import { GrSearch } from 'react-icons/gr'
import { RiCloseLargeLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate('/')
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Menu>
        <Header>
          {menuIsOpen && (
            <Button
              className="button-close"
              Icon={RiCloseLargeLine}
              onClick={onCloseMenu}
            ></Button>
          )}
          <Title>Menu</Title>
        </Header>

        <Nav>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            Icon={GrSearch}
          />

          <a
            href="/"
            onClick={handleNavigate}
          >
            Sair
          </a>
        </Nav>
      </Menu>
    </Container>
  )
}
