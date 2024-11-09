import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
    <header className="text-center mb-4">
      <h1 className="display-4 text-primary">Trichechus manatus</h1>
      <p className="lead">Conoce al increíble manatí, un símbolo de tranquilidad y biodiversidad marina.</p>
    </header>

      <section className="card-section mb-4">
        <div className="card-content p-4">
          <h3 className="text-success">Características del Manatí</h3>
          <p>Son animales corpulentos, que miden entre 3 y 4 metros y pesan de 500 a 1000 kg. Sus cuerpos parecen un torpedo grueso...</p>
          <p>La piel es de unos 5 cm de espesor, con finas arrugas y de coloración gris parda...</p>
        </div>
      </section>
      <center><img src='https://www.zoochat.com/community/media/antillean-manatee-trichechus-manatus.512265/full?d=1607339860'className="small-image"/></center>
      <br></br>
      <section className="card-section mb-4">
        <div className="card-content p-4">
          <h3 className="text-success">Historia del Manatí</h3>
          <p>En México, los manatíes también eran conocidos como tlacamichin, que significa “hombre pez”...</p>
          <p>Estos lentos y curiosos animales duermen bajo el agua durante medio día...</p>
        </div>
      </section>
      <section className="card-section mb-4">
        <div className="card-content p-4">
          <h3 className="text-success">Comunicacion</h3>
          <p>En México, los manatíes también eran conocidos como tlacamichin, que significa “hombre pez”...</p>
          <p>Estos lentos y curiosos animales duermen bajo el agua durante medio día...</p>
        </div>
      </section>
      <section className="card-section mb-4">
        <div className="card-content p-4">
          <h3 className="text-success">Como se Reproduccion</h3>
          <p>En México, los manatíes también eran conocidos como tlacamichin, que significa “hombre pez”...</p>
          <p>Estos lentos y curiosos animales duermen bajo el agua durante medio día...</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
