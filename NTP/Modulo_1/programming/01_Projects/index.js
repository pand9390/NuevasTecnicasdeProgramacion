const express = require('express'); 

//genera una aplicacion express
const app = express()
//EndPoint
app.get('/',(req, res)=>{
    res.send("Hola mundo con expressJs y nodemon")
})

app.get("/saludo",(req, res)=>{
    //req.query
    // console.log(req.query);

    //<<<<desestructuracion
    const {query: {nombre, apellido}}= req;
    res.json({
        saludo:`Hola soy ${nombre} ${apellido}`,
    })
});
    //>>>>>>>>>>>>>>>>>>>>>>>

app.get('/saludo/:nombre/:apellido', (req, res) => {
    const {params} = req;
    res.json({
        nombre: params.nombre,
        apellido: params.apellido

    })
})

//Levanto el servidor

app.listen(3000, () =>{
    console.log("Servidor escuchando en http://localhost:3000");
})

