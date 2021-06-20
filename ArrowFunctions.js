/* Pruebas de arrow functions propias, para probar

let multiplicar = (num1,num2) => num1*num2;
console.log(multiplicar(2,3));

let ensalada = (ade1,ade2) => "Hoy hay ensalada de " + ade1 + " y " + ade2;

console.log(ensalada("tomate","huevo"));

let queOnda = () => "Buenaaaas, qué onda?";

console.log(queOnda());

let saludo = nombre => "Hola! Como estás, " + nombre + "?";
console.log(saludo("Guachín"));

let abrigarse = temp => {
    if (temp>20){
        return "Tranca, shorcito y remerita, de una";
    }else{
return "Abrigate pancho, que hace frío";
    }
}

console.log(abrigarse(21));
 */
/* Esto es para probar el Date() que apareció en un powerpoint, tá tremendo
let horaActual = () => {
    let fecha = new Date();

    return fecha.getHours() + ":" + fecha.getMinutes();
}

console.log(horaActual());
console.log(Date());
*/
dameCinco = () => [1,2,3,4,5];
console.log(dameCinco());
multiplicarPorDos =() => 123 * 2 ;
console.log(multiplicarPorDos());
mostrarNombre = () => "Mi nombre es Hernán";
console.log(mostrarNombre());


// Prueba del if ternario con arrow function
let abrigarse = temp => {
    return temp>20? "Tranca, shorcito y remerita, de una": "Abrigate pancho, que hace frío";
    }

console.log(abrigarse(20));