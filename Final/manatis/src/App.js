import './App.css';
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Menu from './componentes/Inicio/Menu'
import Rutas from './routes/Rutas';
import { EspeciesProvider } from './Gestion/EspeciesContext';
import { HabitatProvider } from './GestioHabi/HabitatContext';
import { AmenazaProvider } from './GestionAm/AmenazaContext';


 function App() {

  return (
    <EspeciesProvider>
      <HabitatProvider>
        <AmenazaProvider>
    <Router>
    <div className='container-fluid'>
        <Menu/>
        <Rutas/>

    </div>
    </Router>
    </AmenazaProvider>
    </HabitatProvider>
    </EspeciesProvider>
  )
}
export default App
