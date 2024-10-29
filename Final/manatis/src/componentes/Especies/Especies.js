import React from 'react'
// Datos de las especies de manatíes
const manaties = [
  { nombreComun: 'Manatí Antillano', nombreCientifico: 'Trichechus manatus', ubicacion: 'Caribe' },
  { nombreComun: 'Manatí Africano', nombreCientifico: 'Trichechus senegalensis', ubicacion: 'África Occidental' },
  { nombreComun: 'Manatí Amazónico', nombreCientifico: 'Trichechus inunguis', ubicacion: 'Amazonía' }
];

function EspeciesM() {
  return (
    <div>
      <h1>Especies De Manatis</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre Común</th>
          <th>Nombre Científico</th>
          <th>Ubicación</th>
        </tr>
      </thead>
      <tbody>
        {manaties.map(manati => (
          <tr key={manati.nombreCientifico}>
            <td>{manati.nombreComun}</td>
            <td>{manati.nombreCientifico}</td>
            <td>{manati.ubicacion}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default EspeciesM;