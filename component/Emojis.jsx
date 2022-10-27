import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect} from 'react';

const Emojis = () => {

    const [ emoji, setEmoji ] = useState({});

    useEffect(() => {
        axios
          .get("https://api.emojisworld.fr/v1/random?limit=1") // tener en cuenta que existe un endpoint y un query
          //En este caso limit es un query y random es un endpoint en orden
          // de las apis primero va el endpoint y luego el query son dos cosas
          //distintas la query es opcional pero aveces necesaria
          //Las querys son para limitar o ordenar ciertos datos
          .then((res) => setEmoji(res.data.results[0]));
      }, []);

    console.log(emoji);

      const nextEmoji = () =>{
        axios
        .get("https://api.emojisworld.fr/v1/random?limit=1")
          .then((res) => setEmoji(res.data.results[0]));
      }

    return (
        <div className='emojis'>
            <h1>Este es mi componente EMOJI</h1>
            <h1 style={{color:"white"}}>{emoji.name}</h1>
            <div style={{ fontSize: "60px",  textAlign:"center"}}>{emoji.emoji}</div>
            <button onClick={nextEmoji}><i className="fa-solid fa-shuffle"></i></button>
        </div>
    );
};

export default Emojis;

//Link de la API: https://github.com/abourtnik/emojis-world