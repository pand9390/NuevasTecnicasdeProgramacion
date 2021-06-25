// traemos el paquete
const {Router} = require('express');
// const data = require("./data");
//Inicializamos Router
const router = Router()

//Creacion de endpoints

router
.get("/", (req, res)=>{
    res.send("Hola mundo con expressJs y nodemon")
})
.get("/saludo",(req, res)=>{
    const {query: {nombre, apellido}}= req;
    res.json({
        saludo:`Hola soy ${nombre} ${apellido}`,
    })
})
.get("/saludo/:nombre/:apellido", (req,res)=>{
    const {params} = req;
    res.json({
        nombre: params.nombre,
        apellido: params.apellido
})
})
// .get("/users", (req, res)=>{
//     res.send({
//         msg:"lista de usuarios",
//         body: data
//     })
// })



// exportamos las rutas 

module.exports.RouterIndex = router     //nos permite exportar el archivo

