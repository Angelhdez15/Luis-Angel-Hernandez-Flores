// server.js
import express from 'express';
import {informacion,informacion2,informacion3 } from '/Final/manatis/src/Bd/Datos.js'

const app = express();
const port = 3000;

app.use(express.json());

app.get('/informacion', (req, res) => {
    res.json(informacion);
});

app.get('/informacion2', (req, res) => {
    res.json(informacion2);
});

app.get('/informacion3', (req, res) => {
    res.json(informacion3);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});