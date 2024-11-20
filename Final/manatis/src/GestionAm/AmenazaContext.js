import React, { createContext, useState } from 'react';
import { informacion3 } from '../Bd/Datos'; // Información inicial

export const AmenazaContext = createContext();

export const AmenazaProvider = ({ children }) => {
  const [manaties, setManaties] = useState(informacion3); // Estado inicial con los datos de amenazas

  return (
    <AmenazaContext.Provider value={{ manaties, setManaties }}>
      {children}
    </AmenazaContext.Provider>
  );
};
