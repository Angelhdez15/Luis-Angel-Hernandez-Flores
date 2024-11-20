import React, { createContext, useState } from 'react';
import { informacion } from '../Bd/Datos'; // Información inicial

export const HabitatContext = createContext();

export const HabitatProvider = ({ children }) => {
  // Inicializa el estado con los datos existentes
  const [habitats, setHabitats] = useState(informacion);

  return (
    <HabitatContext.Provider value={{ habitats, setHabitats }}>
      {children}
    </HabitatContext.Provider>
  );
};
