// let curso = {
//     cantidadDeAlumnos : 32,
//     docentes : ["Nacho", "Javier"],
//     horario : "de 19 a 21 hs.",
//     notificaciones : function(){
//        return "El horario de la cursada es " + this.horario;
//}
// }
// //console.log(curso);
// console.log("La cantidad de alumnos es de " + curso.cantidadDeAlumnos);
// console.log(curso.notificaciones());


// let miPais = {
//     nombre : "Argentina",
//     poblacion : 4009002,
//     capital : "Buenos Aires",
//     decirNacionalidad: function (){
//         //return "Yo naci en Argentina";
//         return "Yo naci en " +  this.nombre;
//     }
// }
// console.log(miPais.decirNacionalidad());

//Propiedades de un objeto literal
let usuario = {}
usuario.nombre = 'Lucas'

console.log(usuario);
//Se vera en consola un objeto literal
// {nombre: 'Lucas'}

// File System  se utiliza para manejar archivos y carppetas en nuestro proyecto
const fs = require ('fs');
//Ejemplos de modulos mas usados
let existe = fs.existsSync('hola.txt')

console.log(archivo);
//se cera por consola un booleano
//true

//Para leer el archivo le debemos parar como argumento (fs.readFileSync('hola.txt')), ejemplo
let mensaje = fs.readFileSync('hola.txt');

console.log(mensaje);
// Se vera por consola el contenido como
//'hola todo el mundo'


//FUNCION CONTRUCTORA - FUNCION TRADICIONAL

function auto(laMarca, elModelo){
    this.laMarca;
    this.elModelo;
}
console.log(auto());

//Instanciar - ejemplos, asignar una variable cualquiera

let miAuto = new auto("Peugeot", 2019);