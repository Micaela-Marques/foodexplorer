import { Container, Title, Header, Nav, Menu } from './style'
import { Input } from '../Input'
import { Button } from '../Button'
import { GrSearch } from 'react-icons/gr'
import { RiCloseLargeLine } from 'react-icons/ri'

export function SideMenu({ menuIsOpen, onCloseMenu }) {
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

          <a href="/login"> Sair</a>
        </Nav>
      </Menu>
    </Container>
  )
}
