import React from 'react'
// Datos de las especies de manatíes
const manaties = [
  { nombreComun: 'Manatí Antillano', nombreCientifico: 'Trichechus manatus', ubicacion: 'Caribe' },
  { nombreComun: 'Manatí Africano', nombreCientifico: 'Trichechus senegalensis', ubicacion: 'África Occidental' },
  { nombreComun: 'Manatí Amazónico', nombreCientifico: 'Trichechus inunguis', ubicacion: 'Amazonía' }
];

function EspeciesM() {
  return (
    <div>
      <center> <h1>Especies De Manatis</h1></center>
    <table>
      <thead>
        <tr>
          <th>Nombre Común</th>
          <th>Nombre Científico</th>
          <th>Ubicación</th>
        </tr>
      </thead>
      <tbody>
        {manaties.map(manati => (
          <tr key={manati.nombreCientifico}>
            <td>{manati.nombreComun}</td>
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
          <p>A pesar de que pueden formar pequeños grupos, los manatíes son principalmente animales solitarios.</p>
          <p>Se comunican a través de una variedad de vocalizaciones, como chillidos, gruñidos y silbidos. Estas vocalizaciones sirven para diversos propósitos, como mantener el contacto con otros manatíes, expresar emociones y alertar sobre peligros Son animales muy curiosos y a menudo se acercan a los barcos y a los humanos..</p>
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
<br></br>
</center> 
    </div>
  );
}
export default EspeciesM;