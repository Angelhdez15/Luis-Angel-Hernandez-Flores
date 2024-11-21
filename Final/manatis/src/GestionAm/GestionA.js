import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AmenazaContext } from './AmenazaContext';

function GestionA() {
  const { manaties, setManaties, sabiasQue, setSabiasQue, imagen, setImagen } = useContext(AmenazaContext); // Acceder al contexto
  const [showAddModal, setShowAddModal] = useState(false); // Modal para agregar/editar amenazas
  const [showInfoModal, setShowInfoModal] = useState(false); // Modal para modificar "Sabías que..." e imagen
  const [newSabiasQue, setNewSabiasQue] = useState(sabiasQue);
  const [newImagen, setNewImagen] = useState(imagen);
  const [values, setValues] = useState({
    Amenaza: '',
    ubicacion: '',
    nombreCientifico: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Modal para agregar o editar amenazas
  const abrirAddModal = () => setShowAddModal(true);
  const cerrarAddModal = () => setShowAddModal(false);

  // Modal para modificar "Sabías que..." e imagen
  const abrirInfoModal = () => setShowInfoModal(true);
  const cerrarInfoModal = () => setShowInfoModal(false);

  const handleSave = () => {
    // Actualiza los datos "Sabías que..." y la imagen
    setSabiasQue(newSabiasQue);
    setImagen(newImagen);
    cerrarInfoModal();
  };

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
    cerrarAddModal();
  };

  const eliminarInfo = (index) => {
    const updatedManaties = manaties.filter((_, i) => i !== index);
    setManaties(updatedManaties);
  };

  const editarInfo = (index) => {
    setEditingIndex(index);
    setValues(manaties[index]);
    abrirAddModal();
  };

  return (
    <>
      <center><h1>Amenazas De Manatíes</h1></center>
      <div className="row">
        <Button variant="primary" onClick={abrirAddModal}>
          Agregar Amenaza...
        </Button>

        <Modal show={showAddModal} onHide={cerrarAddModal}>
          <Modal.Header closeButton>
            <Modal.Title>{editingIndex !== null ? 'Editar Amenaza' : 'Agregar Amenaza'}</Modal.Title>
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
            <Button variant="secondary" onClick={cerrarAddModal}>
              Cerrar
            </Button>
            <Button variant="primary" onClick={guardarinformacion3}>
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Modal para modificar "Sabías que..." e Imagen */}
      <div className="row mt-3">
        <Button variant="info" onClick={abrirInfoModal}>Modificar "Sabías que..." e Imagen</Button>

        <Modal show={showInfoModal} onHide={cerrarInfoModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modificar Información</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="mb-3">
              <label>Texto "Sabías que...":</label>
              <textarea
                value={newSabiasQue}
                onChange={(e) => setNewSabiasQue(e.target.value)}
                placeholder="Nuevo texto"
                rows="3"
                style={{ width: '100%' }}
              />
            </div>
            <div className="mb-3">
              <label>URL de la Imagen:</label>
              <input
                type="text"
                value={newImagen}
                onChange={(e) => setNewImagen(e.target.value)}
                placeholder="URL de la nueva imagen"
                style={{ width: '100%' }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={cerrarInfoModal}>Cerrar</Button>
            <Button variant="primary" onClick={handleSave}>Guardar</Button>
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
