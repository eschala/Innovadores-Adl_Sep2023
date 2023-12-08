import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const perfiles = [

  {
    nombre: "Samir",
    apellido: "Chalá",
    edad: 23,
    imagen: ""
  },
  {
    nombre: "Yeisson",
    apellido: "Lagarejo",
    edad: 20,
    imagen: ""
  }
]



function App() {


  return (
    <>
      <div className="contenedor-perfiles"></div>
    </>
  )
}

export default App
