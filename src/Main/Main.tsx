import React from 'react'
import { MainContainer } from '../GlobalStyles'
import { Home } from 'home/Home'
import { Skills } from '../pages/skills/Skills'
import { Portfolio } from '../pages/Project/Project'
import About from 'pages/about/About'
import { Contact } from 'pages/contact/ContactForm'

const Main = () => {
  return (
    <>
<Home/>
<Portfolio/>
<About/>
<Skills/>
<Contact/>


    </>
  )
}

export default Main