const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3001;
// Middleware globales
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Rutas
const manatis = require('./src/routes/Rutas');
app.use('/api/Rutas', manatis);

app.listen(port, () => {
    console.log(`Servidor ejecutado en http://localhost:${port}`);
});
