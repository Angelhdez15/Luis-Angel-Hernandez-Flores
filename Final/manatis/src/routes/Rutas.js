import React from 'react';
import {Routes,Route} from "react-router-dom";

//Rutas absolutas

import Home from '../componentes/Inicio/Home';
import EspeciesM from '../componentes/Especies/Especies';
import Habitas from '../componentes/Habitad/Habitad';
import Amenaza from '../componentes/Amenazas/Amenaza';
import Gestion from '../Gestion/Especies';
import GestionEs from '../Gestion/Especies';

function Rutas() {
  return (
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Especies' element={<EspeciesM/>}/>
         <Route path='/Habitad' element={<Habitas/>}/>
         <Route path='/Amenazas' element={<Amenaza/>}/>
         <Route path='/Gestion' element={<GestionEs/>}/>
    </Routes>
  )
}

export default Rutas