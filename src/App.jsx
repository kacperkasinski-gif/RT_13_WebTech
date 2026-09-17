import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header3 from './Header3'
import HeaderS from './components/HeaderS'
import FooterS from './components/FooterS'
import TechnologyS  from './components/TechnologyS'
import StudentDane from './components/Student'
import Infobox from './components/InfoBox'
import Navigation from './components/Navigation'

function App() {

  function Header(){
     return(
       <div>
         <h1>WebTech</h1>
       </div>
     ) 
   }
  function Header2(){
    return <h6>numer5</h6>
  }
  function Footer(){
    return(
      <footer>
        <p>preojekt React</p>
      </footer>
    )
  }
  function Technologia(){
    return(
      <div>
        <h3>Panowie</h3>
        <p>mamy to</p>
      </div>
    )
  }

  return (
    <>
    <HeaderS/>
    <HeaderS/>
    <TechnologyS/>
    <StudentDane/>
    <Navigation/>
    <Infobox/>
    <FooterS/>
    <FooterS/>
    


    </>
  )
}


export default App
