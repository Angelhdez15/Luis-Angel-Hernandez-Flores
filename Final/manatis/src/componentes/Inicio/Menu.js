// Menu.js (Mejorado)
import React from 'react';
import { Link } from "react-router-dom";
// Archivo de estilos personalizados

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="#">Manatis</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Especies">Especies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Habitad">Hábitat</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Amenazas">Amenazas</Link>
          </li>
        
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestion
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Hábitat</a></li>
            <li><a class="dropdown-item" href="/Gestion">Especies</a></li>
            <li><a class="dropdown-item" href="#">Amenazas</a></li>
          </ul>
        </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">Buscar</button>
        </form>
      </div>
    </nav>
  );
}

export default Menu;