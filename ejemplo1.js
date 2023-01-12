//const { fileURLToPath } = require("url");
//Si queremos exportar otra variable la debemos declarar asignar un valor y agregar en exports para que pueda ejecutar 
let name = "Pepe";

let auto = {

    color: "negro",
    marca: "Fiat",
    modelo: "Punto",
    
    arrancar: function() {
        return 'Vroom'
    },
    //este ejemp,lo y wl anterior debemos llamar a la variable y la funcion para que muestre pot consola
    detenerse: function () {
        return 'kpuff'
    },
    //ejemplo para usat el this.
    queMarcaEs: function () {
        return this.marca
    }
}

//console.log("mi objeto", auto);
//console.log(auto.color, auto.arrancar());
//console.log(auto.queMarcaEs());

//ejemplo para exportar un modulo:
 module.exports ={
    auto,
    name
 };