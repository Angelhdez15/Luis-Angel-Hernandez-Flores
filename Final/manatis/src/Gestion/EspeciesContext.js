import React, { createContext, useState } from 'react';
import { informacion2 } from '../Bd/Datos'; // Información inicial

export const EspeciesContext = createContext();

export const EspeciesProvider = ({ children }) => {
  const [especies, setEspecies] = useState(informacion2);
  const [sabiasQue, setSabiasQue] = useState('En el siglo XV, las criaturas marinas como las sirenas, krakens y serpientes marinas eran populares en el folclor común, El primer avistamiento registrado de un manatí en Norteamérica fue por Cristóbal Colón en 1492, quien pensó que el manatí que había visto era una sirena, El agrupamiento biológico de los manatíes como sirenios obtiene su nombre de las sirenas mitológicas griegas, un tipo popular de sirenas que atraían a los marineros por medio de canciones..');
  const [imagen, setImagen] = useState(
    'https://t1.ea.ltmcdn.com/es/posts/2/1/7/tipos_de_manaties_25712_1_orig.jpg'
  );

  return (
    <EspeciesContext.Provider
      value={{
        especies,
        setEspecies,
        sabiasQue,
        setSabiasQue,
        imagen,
        setImagen,
      }}
    >
      {children}
    </EspeciesContext.Provider>
  );
};
