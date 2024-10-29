import React from 'react';

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
      <h1>Habitad De Las Especies De Los Manatis</h1>
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
    </div>
  );
}

export default Habitas;