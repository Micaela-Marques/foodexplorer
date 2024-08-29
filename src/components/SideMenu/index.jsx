import { Container, Title, Header, Nav } from './style'
import { Input } from '../Input'
import { Button } from '../Button'
import { GrSearch } from 'react-icons/gr'
import { RiCloseLargeLine } from "react-icons/ri";

export function SideMenu({ menuIsOpen, onCloseMenu }) {
  return (
    <Container data-menu-is-open={menuIsOpen}>
      <div className="SideMenu">
        <Header>
          {menuIsOpen && (
            <Button
              Icon={RiCloseLargeLine}

              className="button-close"
              onClick={onCloseMenu}
            ></Button>
          )}
          <Title className="title">Menu</Title>
        </Header>

        <Nav>
          <Input
            placeholder="Busque por pratos ou ingredientes"
            Icon={() => <GrSearch />}
          />

          <a href="/login"> Sair</a>
        </Nav>
      </div>
    </Container>
  )
}
