import { MdOutlineLogout } from 'react-icons/md'
import { GrSearch } from 'react-icons/gr'
import { PiReceipt } from 'react-icons/pi'
import {
  Container,
  ImageLogo,
  AdminLogo,
  Main,
  Logout,
  BtnOrders,
  InputWrapper,
  Menu
} from './styles'
import { Button } from '../Button'
import { Input } from '../Input'
import { IoMenu } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export function Navbar({ userDefault }) {
  return (
    <Container>
      <Main>
        <Menu>
          <IoMenu
            size={30}
            aria-label="Menu"
          />
        </Menu>

        {userDefault ? <ImageLogo /> : <AdminLogo />}

        <InputWrapper>
          <Input
            className="input-search"
            type="text"
            placeholder="Busque por pratos ou ingredientes"
            Icon={() => <GrSearch />}
          />
        </InputWrapper>

        <BtnOrders>
          <Button
            className="btn-orders"
            Icon={userDefault && (() => <PiReceipt size={32} />)}
            title={userDefault ? 'Pedidos (0)' : 'Novo Prato'}
            type="button"
          />
        </BtnOrders>

        <Logout>
          <Link to="/signIn">
            <MdOutlineLogout
              size={30}
              aria-label="Logout"
            />
          </Link>
        </Logout>
      </Main>
    </Container>
  )
}
