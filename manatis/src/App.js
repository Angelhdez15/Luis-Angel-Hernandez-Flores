//import logo from './logo.svg';
import './App.css';
import Otro from './Otro';
import Formulario from './Fomulariocss';
import Formularioboot from './componentes/Fomularioboot';
function Mensaje(){
  return(
  <h1>esta es mi funcion</h1>
)
}

function App() {
  return (
    <>
    <div className="row">
    <div className="col-4">
      <h1>Columnas a la izquierda</h1>
    </div>
    <div className="col-4">
      <h1>Centro</h1>
    </div>
    <div className="col-4">
      <h1>Derecha</h1>
    </div>
    </div>
    <div className="App">
      <h1>Hola</h1>
      <Mensaje/>
      <Otro />
      <Formulario/>
      <div className="container-fluid p-3 ">
        <Formularioboot />
      </div>
    </div>
    </>
  );
}

export default App;
