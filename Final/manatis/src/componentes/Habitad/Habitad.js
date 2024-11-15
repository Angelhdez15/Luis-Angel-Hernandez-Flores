import React from 'react';
import bebe from './bebe.jpeg'
function Habitas() {
  const data = [
    {
      especie: 'Manatí antillano o del Caribe (Trichechus manatus)',
      ubicacion: 'Caribe, incluyendo México, Belice, Colombia y Brasil',
      alimentacion: 'Herbívoro: pastos marinos, hojas de manglares, algas',
      vegetacion: 'Pastos marinos (Thalassia testudinum, Syringodium filiforme), manglares (Rhizophora mangle, Avicennia germinans), algas marinas',
    },
    {
      especie: 'Manatí amazónico (Trichechus inunguis)',
      ubicacion: 'Cuenca del Amazonas',
      alimentacion: 'Herbívoro: plantas acuáticas, raíces, frutos caídos',
      vegetacion: 'Plantas acuáticas de río (Victoria amazonica, Eichhornia crassipes), raíces de manglares',
    },
    {
      especie: 'Manatí africano occidental (Trichechus senegalensis)',
      ubicacion: 'África occidental',
      alimentacion: 'Herbívoro: plantas acuáticas, pastos marinos',
      vegetacion: 'Plantas acuáticas de río, pastos marinos costeros',
    },
  ];

  return (
    <div>
     <center><h1>Habitad De Las Especies De Los Manatis</h1></center> 
    <table>
      <thead>
        <tr>
          <th>Especie</th>
          <th>Ubicación</th>
          <th>Alimentación</th>
          <th>Vegetación predominante</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.especie}>
            <td>{item.especie}</td>
            <td>{item.ubicacion}</td>
            <td>{item.alimentacion}</td>
            <td>{item.vegetacion}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <br></br>
    <section className="card-section mb-4">
        <div className="card-content p-4">
          <h3 className="text-success">Sabias que...</h3>
          <p>La gestación de una cría de manatí dura aproximadamente 13 meses.</p>
          <p>Las crías nacen en el agua y pesan alrededor de 30 kilogramos, la lactancia de Las madres amamantan a sus crías durante varios meses.</p>
          <p>Aunque su visión no es su sentido más desarrollado, pueden distinguir formas y movimientos, las vibrisas, o bigotes, les ayudan a percibir el entorno y a encontrar alimento.</p>
        </div>
      </section>
      <center>
  <img 
      src={bebe} 
      alt="Manatí" 
      className="img-fluid"
      style={{
        maxWidth: '40%',
        height: 'auto',
        display: 'block',
        borderRadius: '15px',
        transition: 'transform 0.3s ease-in-out',
      }}
    />
<br></br>
</center> 
    </div>
  );
}

export default Habitas;