let altura = 1.93;

let hegemonia = altura<1.80? "No hegemónico": "Hegemónico";

console.log(hegemonia);

//const lucas = require("./Datitos");

/* Acá creo que sólo uno se puede a la vez
const rodri = require("./Datitos");
const Juanjo = require("./Datitos");*/


/*
let delMasGrande = this.equipo == "Bokita" ? "Bokeeee": "Amargo";

console.log(delMasGrande);
console.log(Pibes.nombre);
Prueba falopa*/

/*

let delMasGrandeVenganza = persona => {
    return persona.equipo=="Bokita"? "Dale boooo": "Hinchadas Unidas";
    }

console.log(delMasGrandeVenganza(lucas));

let esCra = persona => {
    return persona.profesion == "Cra" ? "Es el rodri tonce": "Somo losotro";
}
console.log(esCra(lucas));

let mayorDeEdad = (edad, nacionalidad) => { return (edad>=18 && nacionalidad =="argentino" || edad>=21 && nacionalidad=="yankee")? "Es mayor":"No es mayor"}
console.log(mayorDeEdad(21,"yankee"));

// Switch
*/
let cancion = "Yo sé";
cancion = "Guarda que vengo";

switch(cancion){
    case "Yo sé":
        console.log("Que soy pesado y celoso");
        break;
        case "Guarda que vengo":
            console.log("Me levanto temprano, me rasco la gallina, me prendo un cigarro, destapo una birra");
            break;
            default:
                console.log("Falta el nombre de la canción");
                break;
}

let color = "Rojo";

switch(color){
    case "Rojo":
    case "Azul":
    case "Amarillo":
    console.log("Es color primario");
    break;
    default:
        console.log("No es color primario");
}
/*

*/
let dia = 'viernes';
switch (dia) {	
	case 'viernes':
    	console.log('buen finde');
		break;
case 'lunes':
    	console.log('buena semana');
		break;
default:
    	console.log('buen dia');
}