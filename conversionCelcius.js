//Escribir un programa que convierta de grados celsius a grados farenheit. 
//Pasar 10 ºC a 25ºF a  grados ºF
// C * 9/5 = F -32
// C * 9/5 + 32 = F
// F = C * 9/5 +32

let celcius;
let fahrenheit;

fahrenheit = (10 * 9/5) + 32;
console.log (fahrenheit);

//tenemos un arreglo con la tempreraturas promedio de cada mes del a;o
let temperaturasFarenheit = [32, 50, 77, 80, 42, 66, 25, 33, 31, 40, 65, 70]; // F

// Calcular la T promedio mensual en grados C de cada mes
// Luego calcular promedio de la T C total.

// Armo la lista donde voy a poner las T
let temperaturasCelsius = [];
temperaturasCelsius[0] = (temperaturasFarenheit[0]-32) * 5/9; // temperaturasFarenheit[0]
temperaturasCelsius[1] = (temperaturasFarenheit[1]-32) * 5/9; // Accedo a cada posicion de la lista para hacer la conversion.
temperaturasCelsius[2] = (temperaturasFarenheit[2]-32) * 5/9;
temperaturasCelsius[3] = (temperaturasFarenheit[3]-32) * 5/9;
temperaturasCelsius[4] = (temperaturasFarenheit[4]-32) * 5/9;
temperaturasCelsius[5] = (temperaturasFarenheit[5]-32) * 5/9;
temperaturasCelsius[6] = (temperaturasFarenheit[6]-32) * 5/9;
temperaturasCelsius[7] = (temperaturasFarenheit[7]-32) * 5/9;
temperaturasCelsius[8] = (temperaturasFarenheit[8]-32) * 5/9;
temperaturasCelsius[9] = (temperaturasFarenheit[9]-32) * 5/9;
temperaturasCelsius[10] = (temperaturasFarenheit[10]-32) * 5/9;
temperaturasCelsius[11] = (temperaturasFarenheit[11]-32) * 5/9;

console.log(temperaturasCelsius);

let tempPromAnualCelcius;
tempPromAnualCelcius = (temperaturasCelsius[0] + temperaturasCelsius [1] + 
    temperaturasCelsius [2]+ temperaturasCelsius [3] + 
    temperaturasCelsius [4] + temperaturasCelsius [5] +
    temperaturasCelsius [6] + temperaturasCelsius [7] + 
    temperaturasCelsius [8] + temperaturasCelsius [9] + 
    temperaturasCelsius [10] + temperaturasCelsius [11]) / 12;

console.log(tempPromAnualCelcius);
