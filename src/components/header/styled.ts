import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: black;
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  cursor: pointer; 
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1; 

  a.button{
    color: aqua;
    text-decoration: none;
font-weight; bold; 
  }
  &:hover {
    color: aqua;

  }

  @media (max-width: 550px) {
    display: none;
  }
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: start;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 1.5rem;
  margin-left: 2rem;
  color: #ffffff;
`;

export const SidebarMenu = styled.div<{ close: boolean }>`
  right: ${({ close }) => (close ? '0' : '-100%')};
  width: 250px;
  height: 100vh;
  background-color: #000080;
  position: fixed;
  top: 0;
  transition: 0.6s;
`;

export const MenuIconClose = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: #ffffff;
`;

export const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 90px;
  padding: 1rem 0 1.25rem;
`;

export const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;

  &:hover {
    background-color: #ffffff;
    color: #000080;
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    margin: 0 2rem;
  }
`;

export const NavStroke = styled.nav`

 ul li{
  list-style: none;
  text-align: center;
  display: inline-block; 
}


 ul li a {
  display: block;
  padding: 12px;
  text-decoration: none;
  color: #fff;
  font-size: 15px;
  font-family: "Andale Mono, monospace";
  text-transform: uppercase;
  margin: 0 10px;
  :hover{
      color: aqua;
  }
}
 ul li a:after,
 ul li a:before {
  transition: all .5s;
}

 ul li a,
 ul li a {
  position: relative;
}
 ul li a:after,
 ul li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background: aqua;
  height: 1px;
}
 ul li a:hover:after {
  width: 100%;
}

`

