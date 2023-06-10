let array = [3,5,-11,8];
console.log("El arreglo es:", array);

console.log("El primer elemento es multiplo de 3?:" , array[0] %3 === 0);

console.log("El segundo elemento es negativo?" , array[1]<0);

console.log("El tercer elemento está entre 10 y 100?:" , array[2]>=10 && array[2]<=100);

console.log("El primer elemento es mas grande que el segundo?" , array[0]>array[1]);

console.log("Hay algun numero par?:", array[0]%2 === 0 || array[1]%2 === 0 || array[2]%2 === 0 || array[3]%2 === 0);

console.log("Son todos numeros pares?:", array[0]%2 === 0 && array[1]%2 === 0 && array[2]%2 === 0 && array[3]%2 === 0);

console.log("Es o son pares:" , array.filter(e => e%2 === 0));