/*
    PROMESAS
*/
//Declarativa
function promesa(bandera){
    return new Promise((resolve, reject)=>{
        if (bandera) {
            setTimeout(() => {
                resolve("Peticion Resuelta");
            }, 3000);
        } else {
            reject("La operacion Falló");
        }
        
    })
}

// promesa(false)
//     .then((resultado)=>{
//         console.log("Respuesta Positiva",resultado);
//     })
//     .catch((error)=>{
//         console.log("Error",error);
//     })

// Expresiva-----------

var segundaPromesa = (bandera) => new Promise((resolve, reject)=>{
    if (bandera) {
        setTimeout(() => {
            resolve("Peticion Resuelta");
        }, 3000);
    } else {
        reject("La operacion Falló");
    }
})

// segundaPromesa(true)
//     .then((resultado)=>{
//         console.log("Respuesta Positiva",resultado);
//     })
//     .catch((error)=>{
//         console.log("Error",error);
//     })

/** Encadenamiento de Promesas */
var listaDePersonas; // en caso de que se trabaje con valores se crea una variable global para almacenar el valor
promesa(true)   // peticion de clientes
    .then((respuesta)=>{  // respuesta de lista de clientes
        console.log(respuesta);
        return segundaPromesa(false) // compras del cliente
    })
    //<--Encadenamiento--------
    .then((respuesta)=>{ // Respuesta de la Segunda promesa
        console.log(respuesta);
    })
    //------------------------>
    .catch((error)=>{
        console.log(error);
    })
