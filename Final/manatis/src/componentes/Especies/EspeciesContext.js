import React, { createContext, useState } from 'react';
import { informacion2 } from '../../Bd/Datos'; // Información inicial

export const EspeciesContext = createContext();

export const EspeciesProvider = ({ children }) => {
  // Inicializa el estado con los datos existentes
  const [especies, setEspecies] = useState(informacion2);

  return (
    <EspeciesContext.Provider value={{ especies, setEspecies }}>
      {children}
    </EspeciesContext.Provider>
  );
};
