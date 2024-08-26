import { useState } from 'react';
import React from 'react';
import './App.css';

type Mensaje = {
  text: String;
  sender: 'ai'| 'user'
}

function App() {
  const[ mensaje,setMensaje]= useState<Mensaje[]>([
    {
      text: "Mensaje de ejemplo",
      sender: "ai"
    },
    {
      text: "Mensaje de ejemplo",
      sender: "user"
    }
  ]);
  return (
    <div className="App">
      <h1>Soporte IA</h1>
      <p className='message ai'>¿Problemas con algun dispositivo?</p>
      <p className='message user'>¿No puede ingresar a una carpeta?</p>
      <p className='message ai'>Puede realizar aca su consulta y se le solucionara</p>
      <p className='message user'>En caso de no tener solucion, contacte con el equipo de Inovacion</p>
    <form className='input-form'>
      <input type="text"  placeholder='Ingrese su problema'></input>
      <input type="submit"  placeholder='Enviar'></input>
    </form>
    </div>
    
  );
}

export default App;
