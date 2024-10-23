import React, { useState } from 'react'

 function Estados() {
    const [valor,setvalor]=useState(5)
    const agregarvalor=()=>{
       setvalor(valor+1)
    }
  return (
    <div>Estados
    <h1>Agregar valor: {valor}</h1>
    <button onClick={agregarvalor}>Incrementar</button>
    </div>
  )
}

export default Estados