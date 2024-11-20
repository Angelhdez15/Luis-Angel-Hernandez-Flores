const express = require("express");
const bodyparser=require("body-parser");
const cors = require ("cors");
const path = require("path");
const app = express();
const port = 3001;
const buildPath = path.join(__dirname, '..', 'manatis', 'build');

console.log('Ruta buildPath:', buildPath); // Verifica la ruta

app.use(express.static(buildPath))
app.get("*", (req, res) => {
    console.log("Ruta encontrada, enviando index.html");
    res.sendFile(path.join(buildPath, 'index.html'));
});


app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cors())

app.get("/mens",(req,res)=>{
    res.send("Servidor funcional")
})

app.listen(port,()=>{
    console.log("Servidor ejecutando en puerto");
    
})