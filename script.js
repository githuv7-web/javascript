/* Punto numero 1 de la guia de javaScript (D)*/
const producto = prompt("¿Que producto compraste?");
const precio = prompt("¿Cual es el precio de un producto?");
const cantidad = prompt("¿Cuantos productos compraste?");

const total = Number(precio) * Number(cantidad)

console.log("El total a pagar por " + cantidad + " " +  producto + "S es: " + total.toFixed(2));

/* Punto numero 2 de la guia javaScript  (D)*/
const horas =prompt("¿Cuantas horas trabaste?")
const valorH =prompt ("¿Cual es el valor por hora de trabajo?")

const salarioSem = Number (horas )* Number(valorH)

console.log("Tu salario semanal es: " + salarioSem)

/* Punto numero 3 de la guia javaScript (D) */
const edad1 = prompt("Ingresa la edad de la persona 1:");
const edad2 = prompt("Ingresa la edad de la persona 2:");
const edad3 = prompt("Ingresa la edad de la persona 3:");
const edad4 = prompt("Ingresa la edad de la persona 4:");


const promedio = (Number(edad1) + Number(edad2) + Number(edad3) + Number(edad4)) / 4;

console.log(`El promedio de edad de las 4 personas es: ${promedio} años.`);



/* Punto 4 de la guia de javascript (D) */


const kmRecorridos = prompt("¿Cuántos kilómetros recorriste?");
const consumoPorKm = prompt("¿Cuál es el consumo por kilómetro (litros/km)?");


const litrosTotales = Number(kmRecorridos) * Number(consumoPorKm);

console.log(`Para recorrer ${kmRecorridos} km, el consumo total es de ${litrosTotales.toFixed(2)} litros.`);