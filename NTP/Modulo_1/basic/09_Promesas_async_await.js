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

//funcion autoejecutable de javascript (IIFE)

(async()=>{
    try {
        var listaDeClientes;
        var respuesta = await promesa(true)
        var respuesta2 = await promesa(false)
        console.log(respuesta);
        console.log(respuesta2);
    } catch (error) {
        console.log(error);    
    }
})()