import { useState } from 'react'
import { MdOutlineLogout } from 'react-icons/md'
import { GrSearch } from 'react-icons/gr'
import { PiReceipt } from 'react-icons/pi'
import { List } from '@phosphor-icons/react'

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
} from './styles'
import { Button } from '../Button'
import { Input } from '../Input'
import { SideMenu } from '../../components/SideMenu'
import { drinksData } from '../../Pages/Home/Bebidas'
import { snackData } from '../../Pages/Home/Refeições'
import { dessertData } from '../../Pages/Home/Sobremesa'

export function Navbar({ userDefault }) {
  const { signOut } = useAuth()

  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [ search , setSearch] = useState("");



  function toggleMenu() {
    setMenuIsOpen((prevState) => !prevState)
  }

  const handleSearch = () => {
    const allProducts = [...drinksData, ...snackData, ...dessertData];
    const products = allProducts.filter(product => 
      product.title.toLowerCase().startsWith(search.toLowerCase())
    );
    return(products);
  };


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
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              handleSearch(); // Chama a busca toda vez que o input muda
            }}
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
  )
}  