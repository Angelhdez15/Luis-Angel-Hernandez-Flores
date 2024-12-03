const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

// Importar las colecciones desde Datos.js
const { informacion, informacion2, informacion3 } = require("../manatis/src/Bd/Datos");

const app = express();
const port = 3001;
const buildPath = path.join(__dirname, "..", "manatis", "build");

// Configuración del servidor
console.log("Ruta buildPath:", buildPath);
app.use(express.static(buildPath));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Rutas para servir las colecciones de datos
app.get("/informacion", (req, res) => {
    res.json(informacion);
});

app.get("/informacion2", (req, res) => {
    res.json(informacion2);
});

app.get("/informacion3", (req, res) => {
    res.json(informacion3);
});

// Ruta principal
app.get("*", (req, res) => {
    console.log("Ruta encontrada");
    res.sendFile(path.join(buildPath, "index.html"));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutando en puerto ${port}`);
});
