/* Prueba de objetos a mano


let Luko = {
    nombre: "Lucas",
edad: 23,
profesion: "Administración",
laburaen: function(){
    return "Labura en " + this.profesion;
}
}
let Joak = {
    nombre: "Joaquín",
    edad: 24,
    profesion: "Pintor",
    laburaen: function(){
        return "Labura en " + this.profesion;
    }
}
let Basa = {
    nombre: "Rodrigo",
    edad: 23,
    profesion: "Cra",
    laburaen: function(){
        return "Labura en " + this.profesion;
    }
}
*/
let Juanjo = {
    nombre: "Juan Ignacio",
    edad: 24,
    profesion: "Peluquero",
    equipo: "La academia Racing Club",
    laburaen: function(){
        return "Labura en " + this.profesion;
    }
}
/*
function laburante(nombre){
    return "Labura en " + nombre.profesion}


let lukoJSON = JSON.stringify(Luko);
console.log(lukoJSON);
//console.log(lukoJSON.slice(-15));
//console.log(lukoJSON.split(","));
let futuroProg = lukoJSON.replace("Administración","Programación?");
console.log(futuroProg);


console.log(Joak.laburaen());
console.log(laburante(Basa));*/

function Pibes(nombre,edad,profesion,equipo){
this.nombre = nombre;
this.edad =edad;
this.profesion=profesion;
this.equipo=equipo;
}

let lucas = new Pibes("Lucas",23,"Administración","Bokita");
let rodri = new Pibes("Rodri",23,"Cra","Bokita");
//console.log(lucas.equipo);
console.log(Pibes);


let guachos = [];
guachos.push(lucas);
guachos.push(rodri);
console.log(guachos);

module.exports = guachos;
/* Solo se puede exportar uno solo, vemo
module.exports = rodri;
module.exports = Juanjo;
*/ 