import styled from "styled-components";

//project styles
export const Cards = styled.div`
padding: 15px;
display: flex;
flex-flow: row wrap;
`

export const Card = styled.div`
margin: 15px; 
width: calc((100% / 2) - 30px);
border-radius: 8px;
transition: all 0.2s ease-in-out;
background-color: #1a1b1e;
@media screen and (max-width: 991px) {
  width: calc((100% / 2) - 30px);
}
 
@media screen and (max-width: 767px) {
    width: 100%;
  }

  &:hover {
    .card__inner {
      background-color: #2a2b30;;
      transform: scale(1.05);
      border-radius: 8px;
    }
  }
  .card__inner {
    width: 100%;
    padding: 30px;
    position: relative;
    cursor: pointer;
    background-color: (#eceef1, 30%);
    color: #eceef1;;
    font-size: 1.5em;
    text-transform: uppercase;
    text-align: center;
    transition: all 0.2s ease-in-out;
    
    &:after {
      transition: all 0.3s ease-in-out;
    }


    span{
        color: white;
        font-weight: 800;
        font-size: 20px;
    }
    p{
        font-size: 15px;

    }
  }

`
export const GitIcon = styled.div`
width: 100%;
text-align: right;
display: flex;
justify-content: flex-end;

svg{
    width: 3rem;
    height: 3rem;
    cursor: pointer;
position: relative;
bottom: 20px;
}
`
export const Tags = styled.div`
color: black;
padding: 1em 1em 0 1em;
list-style: none;
margin-left: 15px;
`


//Skills styles
export const SkillCard = styled.div`
margin: 10px; 
width: calc((100% / 3) - 30px);
border-radius: 8px;
transition: all 0.2s ease-in-out;
background-color: #1a1b1e;
height: 150px;
@media screen and (max-width: 991px) {
  width: calc((100% / 3) - 30px);
}


card__inner {
    width: 100%;
    padding: 30px;
    position: relative;
    cursor: pointer;
    
    background-color: (#eceef1, 30%);
    color: #eceef1;;
    font-size: 1.5em;
    text-transform: uppercase;
    text-align: center;
    transition: all 0.2s ease-in-out;
    
    &:after {
      transition: all 0.3s ease-in-out;
    }
  }

@media screen and (max-width: 767px) {
  width: 100%;
}

:hover {
    .skills__inner {
      transform: scale(1.05);
    }
  }
  svg{
      fill: gold; 
  }

`


//styles category 

export const CategoryContainer = styled.div`
padding: 5%;
text-align: center;

  @media screen and (max-width: 430px) {
padding: 2%;
margin: 3% 3%;   

}
ul{
    display: flex;
  }


  label {
    width: 15%;
    display: inline-block;
    margin-bottom: 2em;
    padding: .5em;
    color: hsla(0, 0%, 100%, .5);
    border-bottom: .2em solid rgba(0, 0, 0, .1);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    font-size: 15px;
    transition: 0.3s linear;
    @media screen and (max-width: 430px) {
  margin: 5px;   
  font-size: 8px;
  }

    &.active {
      background-color: #282828;
      color: #fff;
    }

  }

`
export const SkillIcons = styled.img`
width: 100px;
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 20px; 

`

