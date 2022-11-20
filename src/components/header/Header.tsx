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
import { ReactNode } from 'react';
import { SidebarData } from './data';
import { useDispatch } from 'react-redux';
import { setIsMenuOpened } from '../../redux/slice';

export interface LayoutProps {
  children: ReactNode;
}

export const handleDrawer = (target: string) => {
  setTimeout(() => {
    document.querySelector(target)!.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, 150);
};


const Header = () => {
  const dispatch = useDispatch(); 

  const [close, setClose] = React.useState(false);
  const showSidebar = () => setClose(!close);
  
  const [isActive, setActive] = React.useState(false);
  const [scrollY, setScrollY] = useState<number>(0);




  
  const handleDrawer = (target: string) => {
    setTimeout(() => {
      document.querySelector(target)!.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 150);
  };


  return (
    <>
      <Container >
        <Logo src={sticker} />

        <Menu className={isActive ? 'active' : ''}>
          <NavStroke>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>

              <li>
                <a href="/about">About</a>
              </li>

              <li>
                <a href="/contacts">Contacts</a>
              </li>
              <li>
                <a href="/skills">skills</a>
              </li>
      
            </ul>
          </NavStroke>
        </Menu>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive);
          }}></div>
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

export default Header;
