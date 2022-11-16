import styled, { createGlobalStyle } from 'styled-components';

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
  background-color: black;
  color: #FFFF;

}
  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  h4{
    font-size: 4rem;
margin: 20px 20px;
  }

  a{
    text-decoration: none;
    font-weight: 500;
    color: white; 
  }






  
`;



export const MainContainer = styled.div`
font-family: Courier New, monospace;
margin: 1em auto;
max-width: 1000px;
box-shadow: 0 0 5px 0 rgba(82, 71, 71, 0.06);
`



export const DestinationTitle = styled.div`
display: flex;
align-items: center;
margin-top: 100px; 


@media screen and (max-width: 430px) {
  justify-content: center;
}

span {
  display: inline-block;
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 0.33rem;
  letter-spacing: 0.47rem;
  color: var(--color-white);
  text-transform: uppercase;
  filter: opacity(25%);
  margin-right: 1rem;

  @media screen and (max-width: 430px) {
    font-size: 1.6rem;
    line-height: 0.19rem;
    letter-spacing: 0.27rem;
  }

  @media (min-width: 768px) and (max-width: 1180px) {
    font-size: 2rem;
    line-height: 0.24rem;
    letter-spacing: 0.38rem;
  }
}

h1 {
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 0.33rem;
  letter-spacing: 0.47rem;
  color: var(--color-white);
  text-transform: uppercase;

  @media screen and (max-width: 430px) {
    font-size: 1.6rem;
    line-height: 0.19rem;
    letter-spacing: 0.27rem;
  }

  @media (min-width: 768px) and (max-width: 1180px) {
    font-size: 2rem;
    line-height: 0.24rem;
    letter-spacing: 0.38rem;
  }
}



`