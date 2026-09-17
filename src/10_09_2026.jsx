import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const technology = {
  name: "React",
  category: "Frontend",
  hours: 30,
  active: true
};
const student = {
  name: "...",
  surname: "...",
  className: "4P",
  specialization: "technik programista"
};
  const [count, setCount] = useState(0)

  function header(){
    return(
      <header>
        <h1>WebTech</h1>
      </header>
    )

    
  }
  return (
    <>

    </>
  )
}

export default App
