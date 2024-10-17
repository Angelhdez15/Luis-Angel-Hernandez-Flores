import React from 'react'
function Formulario(){
    return(
      <form>
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" placeholder='Escribe el nombre'></input>
        <label for="apellidos">Apellidos:</label>
        <input type="text" name="apellidos" placeholder='Escribe tus apellidos'></input>   
      </form>
    )
  }
  export default Formulario
