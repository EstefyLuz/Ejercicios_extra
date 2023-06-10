let frase = "Bienvenidxs al curso de programación 2023";

console.log("a) Posicion donde empieza la palabra curso:\n", frase.indexOf("curso"));
console.log("a) Posicion donde empieza la palabra programa:\n" , frase.indexOf("programa "));

console.log("Da -1 porque no esta la palabra programa, sino programacion");
console.log("\n");

console.log("b) imprima en pantalla la palabra curso usando la función adecuada para los strings");
console.log("\n");

console.log("Accedo desde la variable string, teniendo en cuenta que la palabra curso tiene 5 letras y empieza en la posicion 15, utilizo slice:\n");
console.log("Imprimo curso nuevamente con slice:", frase.slice(15,20));

console.log("c) Cree un arreglo cuyos elementos sean las palabras de la frase e imprimalo en pantalla");
console.log("Creo arreglo con split: ", frase.split(" "));

console.log("Paso la frase a un arreglo utilizando split, para poder acceder luego al indice de la palabra curso>\n");
let fraseConIndices = frase.split(" ");
console.log(fraseConIndices);
console.log("Accedo al indice de la palabra curso:\n");
console.log(fraseConIndices.indexOf("curso"));
console.log("Imprimo la palabra curso:" , fraseConIndices[fraseConIndices.indexOf("curso")]);

console.log("d)  Cree otro arreglo cuyos elementos sean las letras de la frase. Muestre la longitud ");
let letrasDeFrase = frase.split("");
console.log("Creo el arreglo usando split con corte cero digamos", letrasDeFrase);

console.log("e) ¿Cómo podemos saber si el string inicial del ejercicio tiene números?");
console.log("Lo se usando starwith" , frase.startsWith(Number));

console.log("¿Como podemos hacer para saber si todos los caracteres son números?");
console.log("Primero voy a crear un arreglo de letras sin los espacios con replaceAll");
let arrayCaracteres = frase.replaceAll(" ","");
console.log(arrayCaracteres);
console.log("Ahora hago split para separar cada caracter");
let arraySinEspacios = arrayCaracteres.split("");
console.log(arraySinEspacios);

console.log("Armo un mapeo para saber cuales son Numbre");
let sonNumeros = (arraySinEspacios.map(e => isNaN(Number(e))));
console.log(sonNumeros);


