// Asignación
//=

//Comparaciones
/*
==
=== // completamente igual
>
<
<=
>=
!=
console.log(2 != 3);
*/

/*console.log(2 == 2);
console.log(2 === '2');
console.log(2 == '2')
*/


/*
--> OPERADORES DE ASIGNACIÓN COMPUESTOS
Incremento y asignacion    
    += | x = x+y
Decremento y asignacion
    -= | x = x-y

    var numero = 3;
    numero += 2;
    console.log(numero);
*/

// Operadores Aritmeticos
/*
+
-
*
/
%
**
*/

// Desestructurar Objetos
/*

*/
var persona = {
    nombre: "Anderson",
    apellido: "Pérez",
    edad: 24,
    viajes:{
        destino1: "Colombia",
        destino2: "Mexico"

    }
};
var { nombre:nombre2, apellido, viajes:{ destino1 } } = persona;
console.log(persona);
console.log(nombre2);
console.log(apellido);
console.log(destino1);