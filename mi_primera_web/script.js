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

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});