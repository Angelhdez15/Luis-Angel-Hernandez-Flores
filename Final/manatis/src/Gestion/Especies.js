import React,{useEffect, useState} from 'react'
import { informacion } from './Datos';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GestionEs() {
  const [info, setInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState({
    matricula:'',
    nombre:"",
    apellido:""
  });

  const abrirModal = () => setShowModal(true);
  const cerrarModal = () => setShowModal(false);

  const obtenerValues = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const guardarInformacion=()=>{
    console.log(values);
  informacion.push(values);
  }

  const mostrarInfo = () => {
    setInfo(informacion);
    //console.log();
  };

  const eliminarInfo = () => {
    informacion.pop();
    console.log("Dato eliminado");
    mostrarInfo();
  };
  const editarInfo = () => {
    alert("Dato editado");
  };

  useEffect(() => {
    mostrarInfo();
  }, []);

  return ( 
     <>
        <div className="row">
          <Button variant="primary" onClick={abrirModal}>
            Agregar Especies...
          </Button>
  
          <Modal show={showModal} onHide={cerrarModal}>
            <Modal.Header closeButton>
              <Modal.Title>Especies</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ingresa el nombre de la especie"
                    name="matricula"
                    onChange={obtenerValues}
                    value={values.matricula}
                  />
                </div>
  
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Nombre Cientifico
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ingresa el nombre cientifico de la especie"
                    name="nombre"
                    onChange={obtenerValues}
                    value={values.nombre}
                  />
                </div>
  
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Ubicacion
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ingresa la ubicacion de la especie"
                    name="apellido"
                    onChange={obtenerValues}
                    value={values.apellido}
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={cerrarModal}>
                Close
              </Button>
              <Button variant="primary" onClick={guardarInformacion}>
               Guardar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Nombre cientifico</th>
              <th scope="col">Ubicacion</th>
              <th scope="col">Modificar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {info.map((values, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{values.matricula}</td>
                  <td>{values.nombre}</td>
                  <td>{values.apellido}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-info"
                      onClick={editarInfo}
                    >
                      <i class="bi bi-pencil-fill"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={eliminarInfo}
                    >
                      <i class="bi bi-trash-fill"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
export default GestionEs







