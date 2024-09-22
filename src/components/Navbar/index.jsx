import { useState } from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import { GrSearch } from 'react-icons/gr';
import { PiReceipt } from 'react-icons/pi';
import { List } from '@phosphor-icons/react';

import { useAuth } from '../../hooks/auth'

import {
  Container,
  ImageLogo,
  AdminLogo,
  Main,
  Logout,
  BtnOrders,
  InputWrapper,
  Menu
} from './styles';
import { Button } from '../Button';
import { Input } from '../Input';
import { SideMenu } from '../../components/SideMenu';

export function Navbar({ userDefault }) {
  const {  signOut } = useAuth();

  const [menuIsOpen, setMenuIsOpen] = useState(false); 


  function toggleMenu() {
    setMenuIsOpen(prevState => !prevState); 
  }

  return (
    <Container>
      <SideMenu
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Main>
        <Menu onClick={toggleMenu}> 
          <List />
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
          <button className="go-to-back">
            <MdOutlineLogout
              size={30}
              aria-label="Logout"
              onClick={signOut}
            />
          </button>
        </Logout>
      </Main>
    </Container>
  );
}
