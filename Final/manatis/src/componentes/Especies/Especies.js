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
      <center> <h1>Especies De Manatis</h1></center>
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
    <br></br>
    <section className="card-section mb-4">
        <div className="card-content p-4">
          <h3 className="text-success">Sabias que...</h3>
          <p>En México, los manatíes también eran conocidos como tlacamichin, que significa “hombre pez”...</p>
          <p>Estos lentos y curiosos animales duermen bajo el agua durante medio día...</p>
        </div>
      </section>
    </div>
  );
}
 
export default EspeciesM;