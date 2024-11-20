import React, { useContext, useState, useEffect } from 'react';
import { AmenazaContext } from '../../GestionAm/AmenazaContext';
import manati from './manati.jpg';

const Amenaza = () => {
  const { manaties } = useContext(AmenazaContext); // Accede al contexto
  const [search, setSearch] = useState("");

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

  useEffect(() => {
    // Aquí puedes cargar datos si fuera necesario
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
          {filteredData.map((manati, index) => (
            <tr key={index}>
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
      </center>
    </div>
  );
}

export default Amenaza;
