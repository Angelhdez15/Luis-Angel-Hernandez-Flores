import React, { useState, useEffect } from 'react';
import manati from './manati.jpg';
import { informacion3 } from '../../Bd/Datos';

const Amenaza = () => {
  // Estado para los datos y el término de búsqueda
  const [manaties, setManaties] = useState([]);
  const [search, setSearch] = useState("");

  // Función para cargar los datos (simulando una API, ya que los datos provienen de 'informacion3')
  const loadData = () => {
    setManaties(informacion3);
  };

  // Función para manejar el cambio del término de búsqueda
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filtrado de datos según el término de búsqueda
  const filteredData = !search
    ? manaties
    : manaties.filter((manati) =>
        manati.Amenaza.toLowerCase().includes(search.toLowerCase()) ||
        manati.nombreCientifico.toLowerCase().includes(search.toLowerCase()) ||
        manati.ubicacion.toLowerCase().includes(search.toLowerCase())
      );

  // Usamos useEffect para cargar los datos al inicio
  useEffect(() => {
    loadData();
  }, []);

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
          {filteredData.map((manati) => (
            <tr key={manati.nombreCientifico}>
              <td>{manati.Amenaza}</td>
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
          <p>Los manatíes tienen una historia evolutiva fascinante que se remonta a millones de años, sus ancestros eran animales terrestres que, con el paso del tiempo, se adaptaron a la vida acuática.</p>
          <p>Curiosidades:</p>
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
        <br />
      </center>
    </div>
  );
}

export default Amenaza;
