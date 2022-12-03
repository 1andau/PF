import React, {useState, useEffect} from 'react';
import {
  MenuIconOpen,
  Navbar,
  SidebarMenu,
  MenuIconClose,
  MenuItemLinks,
  MenuItems,
  Menu,
  Container,
  Logo,
  NavStroke,
} from './styled';
import * as FaIcons from 'react-icons/fa';
import sticker from '../../assets/images/space.png';
import { SidebarData } from './data';
import { useDispatch } from 'react-redux';
import { setIsMenuOpened } from '../../redux/slice';

export const Header = () => {
  const dispatch = useDispatch(); 

  const [close, setClose] = React.useState(false);
  const showSidebar = () => setClose(!close);

  const [isActive] = React.useState(false);

  

  return (
    <>
      <Container           
      onChange={() => dispatch(setIsMenuOpened())}
>
        <Logo src={sticker} />

        <Menu className={isActive ? 'active' : ''}>
          <NavStroke>

<ul>
  {
    SidebarData.map((value) => (
      <li>
      <a href={value.path}
      >{value.title}</a>
    </li> 
    ))
  }
</ul>

          </NavStroke>
        </Menu>

        <Navbar>
          <MenuIconOpen to="/home" onClick={showSidebar}>
            <FaIcons.FaBars />
          </MenuIconOpen>
        </Navbar>

        <SidebarMenu close={close}>
          <MenuIconClose to="/home" onClick={showSidebar}>
            <FaIcons.FaTimes />
          </MenuIconClose>

          {SidebarData.map((item, index) => {

            return (
              <MenuItems key={index}>
                <MenuItemLinks to={item.path}>
                  <span style={{ marginLeft: '16px' }}>{item.title}</span>
                </MenuItemLinks>
              </MenuItems>
            );
          })}
        </SidebarMenu>
      </Container>
    </>
  );
};

