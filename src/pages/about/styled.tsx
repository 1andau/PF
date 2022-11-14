import styled from "styled-components";


export const Education = styled.div`
width: min(700px, 100vw);
margin-top: 50px;

.education__heading{
  padding-inline-start: 4rem;
  h4{
    font-size: 4rem;
    margin-block: .5rem;
  }
}
.education__content{
  position: relative;
  padding: 1rem 1rem 1rem 4rem;
  cursor: pointer;
  transition: background .3s ease-in-out;
  
  h5{
    color: rgba(255, 255, 255, 0.9);
    font-size: 2rem;
    margin-block: 0;
  }
  
  p{
    color: rgba(255, 255, 255, 0.6);
    font-size: 15px;
    margin-block-start: .5rem;
    margin-block-end: 0;
  }
  
  .year{
    position: absolute;
    content: var(--year);
    width: 3rem;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .7rem;
    font-weight: bold;
    color: black;
    border-radius: 50%;
    background-color: aqua;
    box-shadow: inset 0 0 0 1px hsl(0deg 0% 100%);
    border: 1px solid aqua;
    left:6px;
    top: .74rem;
  }
}

    
.education__content:hover{
  background-color: hsl(0deg 0% 90% / 48%);
  border-radius: .25rem;
}

.education__content:not(:last-child):before{
  position: absolute;
  content: "";
  width: 4px;
  background-color: hsl(0deg 0% 87%);
  left: calc(2rem - 2px);
  top: 2.74rem;
  bottom: -.74rem;
  z-index: -1;
}



`