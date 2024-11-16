import React from 'react';
import bebe from './bebe.jpeg'
import { informacion } from '../../Bd/Datos';
function Habitas() {
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
        {informacion.map((item) => (
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