// Queremos representar un equipo de futbol 5. 
// Para ello necesitamos tener el nombre de cada jugador, 
// su posicion y su edad 
// ¿Cómo representamos cada jugador?¿Cómo representamos un equipo?

// Resuelto con arreglos>

// let jugador1 = ["Juan", "arquero", "22"];
// let jugador2 = ["Pedro", "defensor", "25"];

// console.log(jugador1[1]);
// Pero me tengo que acordar que significa cada posicion
// Que el [0] es el nombre; que [1] es posicion y [2] la edad;

let equipo1 = [jugador1, jugador2, jugador3, jugador4, jugador5];

let jugador1 = {nombre:"Juan", posicion:"arquero", edad: 22};
let jugador2 = {nombre:"Pedro", posicion:"defensor central", edad: 25};
let jugador3 = {nombre:"Maxi", posicion:"defensor lateral", edad: 21};
let jugador4 = {nombre:"Dario", posicion:"centrocampista", edad: 24};
let jugador5 = {nombre:"Claudio", posicion:"delantero", edad: 25};


console.log("Accediendo a los atributos del objeto jugador1: ", jugador1);
console.log("Consultando atributos del jugador1 de manera individual y armando una frase. " 
+"El jugador 1 es: " + jugador1.nombre + ", su posicion es la de: " 
+ jugador1.posicion + ". Su edad actual es de: " + jugador1.edad + "anios");

console.log("Equipo completo " + equipo1);
