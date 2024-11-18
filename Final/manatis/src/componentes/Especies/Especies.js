import React, { useState } from 'react';
import { informacion2 } from '../../Bd/Datos';

function EspeciesM() {
  // Estado para el término de búsqueda y los datos filtrados
  const [search, setSearch] = useState('');

  // Filtrado de los datos según el término de búsqueda
  const filteredData = !search
    ? informacion2
    : informacion2.filter((manati) =>
        manati.nombreComun.toLowerCase().includes(search.toLowerCase()) ||
        manati.nombreCientifico.toLowerCase().includes(search.toLowerCase()) ||
        manati.ubicacion.toLowerCase().includes(search.toLowerCase())
      );

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <center> <h1>Especies De Manatíes</h1></center>
      
      <div className="input-container">
      <input
        type="text"
        placeholder="Buscar por Nombre Común, Nombre Científico o Ubicación"
        value={search}
        onChange={handleSearch}
        className="input-field"
      />
    </div>

      
      <table>
        <thead>
          <tr>
            <th>Nombre Común</th>
            <th>Nombre Científico</th>
            <th>Ubicación</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((manati) => (
            <tr key={manati.nombreCientifico}>
              <td>{manati.nombreComun}</td>
              <td>{manati.nombreCientifico}</td>
              <td>{manati.ubicacion}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <section className="card-section mb-4">
        <div className="card-content p-4">
          <h3 className="text-success">Sabías que...</h3>
          <p>A pesar de que pueden formar pequeños grupos, los manatíes son principalmente animales solitarios.</p>
          <p>Se comunican a través de una variedad de vocalizaciones, como chillidos, gruñidos y silbidos. Estas vocalizaciones sirven para diversos propósitos, como mantener el contacto con otros manatíes, expresar emociones y alertar sobre peligros. Son animales muy curiosos y a menudo se acercan a los barcos y a los humanos.</p>
        </div>
      </section>

      <center>
        <img
          src="https://t1.ea.ltmcdn.com/es/posts/2/1/7/tipos_de_manaties_25712_1_orig.jpg"
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
        <br />
      </center>
    </div>
  );
}

export default EspeciesM;
