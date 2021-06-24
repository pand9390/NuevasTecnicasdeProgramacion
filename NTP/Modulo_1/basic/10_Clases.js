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
// console.log(rectangulo2.calcularArea());

/* DEBER 
    Clase persona
    -implementar getters, setters y realizar una implementacion
    -implementar metodos estaticos - Punto, distancia
    -Construir clases Persona y estudiante, extender (extends) Estudiante con Persona
*/
class Persona{
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    saludar(){
        console.log(`hola mi nombre es ${this.nombre} y tengo ${this.edad} años`)
    }
    static punto(){
        console.log(`este es un metodo estatico`)
    }
}
// var persona = new Persona('Anderson', 24);
// persona.saludar()
// Persona.punto()

var Persona2 = {
    nombre:'Anderson',
    apellido:'Pérez',
    getNombre: function() {
        return this.nombre;
    },

    setNombre: function(nombre) {
        this.nombre = nombre;
    },
}
Persona2.setNombre("Paul");
console.log(Persona2.getNombre());



class Estudiante extends Persona{
    constructor(nombre,edad,carrera,semestre){
        super(nombre,edad);
        this.carrera = carrera
        this.semestre = semestre
    }
    saludoyestudia(){
        this.saludar();
        console.log(`Estudio la carrera de ${this.carrera} y estoy en ${this.semestre} semestre`)
    }
}
var estudiante = new Estudiante('Anderson', 24, 'Analisis de sitemas',6);
console.log(estudiante.saludoyestudia());