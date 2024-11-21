import React, { useContext, useState } from 'react';
import { EspeciesContext } from '../../Gestion/EspeciesContext';

function EspeciesM() {
  const { especies, sabiasQue, imagen } = useContext(EspeciesContext); // Acceso al contexto
  const [search, setSearch] = useState('');

  const filteredEspecies = especies.filter(
    (especie) =>
      especie.nombreComun.toLowerCase().includes(search.toLowerCase()) ||
      especie.nombreCientifico.toLowerCase().includes(search.toLowerCase()) ||
      especie.ubicacion.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <center>
        <h1>Especies de Manatíes</h1>
        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-field"
        />
      </center>
      <br />
      <table>
        <thead>
          <tr>
            <th>Nombre Común</th>
            <th>Nombre Científico</th>
            <th>Ubicación</th>
          </tr>
        </thead>
        <tbody>
          {filteredEspecies.map((especie, index) => (
            <tr key={index}>
              <td>{especie.nombreComun}</td>
              <td>{especie.nombreCientifico}</td>
              <td>{especie.ubicacion}</td>
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
            maxWidth: '50%',
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

export default EspeciesM;
