import React, { useContext, useState } from 'react';
import { EspeciesContext } from './EspeciesContext';

function EspeciesM() {
  const { especies } = useContext(EspeciesContext); // Accede al contexto
  const [search, setSearch] = useState('');

  const filteredEspecies = especies.filter(
    (especie) =>
      especie.nombreComun.toLowerCase().includes(search.toLowerCase()) ||
      especie.nombreCientifico.toLowerCase().includes(search.toLowerCase()) ||
      especie.ubicacion.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
   <center><h1>Especies de Manatíes</h1>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input-field"
      /></center> 
      <br></br>
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
      <br></br>
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
        /></center>
    </div>
  );
}

export default EspeciesM;
