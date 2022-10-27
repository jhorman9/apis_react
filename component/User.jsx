import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const User = () => {

    const [ user , setUser ] = useState({});

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
        .then((res) => setUser(res.data));
    }, []) //arreglo de dependencia

    //crear la funcion del click
    const nextUser = () =>{
        axios.get('https://randomuser.me/api/')
        .then((res) => setUser(res.data));
    }

    //Usar optional chaining
    return (
        <>
            <div className='Apis'>
                <h1 style={{textAlign:"center"}}>Este es mi componente USER</h1>
                <h2>{user.results?.[0].name.title} {user.results?.[0].name.first} {user.results?.[0].name.last}
                </h2>
                <img src={user.results?.[0].picture.large} alt="" />
                {/*Optional Chaining el usar el ? para evitar un error cuando cargue la pagina*/}
                <p><b>{user.results?.[0].email}</b></p>
                <button onClick={nextUser}><i className="fa-solid fa-shuffle"></i></button>
            </div>
        </>
    );
};

export default User;