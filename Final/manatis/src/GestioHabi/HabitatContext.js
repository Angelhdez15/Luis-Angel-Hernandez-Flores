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
    'https://t1.ea.ltmcdn.com/es/posts/2/1/7/tipos_de_manaties_25712_1_orig.jpg'
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
