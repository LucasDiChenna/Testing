//Arranque a probar esto con lo anterior que hacia la misma tarea y dividi

//const { log } = require("console");

function agregarHttp(url) {
    return "http://" + url;
}

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

 
 
 //console.log(procesar(["Hola","Chau"], agregarHttp));
 console.log(procesarv2(["Hola","Chau"]));
 //console.log(AM);
 console.log(procesarv2(["enanosyfuriosos.com","tuco tuqui.com","dale.com.ar"]));
 console.log(procesarv3(["locuraenmerlo.com","soquetedoble.com","biiiisssss"]));
 console.log(procesarv4(["baratija.com","DEUNA.com","ahquepiola.gov"]));
 