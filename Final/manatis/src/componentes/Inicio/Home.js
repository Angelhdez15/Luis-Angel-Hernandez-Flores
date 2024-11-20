import React, { useState } from 'react';
import manati from './manati.jpg';
import repro from './repro.mp4';
function Home() {
  const [search, setSearch] = useState(''); // Estado para el valor de búsqueda

  // Función para manejar el cambio en el campo de búsqueda
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Función para resaltar las coincidencias en el texto
  const Text = (text) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, 'gi'); // Expresión regular para encontrar las coincidencias
    const parts = text.split(regex); // Dividimos el texto en partes
    return parts.map((part, index) =>
      part.toLowerCase() === search.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="container mt-5">
      <div className="input-container">
      <input
        type="text"
        placeholder="Resaltar palabras claves"
        value={search}
        onChange={handleSearchChange}
        className="input-field"
      />
    </div>

      <header className="text-center mb-4">
        <h1 className="display-4 text-primary">Trichechus manatus</h1>
        <p className="lead">Conoce al increíble manatí, un símbolo de tranquilidad y biodiversidad marina.</p>
      </header>
      <center>
        <img
          src={manati}
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
        <br />
      </center>

      {/* Sección de Características del Manatí */}
      <section className="card-section mb-4">
        <div className="card-content p-4">
          <h3 className="text-success">Características del Manatí</h3>
          <p>{Text('Los manatíes tienen un cuerpo grande y redondeado, ideal para flotar en aguas poco profundas....')}</p>
          <p>{Text('La piel: Es de unos 5 cm de espesor, con finas arrugas y de coloración gris parda. Piel gruesa, su piel es gruesa y áspera, lo que los protege de las rozaduras con objetos submarinos....')}</p>
          <p>{Text('Aletas: Poseen dos aletas pectorales pequeñas y una aleta caudal grande y aplanada, similar a la de una foca.')}</p>
          <p>{Text('Hocico: Su hocico es ancho y flexible, perfecto para arrancar la vegetación de la que se alimentan.')}</p>
          <p>{Text('Tamaño: Pueden alcanzar los 3 metros de longitud y pesar hasta 600 kilogramos.')}</p>
        </div>
      </section>

      <center>
        <img
          src="https://th.bing.com/th/id/R.995cae394438e192e03daca126adb273?rik=7Kab2m527Xp83g&riu=http%3a%2f%2fwww.gob.mx%2fcms%2fuploads%2farticle%2fmain_image%2f24531%2fbanner-infografia_manati-2016.jpg&ehk=Hw8hyk%2bH%2bQpOT0h3FNFYupnjOb702Ze2J1ea%2fZ3BsW4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
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
        <br />
      </center>

      {/* Sección de Historia del Manatí */}
      <section className="card-section mb-4">
        <div className="card-content p-4">
          <h3 className="text-success">Historia del Manatí</h3>
          <p>{Text('Los manatíes, junto con los dugongos, pertenecen al orden Sirenia. Sus ancestros más remotos eran mamíferos terrestres que, con el paso del tiempo, se adaptaron a la vida acuática.')}</p>
          <p>{Text('Estas criaturas evolucionaron para pasar más tiempo en el agua, desarrollando características como aletas en lugar de patas, un cuerpo hidrodinámico y una gruesa capa de grasa para aislarse del frío.')}</p>
          <p>{Text('Los fósiles de manatíes han proporcionado valiosa información sobre su evolución. Se han encontrado restos de especies antiguas que muestran cómo estos animales cambiaron a lo largo de millones de años.')}</p>
          <p>{Text('Desafortunadamente, muchas especies de manatíes se extinguieron debido a cambios climáticos, cambios en el nivel del mar y la caza por parte de humanos.')}</p>
        </div>
      </section>

      <center>
        <img
          src="https://image.slidesharecdn.com/manati-presentacin-160709150507/95/los-manaties-6-638.jpg?cb=1468077264"
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
        <br />
      </center>

      {/* Sección de Reproducción */}
      <section className="card-section mb-4">
        <div className="card-content p-4">
          <h3 className="text-success">Reproducción del Manatí</h3>
          <p>{Text('Los manatíes alcanzan la madurez sexual entre los 5 y 9 años de edad El apareamiento suele ocurrir en aguas poco profundas y cálidas. Los machos pueden ser bastante activos durante la época de reproducción, compitiendo por las hembras.')}</p>
          <p>{Text('Después del apareamiento, la hembra lleva a su cría en el vientre durante aproximadamente 12-13 meses, Este período de gestación es uno de los más largos entre los mamíferos marinos La cría nace bajo el agua y suele pesar alrededor de 30 kilogramos. La madre ayuda al recién nacido a subir a la superficie para tomar su primera respiración.')}</p>
          <p>{Text('La cría nace bajo el agua y suele pesar alrededor de 30 kilogramos, La madre ayuda al recién nacido a subir a la superficie para tomar su primera respiración Las madres amamantan a sus crías durante varios meses. La leche de manatí es muy rica en nutrientes y proporciona todo lo que la cría necesita para crecer.')}</p>
        </div>
      </section>

      <center>
        <div>
          <video width="300" controls>
            <source src={repro} alt="Manatí" />
          </video>
        </div>
      </center>
    </div>
  );
}

export default Home;
