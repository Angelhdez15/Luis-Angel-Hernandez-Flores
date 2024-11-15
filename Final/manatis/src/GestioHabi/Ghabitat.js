import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { informacion } from '../GestioHabi/DatosH';

function GestionHab() {
  const [info, setInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState({
    especie: '',
    ubicacion: "",
    alimentacion: "",
    vegetacion: ""
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const abrirModal = () => setShowModal(true);
  const cerrarModal = () => setShowModal(false);

  const obtenerValues = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const guardarInformacion = () => {
    if (editingIndex !== null) {
      const updatedInfo = [...info];
      updatedInfo[editingIndex] = values;
      setInfo(updatedInfo);
      setEditingIndex(null);
    } else {
      setInfo([...info, values]);
    }
    setValues({ especie: '',  ubicacion: '', alimentacion: '',vegetacion:"" });
  };

  const mostrarInfo = () => {
    setInfo(informacion);
  };

  const eliminarInfo = (index) => {
    const updatedInfo = info.filter((_, i) => i !== index);
    setInfo(updatedInfo);
  };

  const editarInfo = (index) => {
    setEditingIndex(index);
    setValues(info[index]);
    abrirModal();
  };

  useEffect(() => {
    mostrarInfo();
  }, []);

  return (
    <>
          <center> <h1>Habitas De Manatis</h1></center>
      <div className="row">
        <Button variant="primary" onClick={abrirModal}>
          Agregar Especies...
        </Button>

        <Modal show={showModal} onHide={cerrarModal}>
          <Modal.Header closeButton>
            <Modal.Title>Habitad</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Especies
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ingresa el nombre de la especie"
                  name="especie"
                  onChange={obtenerValues}
                  value={values.especie}
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
                  placeholder="Ingresa el nombre cientifico de la especie"
                  name="ubicacion"
                  onChange={obtenerValues}
                  value={values.ubicacion}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Alimentacion
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ingresa la ubicacion de la especie"
                  name="alimentacion"
                  onChange={obtenerValues}
                  value={values.alimentacion}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Vegetacion
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ingresa la ubicacion de la especie"
                  name="vegetacion"
                  onChange={obtenerValues}
                  value={values.vegetacion}
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
            <th scope="col">Especies</th>
            <th scope="col">ubicacion</th>
            <th scope="col">Alimentacion</th>
            <th scope="col">Vegetacion</th>
            <th scope="col">Modificar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {info.map((values, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{values.especie}</td>
              <td>{values.ubicacion}</td>
              <td>{values.alimentacion}</td>
              <td>{values.vegetacion}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-info"
                  onClick={() => editarInfo(index)}
                >
                  <i class="bi bi-pencil-fill"></i>
                </button>
              </td>
              <td>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => eliminarInfo(index)}
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default GestionHab;
