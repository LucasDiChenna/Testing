/*const guachos = require ("./Datitos");
console.log(guachos);*/

/* Probando el setTimeout barrilete cosmico
setTimeout(function(){console.log("Goooooool")}, 3000);

setTimeout(function(){console.log("Genio")}, 800);

setTimeout(function(){console.log("Genio")}, 1400);
setTimeout(function(){console.log("Genio")}, 300);
setTimeout(function(){console.log("Ta ta ta ta ta")}, 2000);*/

function nombreCompleto(nombre, apellido){
    return nombre + " " + apellido
}
console.log(nombreCompleto("Rey","Naldo"));
function saludar(nombre, apellido, callback){
    return "Hola " + callback(nombre, apellido)+ "!";
}
console.log(saludar("Pin", "Pon", nombreCompleto));
/*

function ponerInicial (nombre, apellido){
    return nombre[0] + ". " + apellido;
}

function pasarLista (nombre, apellido, callback){
    return callback(nombre, apellido) + ", está presente?";
}
console.log(pasarLista("Lucas","Di Chenna",ponerInicial));

let doble = num => num*2;
let triple = num => num*3;
let aplicarCallback = (num, callback) => callback(num); 

console.log(aplicarCallback(3,triple));
*/
function agregarHttp(url) {
    return "http://" + url;
}

function procesar(array,callback){
    let array1 =[];
    for(let i=0;i<array.length;i++){
        cambio = (callback(array[i]));
       array1.push(cambio) ;

    } return array1;
}
let AM = ["Tu ere la numero uno","Como tu no hay do","Con la cama somo tre","Porque no nos comemo"]

AM = AM.map(function(url){
    url=agregarHttp(url);
    return url;
});

// Esto es clave, un pequeño paso para el hombre, un gran salto para la humanidad, desafio

function procesarv2(array){
   let nuevaURL = [];
   array.map(function(url){
       url=agregarHttp(url)
        nuevaURL.push(url)}) 
        return nuevaURL;
}
function procesarv3(array){
    array= array.map(function(url){
        url=agregarHttp(url)
         return url}) 
         return array;
 }
function procesarv4(array){
    let lista= [];
    array= array.forEach(function(url){
       url= agregarHttp(url);
        lista.push(url);
         return url;}) 
  
         return lista;
 }

console.log(procesar(["Hola","Chau"], agregarHttp));
console.log(procesarv2(["Hola","Chau"]));
//console.log(AM);
console.log(procesarv2(["enanosyfuriosos.com","tuco tuqui.com","dale.com.ar"]));
console.log(procesarv3(["locuraenmerlo.com","soquetedoble.com","biiiisssss"]));
console.log(procesarv4(["baratija.com","DEUNA.com","ahquepiola.gov"]));
