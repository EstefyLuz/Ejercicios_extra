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



let jugador1 = {nombre:"Juan", posicion:"arquero", edad: 22};
let jugador2 = {nombre:"Pedro", posicion:"defensor central", edad: 25};
let jugador3 = {nombre:"Maxi", posicion:"defensor lateral", edad: 21};
let jugador4 = {nombre:"Dario", posicion:"centrocampista", edad: 24};
let jugador5 = {nombre:"Claudio", posicion:"delantero", edad: 25};

let equipo1 = [jugador1, jugador2, jugador3, jugador4, jugador5];

console.log("Accediendo a los atributos del objeto jugador1: ", jugador1);

console.log("Consultando atributos del jugador1 de manera individual y armando una frase. " 
+ "El jugador 1 es: " + jugador1.nombre + ", su posicion es la de: " 
+ jugador1.posicion + ". Su edad actual es de: " + jugador1.edad + " anios");

console.log("Los nombres de los jugadores del equipo1 son: " + equipo1[0].nombre + ", " + equipo1[1].nombre, ", " 
+ equipo1[2].nombre, ", " + equipo1[3].nombre, "y " + equipo1[4].nombre);

console.log("Los jugadores del equipo1 con sus atributos son: " , equipo1[0], equipo1[1], equipo1[2], 
equipo1[3], equipo1[4]);

console.log("El promedio de edad del equipo1 es de " + (equipo1[0].edad + equipo1[1].edad + 
    equipo1[2].edad + equipo1[3].edad + equipo1[4].edad) / 5);
   
jugador1.apodo = "Juaco";
console.log("Agregando apodo el primer jugador del equipo desde el objeto: " + jugador1.apodo);
console.log(jugador1);

equipo1[1].apodo = "Pepe";
equipo1[2].apodo = "Max";
equipo1[3].apodo = "Daro";
equipo1[4].apodo = "Clau";
console.log("Agregados los demas apodos desde el arreglo " , jugador2, jugador3, jugador4, jugador5);

