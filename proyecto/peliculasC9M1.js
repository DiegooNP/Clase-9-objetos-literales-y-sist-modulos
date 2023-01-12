let peliculas = [];

function peliculaa(id, calificacion, premios, duracion, precio, genero){

    this.id = id;
    this.calificacion = calificacion;
    this.premios = premios;
    this.duracion = duracion;
    this.precio = precio;
    this.genero = genero;
};

function agregarpeliculaa(pelicula) {
    peliculas.push(pelicula)
}

let pelicula1 = new peliculaa(1,9, 4, 90, 250, "suspenso");
let pelicula2 = new peliculaa(2,10, 1, 130, 350, "comedia");

agregarpeliculaa(pelicula1);
agregarpeliculaa(pelicula2);

module.exports = peliculas;
//console.log(peliculas);