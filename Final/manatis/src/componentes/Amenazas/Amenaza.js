import React, { useContext, useState } from 'react';
import { AmenazaContext } from '../../GestionAm/AmenazaContext';

const Amenaza = () => {
  const { manaties, sabiasQue, imagen } = useContext(AmenazaContext); // Obtener sabías que y imagen
  const [search, setSearch] = useState('');

  const filteredData = !search
    ? manaties
    : manaties.filter((manati) =>
        manati.Amenaza.toLowerCase().includes(search.toLowerCase()) ||
        manati.nombreCientifico.toLowerCase().includes(search.toLowerCase()) ||
        manati.ubicacion.toLowerCase().includes(search.toLowerCase())
      );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <center><h1>Amenazas De Las Especies De Manatíes</h1></center>
      <div className="input-container">
        <input
          type="text"
          placeholder="Buscar Amenaza, Nombre Científico o Ubicación"
          value={search}
          onChange={handleSearch}
          className="input-field"
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Amenazas</th>
            <th>Nombre Científico</th>
            <th>Ubicación</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((manati, index) => (
            <tr key={index}>
              <td>{manati.Amenaza}</td>
              <td>{manati.nombreCientifico}</td>
              <td>{manati.ubicacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />

      {/* Sección de "Sabías que..." */}
      <section className="card-section mb-4">
        <div className="card-content p-4">
          <h3 className="text-success">Sabías que...</h3>
          <p>{sabiasQue}</p>
        </div>
      </section>

      {/* Imagen del Manatí */}
      <center>
        <img
          src={imagen} // Si no hay imagen personalizada, usa la predeterminada
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
      </center>
    </div>
  );
};

export default Amenaza;
