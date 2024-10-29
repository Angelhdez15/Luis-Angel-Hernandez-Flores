import React from 'react'
// Datos de las especies de manatíes
const manaties = [
  { Amenaza: 'Colisiones con embarcaciones', nombreCientifico: 'Manatí Antillano (Trichechus manatus)', ubicacion: 'Caribe' },
  { Amenaza: 'Caza furtiva y captura accidental', nombreCientifico: 'Manatí Africano (Trichechus senegalensis)', ubicacion: 'África Occidental' },
  { Amenaza: 'Crecimiento poblacional humano', nombreCientifico: 'Manatí Amazónico (Trichechus inunguis)', ubicacion: 'Amazonía' }
  
];

function Amenaza() {
  return (
    <div>
      <h1>Amenazas De Las Especies De Manatis</h1>
    <table>
      <thead>
        <tr>
          <th>Amenazas</th>
          <th>Nombre Científico</th>
          <th>Ubicación</th>
        </tr>
      </thead>
      <tbody>
        {manaties.map(manati => (
          <tr key={manati.nombreCientifico}>
            <td>{manati.Amenaza}</td>
            <td>{manati.nombreCientifico}</td>
            <td>{manati.ubicacion}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
export default Amenaza
