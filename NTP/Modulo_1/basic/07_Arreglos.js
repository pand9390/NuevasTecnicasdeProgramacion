//CONCAT

var numeros = [1,2,3,4,5];
var nuevoNumeros = numeros.concat(6,7,8,9,0)

// console.log(numeros);
// console.log(nuevoNumeros)

/*JOIN*/
var nombre = ["a","n","d","e","r","s","o","n"]
// console.log(nombre.join(""));

/* SLICE */
// console.log(nombre.slice(2));

/* INDEX OF */

// console.log(nombre.indexOf("d"));

/* LAST INDEX OF */
var nombre2 = ["a","n","d","e","e","r","s","o","n","n"]
// console.log(nombre2.lastIndexOf("e"));

/** REVERSE */
    // console.log(nombre.reverse());

/* SORT */

var numerosDesordenados = [3,4,5,1,2,3,8,7,5,]

// console.log(numerosDesordenados.sort());

/*SHIFT */

// console.log(numerosDesordenados.shift());

/* POP */

// console.log(numerosDesordenados.pop());

/* PUSH */
numerosDesordenados.push(1012);
    // console.log(numerosDesordenados);

var pares = [2,4,6,8,10]

// console.log(pares.map((elemento)=>elemento + 1));

/*  CONSULTAR FUNCIONES  DE ARREGLOS */

/*FOR EACH */
const arr = ["a", "b", "c", "d"];
arr.forEach((e, i) => console.log(e, i))

/*every */
arr.every((e) => e.length == 1);

/*some */
arr.some((e) => e.length == 2); // true

/*Filter*/
const arr2 = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];
const nuevoArr = arr2.filter((e) => e[0] == "P");

/*Find*/
const arr3 = ["Ana", "Pablo", "Pedro", "Pancracio", "Heriberto"];

arr3.find((e) => e.length == 5);
arr3.findIndex((e) => e.length == 5); 


