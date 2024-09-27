import { useState, useEffect, useCallback } from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import { GrSearch } from 'react-icons/gr';
import { PiReceipt } from 'react-icons/pi';
import { List } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useSearch } from '../../providers/SearchContext';

import {
  Container,
  ImageLogo,
  AdminLogo,
  Main,
  Logout,
  BtnOrders,
  InputWrapper,
  Menu,
} from './styles';
import { Button } from '../Button';
import { Input } from '../Input';
import { SideMenu } from '../../components/SideMenu';

export function Navbar({ userDefault }) {
  const { updateSearchTerm } = useSearch();
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  // Função de debounce
  const debounce = useCallback((func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  }, []);

  // Atualiza a busca com debounce
  const debouncedSetSearch = useCallback(
    debounce((value) => {
      updateSearchTerm(value);
    }, 300),
    [updateSearchTerm]
  );

  useEffect(() => {
    debouncedSetSearch(search);
  }, [search, debouncedSetSearch]);

  function toggleMenu() {
    setMenuIsOpen((prevState) => !prevState);
  }

  function handleNavigate() {
    navigate('/admin/create');
  }

  function handleNavigateOrders() {
    navigate('#');
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
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </InputWrapper>

        <BtnOrders>
          <Button
            className="btn-orders"
            Icon={userDefault ? () => <PiReceipt size={32} /> : null}
            title={userDefault ? 'Pedidos (0)' : 'Novo Prato'}
            onClick={userDefault ? handleNavigateOrders : handleNavigate}
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
