
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import './App.css'



function App() {
    const [count, setCount] = useState(0)


  return (
    <>
      <div className="main-div">
        <div className="sub-div-1">
          <h1 className="titulo_h1">Calcular Ritmo</h1>
          <p className="parrafo">¿Que quieres calcular?</p>
        </div>
        <div className="sub-div-2">
          <div className="sub-div-2--1">
            <h2 className="class-tempo operacion">Bpm</h2>
          <input type="text" id='tempo'/>
          </div>
          <div className="sub-div-2--2">
            <h2 className="class-tiempo operacion">min</h2>
          <input type="text" id='tiempo'/>
          </div>
          <div className="sub-div-2--3">
            <h2 className="class-golpes operacion">beats</h2>
          <input type="text" id='golpes'/>
          </div>
          
          <h2 className="random" contentEditable="true"></h2>


        </div>

      </div>
    </>
  )
}

export default App
