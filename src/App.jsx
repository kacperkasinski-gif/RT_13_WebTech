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

  return (
    <>
      <div>
      <h1>{app.name}</h1>

      <p>Wersja: {app.version}</p>

      <p>Autor: {app.author}</p>

      <p>
        Liczba technologii: {app.technologiesCount}
      </p>
      <p></p>
      </div>
    </>
  )
}

export default App
