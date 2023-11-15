//alert("Hola este es mi Javascript");

let nombreApellido = "Flora Gualchi";
let estudio = "Desarrollador Web";
let lugarDeEstudio = "EGG";

let parrafo2 = document.querySelector( ".parrafo2");
let parrafo1 = document.querySelector( ".parrafo1");

function cambiarTexto ( estudio, lugarDeEstudio){
    let contenido = `Estoy realizando el curso de ${estudio} desde o en la
    plataforma ${lugarDeEstudio} .`;

  return contenido;

}

function cambiarTexto1 (nombreApellido) {
    let contenido = `Mi nombre es ${nombreApellido}`;

    return contenido;  
}

parrafo2.innerText = cambiarTexto (estudio, lugarDeEstudio);
parrafo1.innerText = cambiarTexto1 (nombreApellido);