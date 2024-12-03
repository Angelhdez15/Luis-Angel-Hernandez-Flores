import React, { createContext, useState } from 'react';
import { informacion } from '../Bd/Datos'; // Información inicial

export const HabitatContext = createContext();

export const HabitatProvider = ({ children }) => {
  const [habitats, setHabitats] = useState(informacion);

  // Valores iniciales para "Sabías que..." y la imagen
  const [sabiasQue, setSabiasQue] = useState(
    'Su Importancia Ecologica: al controlar la población de plantas acuáticas, los manatíes ayudan a mantener el equilibrio de los ecosistemas marinos, Cuando se les da tareas específicas los manatíes han demostrado un desempeño igual al de los delfines...'
  );
  const [imagen, setImagen] = useState(
    'https://cdn0.expertoanimal.com/es/posts/2/1/7/caracteristicas_del_manati_25712_0_600.webp'
  );

  return (
    <HabitatContext.Provider
      value={{
        habitats,
        setHabitats,
        sabiasQue,
        setSabiasQue,
        imagen,
        setImagen,
      }}
    >
      {children}
    </HabitatContext.Provider>
  );
};
