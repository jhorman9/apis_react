import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';
import User from '../component/User';
import './App.css'
import Emojis from '../component/Emojis';

function App() {
  const [character, setCharacter] = useState({});

  useEffect(()=>{
    axios.get('https://www.breakingbadapi.com/api/character/random')
    .then(res => setCharacter(res.data))
  }, [])

  const nextCharacter = () =>{ //Volvemos a meter a la api dentro para que siga dando una random
    axios.get('https://www.breakingbadapi.com/api/character/random')
    .then(res => setCharacter(res.data))
  }
  // 1. Crear un estado
  // 2. UseEffect(con arreglo de dependencias)
  // 3. Ejecutar axios
  // 4. Hacer console.log de la respuesta
  return (
    <>
      <div className="App">
        <h1>Este es mi componente APP</h1>
        <h2>{character[0]?.name}</h2>
        <img src={character[0]?.img} alt="" />
        <button onClick={nextCharacter}><i className="fa-solid fa-shuffle"></i></button>
      </div>
      <User/>
      <Emojis/>
    </>
  )
}

export default App
