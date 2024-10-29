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
