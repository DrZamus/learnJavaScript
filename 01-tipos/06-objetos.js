//Personaje de TV 
let nombre = "tanjiro";
let anime = "demos slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "demon slayer",
    edad:16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);


personaje.edad = 19;
personaje['edad'] = 18;


console.log(personaje.edad);


delete personaje.anime;


console.log(personaje);

