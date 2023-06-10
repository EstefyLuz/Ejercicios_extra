let cadena = " Bienvenidxs al Curso de Programación ";
console.log(cadena);

//a-

console.log("a) Longitud de la frase:\n ", cadena.length); // bien

//b-

let cadena2 = cadena.trim();

console.log(cadena2);
console.log(cadena2.length);


//c-

console.log("c) Primer y ultimo elemento con charAt:" , cadena2.charAt(0), "y" , cadena2.charAt(cadena2.length-1));

console.log("c) Primer y ultimo elemento accediendo desde el indice:" , cadena2[0]);

console.log("c) Primer y ultimo elemento accediendo desde el indice:", cadena2[cadena2.length-1]);

console.log("Ahora voy a buscar la 1era y ultima palabra");

let cadena3 = cadena2.split(" ");
console.log("Uso split para sacar espacios y dividir palabras en elementos:" , cadena3);
console.log("Longitud de cadena3:" , cadena3.length);
console.log("Primera y ultima palabra con charAt:" , cadena3.splice(0,1), cadena3.splice((cadena3.length-2, cadena3.length-1)));
console.log("Primera y ultima palabra accediendo desde el indice:");
console.log(cadena3[3]); // ver porque me toma no definido 


//d-

let cadena4 = cadena2.toLowerCase();
console.log("Cree una variable donde almacene la frase de cadena2 y muestro solo la primera en mayuscula:\n" , cadena2[0] + cadena4.slice(1));


//e-

let nuevoString = " Java Script 2023"
let cadenaFinal = cadena2 + nuevoString;
console.log(cadenaFinal);