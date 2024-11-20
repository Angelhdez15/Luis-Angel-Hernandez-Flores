import React, { useContext, useState } from 'react';
import { EspeciesContext } from '../componentes/Especies/EspeciesContext';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GestionEs() {
  const { especies, setEspecies } = useContext(EspeciesContext); // Acceso al estado global
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState({
    nombreComun: '',
    nombreCientifico: '',
    ubicacion: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const abrirModal = () => setShowModal(true);
  const cerrarModal = () => setShowModal(false);

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

  return (
    <>
      <center><h1>Especies De Manatíes</h1></center>
      <div className="row">
      <Button variant="primary" onClick={abrirModal}>
        Agregar Especies...
      </Button>

      <Modal show={showModal} onHide={cerrarModal}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Nueva Especies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <center>
          <div className="mb-3">
          <label className="form-label">Nombre Comun:</label>
          <br></br>
            <input
              type="text"
              placeholder="Ingresa Nombre común"
              name="nombreComun"
              value={values.nombreComun}
              onChange={obtenerValues}
              className="input-field"
            /></div>
          <div className="mb-3">
          <label className="form-label">Nombre Científico:</label>
          <br></br>
            <input
              type="text"
              placeholder="Ingresa Nombre científico"
              name="nombreCientifico"
              value={values.nombreCientifico}
              onChange={obtenerValues}
               className="input-field"
            /></div>
          <div className="mb-3">
          <label className="form-label">Nombre De La Ubicación:</label>
          <br></br>
            <input
              type="text"
              placeholder="Ubicación"
              name="ubicacion"
              value={values.ubicacion}
              onChange={obtenerValues}
              className="input-field"
            /></div>
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
</div>
      <table>
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
                <button onClick={() => editarInfo(index)} type="button"
                  class="btn btn-info"> <i class="bi bi-pencil-fill"></i></button>
              </td>
              <td>
                <button onClick={() => eliminarInfo(index)} type="button"
                  class="btn btn-danger"><i class="bi bi-trash-fill"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default GestionEs;
