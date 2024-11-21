import React, { useContext, useState } from 'react';
import { HabitatContext } from '../../GestioHabi/HabitatContext';

function Habitas() {
  const { habitats, sabiasQue, imagen } = useContext(HabitatContext); // Acceso al contexto
  const [search, setSearch] = useState('');

  const filteredData = !search
    ? habitats
    : habitats.filter((item) =>
        item.especie.toLowerCase().includes(search.toLowerCase()) ||
        item.ubicacion.toLowerCase().includes(search.toLowerCase()) ||
        item.alimentacion.toLowerCase().includes(search.toLowerCase()) ||
        item.vegetacion.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div>
      <center>
        <h1>Hábitats De Las Especies De Los Manatíes</h1>
        <input
          type="text"
          placeholder="Buscar por Especie, Ubicación, Alimentación o Vegetación"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-field"
        />
      </center>
      <br />
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
      <br />
      <section className="card-section mb-4">
        <div className="card-content p-4">
          <h3 className="text-success">Sabías que...</h3>
          <p>{sabiasQue}</p>
        </div>
      </section>
      <center>
        <img
          src={imagen}
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
