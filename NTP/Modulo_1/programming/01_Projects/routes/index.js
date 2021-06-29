// traemos el paquete
const {Router} = require('express');
const data = require('../data.json');
const { User } = require('../lib/Schema/User');
const { DataValidator } = require('../Middlewares/DataValidator')
//Inicializamos Router
const router = Router()

//Creacion de endpoints
// Implementaciond e Middleware
router
.get("/", (req, res)=>{
    res.send("Hola mundo con express js");
})
.get("/saludo",DataValidator("query", User), (req, res)=>{
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
})  //deber -------------------------------------------
.get("/users", (req, res)=>{
    res.json({
        msg: "LISTA DE USUARIOS",
        body: data.map((person)=>{
            person.first_name = person.first_name.toUpperCase()
            person.last_name = person.last_name.toUpperCase()
            return person
        })
    })
}).get("/users-query",(req, res)=>{
    const {query: {id}}= req;
    function promesa(req){
        return new Promise((resolve, reject)=>{
            if (req && req < 11) {
                resolve("Peticion Resuelta");
            } else {
                reject("La operacion Falló");
            }
            
        })
    }
    (async()=>{
        try {
            var respuesta = await promesa(id)
            console.log(respuesta);
                res.json({
                    msg: "CONSULTA QUERY ID",
                    body: data.filter( element => element.id == id)
                
                })
            
        } catch (error) {
            console.log(error);   
                res.json({
                msg: "CONSULTA QUERY ID",
                error:"Verifique que haya ingresado un query con valor numerico y que este en un rango de 1 a 10",
                body: data
            
            })
        }
    })()   
})
.get("/users-params/:apellido", (req,res)=>{
    const {params:{apellido}} = req;
    
    var data_filter = data.filter(element=> element.last_name === apellido)
    if (data_filter[0] != undefined) {
        const email = data_filter.map(item =>{
            delete item.id
            delete item.first_name
            delete item.last_name
            return item
        })
        res.json({
            msg: "Consulta params apellido",
            body:email
        })
    }else{
        res.json({
            msg:"El apellido:"+apellido+"no existe",
            body: []
        })
    }
    
})



// exportamos las rutas 

module.exports.RouterIndex = router     //nos permite exportar el archivo

