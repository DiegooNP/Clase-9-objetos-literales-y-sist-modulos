// ejemplo del playground de template o fn constructora

function persona (nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

//hay que instanciar una variable
let persona1 = new persona("Rocko", "Rocio", 2)

console.log(
    persona1
);

let persona = {
    nombre: "Rocko", apellido: "Rocio", altura: 2
}