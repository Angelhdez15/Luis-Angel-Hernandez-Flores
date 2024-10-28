/* //import logo from './logo.svg';
import './App.css';
import Otro from './Otro';
import Formulario from './Fomulariocss';
import Formularioboot from './componentes/Fomularioboot';
import Profile from './Props';
function Mensaje(){
  return(
  <h1>esta es mi funcion</h1>
)
}

function App() {
  return (
    <>
    <div className="row">
    <div className="col-4">
      <h1>Columnas a la izquierda</h1>
    </div>
    <div className="col-4">
      <h1>Centro</h1>
    </div>
    <div className="col-4">
      <h1>Derecha</h1>
    </div>
    </div>
    <div className="App">
      <h1>Hola</h1>

      <Mensaje/>
      <Otro />
      <Formulario/>
      <div className="container-fluid p-3 ">
        <Formularioboot />
        <Profile/>
      </div>
    </div>
    </>
  );
}

export default App;
 */

/* import Propiedades from "./componentes/Propiedades"
function App (){
  const variable1=5
  const variable2=8
  return(
    <>
    <Propiedades variable1={variable1} variable2={variable2}nombre="dany" varbol={true}/>
    <Propiedades variable1={variable1} variable2={variable2} nombre="luis" varbol={false}/>
    </>
  )
}
export default App */
import './App.css';
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Menu from './componentes/Inicio/Menu'
import Rutas from './routes/Rutas';


 function App() {

  return (
    <Router>
    <div className='container-fluid'>
        <Menu/>
        <Rutas/>

    </div>
    </Router>
  )
}
export default App
