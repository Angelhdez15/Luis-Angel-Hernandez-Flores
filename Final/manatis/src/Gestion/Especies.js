import React, { useContext, useState } from 'react';
import { EspeciesContext } from './EspeciesContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GestionEs() {
  const { 
    especies, 
    setEspecies, 
    sabiasQue, 
    setSabiasQue, 
    imagen, 
    setImagen 
  } = useContext(EspeciesContext); // Acceso al estado global

  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); // Modal para "Sabías que..." e imagen
  const [values, setValues] = useState({
    nombreComun: '',
    nombreCientifico: '',
    ubicacion: '',
  });
  const [nuevoSabiasQue, setNuevoSabiasQue] = useState(sabiasQue);
  const [nuevaImagen, setNuevaImagen] = useState(imagen);
  const [editingIndex, setEditingIndex] = useState(null);

  const abrirModal = () => setShowModal(true);
  const cerrarModal = () => setShowModal(false);
  const abrirEditModal = () => setShowEditModal(true);
  const cerrarEditModal = () => setShowEditModal(false);

  const obtenerValues = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const guardarInformacion2 = () => {
    if (!values.nombreComun || !values.nombreCientifico || !values.ubicacion) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    if (editingIndex !== null) {
      const updatedEspecies = [...especies];
      updatedEspecies[editingIndex] = values;
      setEspecies(updatedEspecies);
      setEditingIndex(null);
    } else {
      setEspecies([...especies, values]);
    }
    setValues({ nombreComun: '', nombreCientifico: '', ubicacion: '' });
    cerrarModal();
  };

  const eliminarInfo = (index) => {
    setEspecies(especies.filter((_, i) => i !== index));
  };

  const editarInfo = (index) => {
    setEditingIndex(index);
    setValues(especies[index]);
    abrirModal();
  };

  const actualizarSabiasQue = () => {
    setSabiasQue(nuevoSabiasQue);
    alert('Texto de "Sabías que..." actualizado.');
  };

  const actualizarImagen = () => {
    setImagen(nuevaImagen);
    alert('Imagen actualizada.');
  };

  return (
    <>
      <center><h1>Especies De Manatíes</h1></center>
      <div className="row">
        <Button variant="primary" onClick={abrirModal}>
          Agregar Especies...
        </Button>
        <Button variant="secondary" className="ms-3" onClick={abrirEditModal}>
          Editar "Sabías que..., y cambiar imagen"
        </Button>

        {/* Modal para agregar especies */}
        <Modal show={showModal} onHide={cerrarModal}>
          <Modal.Header closeButton>
            <Modal.Title>Agregar Nueva Especie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <center>
                <div className="mb-3">
                  <label className="form-label">Nombre Común:</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Ingresa Nombre común"
                    name="nombreComun"
                    value={values.nombreComun}
                    onChange={obtenerValues}
                    className="input-field"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Nombre Científico:</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Ingresa Nombre científico"
                    name="nombreCientifico"
                    value={values.nombreCientifico}
                    onChange={obtenerValues}
                    className="input-field"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Ubicación:</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Ubicación"
                    name="ubicacion"
                    value={values.ubicacion}
                    onChange={obtenerValues}
                    className="input-field"
                  />
                </div>
              </center>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarModal}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={guardarInformacion2}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal para editar "Sabías que..." y la imagen */}
        <Modal show={showEditModal} onHide={cerrarEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>Editar "Sabías que..."</Modal.Title>
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
              <label className="form-label">URL de la Imagen</label>
              <input
                type="text"
                className="form-control"
                value={nuevaImagen}
                onChange={(e) => setNuevaImagen(e.target.value)}
                placeholder="Ingresa la URL de la imagen"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarEditModal}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={() => {
              actualizarSabiasQue();
              actualizarImagen();
            }}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Tabla de especies */}
      <table className="table">
        <thead>
          <tr>
            <th>Nombre Común</th>
            <th>Nombre Científico</th>
            <th>Ubicación</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {especies.map((especie, index) => (
            <tr key={index}>
              <td>{especie.nombreComun}</td>
              <td>{especie.nombreCientifico}</td>
              <td>{especie.ubicacion}</td>
              <td>
                <button
                  onClick={() => editarInfo(index)}
                  type="button"
                  className="btn btn-info"
                >
                  <i className="bi bi-pencil-fill"></i>
                </button>
              </td>
              <td>
                <button
                  onClick={() => eliminarInfo(index)}
                  type="button"
                  className="btn btn-danger"
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

export default GestionEs;
