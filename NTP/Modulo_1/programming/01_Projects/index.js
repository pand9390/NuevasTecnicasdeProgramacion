const express = require('express'); 

//genera una aplicacion express
const app = express()
//Routes
const{ RouterIndex } = require('./routes/index');

app.use("/", RouterIndex)
app.use("/deber-video", RouterIndex)
// app.use("/user", RouterIndex)
// app.use("/user/saludo", RouterIndex)

//Levanto el servidor

app.listen(3000, () =>{
    console.log("Servidor escuchando en http://localhost:3000");
})

