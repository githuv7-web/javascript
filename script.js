/*este es el primer programa el cual nos arroja el nombre y la edad le solicitamos el nombre 
y la edad luego concatenamos y mostramos en pantalla use el alert para ir ejecutando uno por uno y mostrar 
el resultado en pantalla darle aceptar y seguir con el siguiente para crear un solo js y con el console.long 
tenia que usar f12 para ver el resultado aparte para ver el resultado tenia que escibir todos los datos primero 
para hay si despues mirar los resultado sde todo no cada uno de manera independiente   */


let nombre = prompt("¿cual es tu nombre ?");

let lll = prompt("¿cual es tu edad?");

alert("hola " +" "+ nombre +" " +"tu edad es " + lll +  " años ");

// AREA//
/* Todos los programas que realizamos son sencillos varia es el calculo o operacion la cual hay que realizar 
para este punto en especifico no se paso el numero a Number al pedir los datos de base y altura ya que al ser multiplicacion el sistema 
lo que hace es transformarlos de manera automatica a diferencia de la suma la cual si lo que generaria es la agrupacion de etos numeros
si no se declaran como Number ya que el + sirve tambien para concatenar texto con resutados */ 

let base = prompt("ESCRIBE LA BASE DEL TRIANGULO");
let altura = prompt ("ESCRIBE LA ALTURA DEL TRIANGULO");

let area = base * altura ;

alert("EL AREA DEL TRIANGULO ES " + area );


// calificaciones //
/*Lo que deciamos del punto anterior en este caso tuvimos que declarar los numeros de las notas como Number 
ya que al tratar de sumarlos el programa lo que iba a hacer en caso de que las notas ingresadas fueran  7 + 7 + 7 = 777
nos arrojaria de esta manera ya que en ves de realizar la suma nos estaria concatenando los trres numeros que se encuenran en las 
variables  */

let nota = Number(prompt("ESCRIBE LA PRIMER NOTA "));
let nota1 = Number(prompt("ESCRIBE LA SEGUNDA NOTA"));
let nota2 = Number(prompt("ESCRIBE LA TERCERA NOTA "));


let total = nota + nota1 + nota2 ;
let promedio = total / 3 ;

alert("SU PROMEDIO DE LAS TRES NOTAS ES " + promedio );


//CONVERSOR DE MONEDA COLOMBIANA A DOLARES //

/* aqui lo que hacemos es guardar el dato de la cantidad a convertir y luego hacemos un calculo simple
al saber el precio del dolar todo numero escrito por el usuario lo dividimos en 4000 y nos dara el valor 
que tenemos en dolares, en un programa real esto seria ineficiente ya que el valor de la moneda del dolar 
varia muy constantemente y el dato recibido seria erroneo   */


let moneda = Number(prompt("ESCRIBE LA CANTIDAD EN PESOS COLOMBIANOS "));

let tota = moneda / 4000 ;

alert("SU CANTIDAD EN DOLARES ES " + tota  + " DOLARES" );


//CONVERSOR DE TEMPERATURA //

/*aca realizamor un conversor de temperatura en el cual declaramos como Number al dato recibido por el usuario ya que vamos a 
a hacer una suma al tener la operacion matematicas del calculo de conversor realizamos la operacion en far y la imprimimos  */


let grados = Number(prompt("ESCRIBE LOS GRADOS CELSIUS A CONVERTIR "));
let far = grados * 1.8 + 32 ;

alert("LA CONVERSION DE GRADOS ES =" + far);


// PERIMETRO //
/* la ecuacion para allar el perimetro de un cuadrado es igual a la longitud
 por 4 ya que los lados del cuadrado son de la misma distancia */

let perimetro = prompt("ESCRIBE LA LONGITUD DEL CUADRADO");
let totale = perimetro * 4 ;

alert("EL PERIMETRO DEL CUADRADO ES: " + totale);


//MULTIPLICACION//
/* Aca guardamos la nota en numero y luego hacemos una multiplicacion en dos variables
 de manera individual en el cual uno lo multiplicamos por 2 y el otro por 3 y mostramos el resultado de la misma
 manera de forma individual aunque se podria en conjunto*/

let numero = Number(prompt("ESCRIBE TU NUMERO A MULTIPLICAR "));

let multiplicacion = numero * 2 ;
let multi = numero * 3 ;

alert("TU NUMERO MULTIPLICADO POR 2 ES = "  + multiplicacion);
alert("TU NUMERO MULTIPLICADO POR 3 ES = "  + multi);

