import React, { createContext, useState } from 'react';
import { informacion3 } from '../Bd/Datos'; // Información inicial

export const AmenazaContext = createContext();

export const AmenazaProvider = ({ children }) => {
  const [manaties, setManaties] = useState(informacion3); // Estado inicial con los datos de amenazas
  const [sabiasQue, setSabiasQue] = useState("Aunque los manatíes fueron recientemente eliminados de la lista de especies en peligro de extinción, actualmente se consideran amenazados y están muriendo en grandes números debido a la falta de nutrientes causada por la producción industrial de animales de granja. Cuando la escorrentía agropecuaria llega al océano, asiste en el desarrollo de brotes de algas tóxicas que destruyen la principal fuente de alimento de los manatíes: los pastos marinos.."); // Texto de "Sabías que..."
  const [imagen, setImagen] = useState('https://i0.wp.com/laprensafl.com/wp-content/uploads/2021/03/Manatie-tiny.jpg?resize=1024%2C570&ssl=1'); // URL de la imagen

  return (
    <AmenazaContext.Provider value={{ manaties, setManaties, sabiasQue, setSabiasQue, imagen, setImagen }}>
      {children}
    </AmenazaContext.Provider>
  );
};
