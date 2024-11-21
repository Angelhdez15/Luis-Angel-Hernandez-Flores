import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { HabitatContext } from './HabitatContext';

function GestionHab() {
  const { habitats, setHabitats, sabiasQue, setSabiasQue, imagen, setImagen } = useContext(HabitatContext); // Acceso al contexto
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); // Modal para "Sabías que..."
  const [values, setValues] = useState({
    especie: '',
    ubicacion: '',
    alimentacion: '',
    vegetacion: ''
  });
  const [nuevoSabiasQue, setNuevoSabiasQue] = useState(sabiasQue);
  const [nuevaImagen, setNuevaImagen] = useState(imagen);
  const [editingIndex, setEditingIndex] = useState(null);

  const abrirModal = () => setShowModal(true);
  const cerrarModal = () => setShowModal(false);
  const abrirEditModal = () => setShowEditModal(true);
  const cerrarEditModal = () => setShowEditModal(false);

  const obtenerValues = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const guardarInformacion = () => {
    if (editingIndex !== null) {
      const updatedHabitats = [...habitats];
      updatedHabitats[editingIndex] = values;
      setHabitats(updatedHabitats);
      setEditingIndex(null);
    } else {
      setHabitats([...habitats, values]);
    }
    setValues({ especie: '', ubicacion: '', alimentacion: '', vegetacion: '' });
    cerrarModal();
  };

  const guardarSabiasQueYImagen = () => {
    setSabiasQue(nuevoSabiasQue);
    setImagen(nuevaImagen);
    cerrarEditModal();
  };

  const eliminarInfo = (index) => {
    const updatedHabitats = habitats.filter((_, i) => i !== index);
    setHabitats(updatedHabitats);
  };

  const editarInfo = (index) => {
    setEditingIndex(index);
    setValues(habitats[index]);
    abrirModal();
  };

  return (
    <>
      <center>
        <h1>Hábitats De Manatíes</h1>
      </center>
      <div className="row">
        <Button variant="primary" onClick={abrirModal}>
          Agregar Especies...
        </Button>
        <Button variant="secondary" className="ms-3" onClick={abrirEditModal}>
          Editar "Sabías que..., y cambiar imagen"
        </Button>

        {/* Modal para agregar/editar hábitats */}
        <Modal show={showModal} onHide={cerrarModal}>
          <Modal.Header closeButton>
            <Modal.Title>Hábitat</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label className="form-label">Especies</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa el nombre de la especie"
                  name="especie"
                  onChange={obtenerValues}
                  value={values.especie}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Ubicación</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa la ubicación de la especie"
                  name="ubicacion"
                  onChange={obtenerValues}
                  value={values.ubicacion}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Alimentación</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa la alimentación de la especie"
                  name="alimentacion"
                  onChange={obtenerValues}
                  value={values.alimentacion}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Vegetación</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa la vegetación de la especie"
                  name="vegetacion"
                  onChange={obtenerValues}
                  value={values.vegetacion}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModal}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={guardarInformacion}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal para editar "Sabías que..." */}
        <Modal show={showEditModal} onHide={cerrarEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Editar "Sabías que..., y cambiar imgen"</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label className="form-label">Texto de "Sabías que..."</label>
              <textarea
                className="form-control"
                rows="3"
                value={nuevoSabiasQue}
                onChange={(e) => setNuevoSabiasQue(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">URL de la imagen</label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingresa la URL de la imagen"
                value={nuevaImagen}
                onChange={(e) => setNuevaImagen(e.target.value)}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarEditModal}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={guardarSabiasQueYImagen}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Tabla de hábitats */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Especie</th>
            <th scope="col">Ubicación</th>
            <th scope="col">Alimentación</th>
            <th scope="col">Vegetación</th>
            <th scope="col">Modificar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {habitats.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.especie}</td>
              <td>{item.ubicacion}</td>
              <td>{item.alimentacion}</td>
              <td>{item.vegetacion}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => editarInfo(index)}
                >
                  <i className="bi bi-pencil-fill"></i>
                </button>
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => eliminarInfo(index)}
                >
                  <i className="bi bi-trash-fill"></i>
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
