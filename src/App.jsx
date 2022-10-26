import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import User from '../component/User';
import './App.css'

function App() {
  const [character, setCharacter] = useState({});

  useEffect(()=>{
    axios.get('https://www.breakingbadapi.com/api/character/random')
    .then(res => setCharacter(res.data))
  }, [])

  // 1. Crear un estado
  // 2. UseEffect(con arreglo de dependencias)
  // 3. Ejecutar axios
  // 4. Hacer console.log de la respuesta
  return (
    <>
      <div className="App">
        <h1>{character[0]?.name}</h1>
        <img src={character[0]?.img} alt="" />
      </div>
      <User/>
    </>
  )
}

export default App
