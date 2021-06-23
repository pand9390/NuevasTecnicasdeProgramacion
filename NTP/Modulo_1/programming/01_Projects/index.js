const express = require('express'); 

//genera una aplicacion express
const app = express()
//EndPoint
app.get('/',(req, res)=>{
    res.send("Hola mundo con expressJs")
})

//Levanto el servidor

app.listen(3000, () =>{
    console.log("Servidor escuchando en http://localhost:3000");
})
