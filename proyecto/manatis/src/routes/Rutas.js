import React from 'react';
import {Routes,Route} from "react-router-dom";

//Rutas absolutas
import ViewCalificaciones from '../componentes/Calificaciones/ViewCalificaciones';
import Home from '../componentes/Inicio/Home';

function Rutas() {
  return (
    <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/Calificaciones' element={<ViewCalificaciones/>}/>
    </Routes>
  )
}

export default Rutas