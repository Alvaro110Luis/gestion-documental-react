import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>Organiza, clasifica, accede, y haz seguimiento</p>
        <h1><span className='logo'>Mi</span> Docs</h1>
      </div>

    </>
  )
}

export default App
