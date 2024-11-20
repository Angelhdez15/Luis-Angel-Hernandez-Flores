import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AmenazaContext } from './AmenazaContext';

function GestionA() {
  const { manaties, setManaties } = useContext(AmenazaContext); // Accede al contexto
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState({
    Amenaza: '',
    ubicacion: '',
    nombreCientifico: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const abrirModal = () => setShowModal(true);
  const cerrarModal = () => setShowModal(false);

  const obtenerValues = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const guardarinformacion3 = () => {
    if (editingIndex !== null) {
      const updatedManaties = [...manaties];
      updatedManaties[editingIndex] = values;
      setManaties(updatedManaties);
      setEditingIndex(null);
    } else {
      setManaties([...manaties, values]);
    }
    setValues({ Amenaza: '', ubicacion: '', nombreCientifico: '' });
    cerrarModal();
  };

  const eliminarInfo = (index) => {
    const updatedManaties = manaties.filter((_, i) => i !== index);
    setManaties(updatedManaties);
  };

  const editarInfo = (index) => {
    setEditingIndex(index);
    setValues(manaties[index]);
    abrirModal();
  };

  return (
    <>
      <center><h1>Amenazas De Manatíes</h1></center>
      <div className="row">
        <Button variant="primary" onClick={abrirModal}>
          Agregar Amenaza...
        </Button>

        <Modal show={showModal} onHide={cerrarModal}>
          <Modal.Header closeButton>
            <Modal.Title>Amenaza</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label className="form-label">Amenaza</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa el nombre de la amenaza"
                  name="Amenaza"
                  onChange={obtenerValues}
                  value={values.Amenaza}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Ubicación</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa la ubicación de la amenaza"
                  name="ubicacion"
                  onChange={obtenerValues}
                  value={values.ubicacion}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Nombre Científico</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingresa el nombre científico"
                  name="nombreCientifico"
                  onChange={obtenerValues}
                  value={values.nombreCientifico}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModal}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={guardarinformacion3}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Amenazas</th>
            <th>Ubicación</th>
            <th>Nombre Científico</th>
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {manaties.map((values, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{values.Amenaza}</td>
              <td>{values.ubicacion}</td>
              <td>{values.nombreCientifico}</td>
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

export default GestionA;
