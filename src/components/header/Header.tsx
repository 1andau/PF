import React from 'react';
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
import CV from '../../assets/CV/cv-Sarah.pdf';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaHome />,
  },
  {
    title: 'Project',
    path: '/project',
    icon: <FaIcons.FaUsers />,
  },
    {
    title: 'Skills',
    path: '/skills',
    icon: <FaIcons.FaTasks />,
  },
  {
    title: 'Contacts',
    path: '/contacts',
    icon: <FaIcons.FaTasks />,
  },
];

const Header: React.FunctionComponent = () => {
  const [close, setClose] = React.useState(false);
  const showSidebar = () => setClose(!close);
  const [isActive, setActive] = React.useState(false);

  return (
    <>
      <Container>
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
                <a href="/contacts">Contacts</a>
              </li>
              <li>
                <a href="/skills">skills</a>
              </li>
              <li>
                <a href={CV} download>
                  CV
                </a>
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
          <li>
            <a href={CV} download>
              CV
            </a>
          </li>

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
                  {item.icon}
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
