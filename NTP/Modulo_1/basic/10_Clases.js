// Como se hacia antes

function Rectangulo(base, altura){
    this.base = base
    this.altura = altura
}

Rectangulo.prototype.calcularArea = function(){
    return this.base * this.altura
}

var rectangulo = new Rectangulo(6, 3)
// console.log(rectangulo.calcularArea());
// console.log(rectangulo.base);

//Como se trabaja Ahora
// Declaracion de clases
class Rectangulo2{
    constructor(base, altura){
        this.base = base
        this.altura = altura
    }
    calcularArea(){
        return this.base * this.altura
    }
}
var rectangulo2 = new Rectangulo2(6, 3)
console.log(rectangulo2.calcularArea());

/* DEBER 
    Clase persona
    -implementar getters, setters y realizar una implementacion
    -implementar metodos estaticos - Punto, distancia
    -Construir clases Persona y estudiante, extender (extends) Estudiante con Persona
*/
