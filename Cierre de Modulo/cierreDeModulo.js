//const autos = require("./autos");

/* Me apuré a buscar y filtrar
const autos = require("./autos");
const concesionaria = {
   buscarPatente: function (patente){
       let listaAutos = [];
    for(const indice of autos){
        if(indice.patente == patente){ 
         listaAutos.push(indice);
         return listaAutos;  } 
}
      }
     
    
};
*/

const autos = require("./autos");
const concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
              for(const indice of autos){
           if(indice.patente == patente){ 
            
            return indice;} 
   }return null;},
   venderAuto: function(patente){

       this.buscarAuto(patente).vendido = true;
   },
   autosParaLaVenta: function(){
              let autosParaLaVenta = autos.filter(auto => auto.vendido == false);
       return autosParaLaVenta;
   },
   autosNuevos: function(){
    let autosNuevos = this.autosParaLaVenta().filter(auto => auto.km <100);

    return autosNuevos;
   },
   listaDeVentas: function(){
    let autosVendidos = autos.filter(auto => auto.vendido !== false);
       return autosVendidos.map(function(auto){
       return auto.precio;
       });
       ;},
    totalDeVentas: function(){
        let totalDeVentas = 0;
        if (this.listaDeVentas().length <=0){return 0} else{ 
       return this.listaDeVentas().reduce(function(total, venta){
            return total + venta;
            
        }) }  }   
   };

// console.log(concesionaria.buscarPatente("APL123"));
/*console.log(concesionaria.buscarAuto("APL123"));
concesionaria.venderAuto("APL123");
console.log(concesionaria.buscarAuto("APL123"));
*/
//console.log(concesionaria.autosParaLaVenta());
//console.log(concesionaria.autosNuevos());
//console.log(concesionaria.listaDeVentas());
console.log(concesionaria.totalDeVentas());