import React from 'react'
import { MainContainer } from '../../GlobalStyles'
import { Home } from 'home/Home'
import { Skills } from '../skills/Skills'
import { Portfolio } from '../Project/Project'

const Main = () => {
  return (

    
    <>
<Home/>

<MainContainer>
<Portfolio/>
<Skills/>

</MainContainer>


    </>
  )
}

export default Main