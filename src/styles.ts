import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
}

body{
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  background-color: var(--black);
  color: #FFFF;
  background-color: black;

}
  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }


  a{
    text-decoration: none;
    font-weight: 500;
    color: white; 
  }
`;
