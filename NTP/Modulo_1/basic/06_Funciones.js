// // funciones declarativas

// // retorno de valores
// funcion saludar(){
//     return "Hola soy Anderson";
// }

// // funciones void
// function saludar2(){
//     console.log("Hola soy Anderson");
// }

// // Funciones con parametros
// function saludarConParametros(nombre, apellido){
//     return `Hola soy ${nombre}.${apellido}`

// }

//funcion con parametros por defecto
// function saludoconProfesion(nombre= "Persona", profesion="Analista de Sistemas"){
//     return `Hola ${nombre} mi profesion es ${profesion}` 

// }
// console.log(saludoconProfesion("Anderson","desarrollador de software"));


//FUNCIOINES EXPRESIVAS

// var SaludoConEdad = function(nombre, edad){
//     return `Hola soy ${nombre} y tengo ${edad} año(s)`

// }
// console.log(SaludoConEdad("Anderson",24));

// //FUNCIONES FLECHA

// var saludoConApellido = (nombre, apellido) => `Hola soy ${nombre} ${apellido}`
// console.log(saludoConApellido("Anderson", "Perez"));

// var suma = (num1, num2) => num1 +num2
// console.log(suma(2,3))

//FUNCIONES COMO PARAMETROS DE OTRAS FUNCIONES

function saludoConFunciones(nombre, cb){
    return cb(nombre)
}
var miSaludo = saludoConFunciones("Anderson", function(nombre){
    return `Hola soy ${nombre}`
})

var miSaludo2 = saludoConFunciones("Anderson", (nombre)=>`Hola soy ${nombre}`)
    // console.log(miSaludo2)

// setTimeout(() => {
//     console.log("Hola mundo");
// }, 3000);

    // setInterval(() => {
    //     console.log("Hola mundo");
    // }, 2000);