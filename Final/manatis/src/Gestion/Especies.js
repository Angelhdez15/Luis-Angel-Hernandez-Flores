import React,{useEffect, useState} from 'react'
import { informacion } from './Datos';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GestionEs() {
  const[info,setinfo]=useState([]);

  const mostarinfo=()=>{
    setinfo(informacion);
    console.log(informacion); 
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    mostarinfo();
  },[])
const eliminarinfo=()=>{
  alert('Dato Eliminado')
}
const editarinfo=()=>{
  alert('Dato Editado')
}
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
   Agregar
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre comun</th>
      <th scope="col">Nombre cientifico</th>
      <th scope="col">Ubicacion</th>
      <td>Modificar</td>
      <td>Eliminar</td>
    </tr>
  </thead>
  <tbody>
    {
      info.map((values,index)=>{
        return(
          <tr>
          <th scope="row">{index+1}</th>
          <td>{values.matricula}</td>
          <td>{values.nombre}</td>
          <td>{values.apellido}</td>
          <td>
                  <button
                    type="button"
                    class="btn btn-info"
                    onClick={editarinfo}
                  >
                    <i class="bi bi-pencil-fill"></i>
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={eliminarinfo}
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </td>
        </tr> 
        )
      })
    }    
  </tbody>
</table>
</>

  )
}
export default GestionEs







