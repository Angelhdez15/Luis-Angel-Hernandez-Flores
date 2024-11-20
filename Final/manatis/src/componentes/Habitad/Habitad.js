import React, { useContext, useState } from 'react';
import { HabitatContext } from '../../GestioHabi/HabitatContext';
import bebe from './bebe.jpeg';

function Habitas() {
  const { habitats } = useContext(HabitatContext); // Accede al contexto
  const [search, setSearch] = useState('');

  const filteredData = !search
    ? habitats
    : habitats.filter((item) =>
        item.especie.toLowerCase().includes(search.toLowerCase()) ||
        item.ubicacion.toLowerCase().includes(search.toLowerCase()) ||
        item.alimentacion.toLowerCase().includes(search.toLowerCase()) ||
        item.vegetacion.toLowerCase().includes(search.toLowerCase())
      );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <center><h1>Hábitats De Las Especies De Los Manatíes</h1></center>
      <div className="input-container">
        <input
          type="text"
          placeholder="Buscar por Especie, Ubicación, Alimentación o Vegetación"
          value={search}
          onChange={handleSearch}
          className="input-field"
        />
      </div>
      
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
          {filteredData.map((item) => (
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
          <h3 className="text-success">Sabías que...</h3>
          <p>La gestación de una cría de manatí dura aproximadamente 13 meses.</p>
          <p>Las crías nacen en el agua y pesan alrededor de 30 kilogramos, y las madres amamantan a sus crías durante varios meses.</p>
          <p>Aunque su visión no es su sentido más desarrollado, pueden distinguir formas y movimientos. Las vibrisas (bigotes) les ayudan a percibir el entorno y a encontrar alimento.</p>
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
      </center>
    </div>
  );
}

export default Habitas;
