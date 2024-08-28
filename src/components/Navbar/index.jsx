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
import { useNavigate } from 'react-router-dom'

export function Navbar({ userDefault }) {

  const navigate = useNavigate();

  function handleBack() {
    navigate('/login');
  }
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
          <button className='go-to-back'>
            <MdOutlineLogout
              size={30}
              aria-label="Logout"
              onClick={handleBack}
            />
            
          </button>
        
        </Logout>
      </Main>
    </Container>
  )
}
