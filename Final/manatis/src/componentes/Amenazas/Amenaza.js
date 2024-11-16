import React from 'react'
import manati from './manati.jpg'
import { informacion3 } from '../../Bd/Datos';
// Datos de las especies de manatíes
function Amenaza() {
  return (
    <div>
      <center><h1>Amenazas De Las Especies De Manatis</h1></center>
    <table>
      <thead>
        <tr>
          <th>Amenazas</th>
          <th>Nombre Científico</th>
          <th>Ubicación</th>
        </tr>
      </thead>
      <tbody>
        {informacion3.map(manati => (
          <tr key={manati.nombreCientifico}>
            <td>{manati.Amenaza}</td>
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
          <p> Los manatíes tienen una historia evolutiva fascinante que se remonta a millones de años sus ancestros eran animales terrestres que, con el paso del tiempo, se adaptaron a la vida acuática.</p>
          <p>Curiocidades:</p>
          <p>Los manatíes pueden formar vínculos sociales y reconocer a otros individuos.</p>
        </div>
      </section>
      <center>
  <img 
      src={manati} 
      alt="Manatí" 
      className="img-fluid"
      style={{
        maxWidth: '30%',
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
export default Amenaza
