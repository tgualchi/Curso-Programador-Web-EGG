const formulario = document.getElementById("contactForm");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario(e) {
  e.preventDefault();
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
    formulario.submit();
  }
}

formulario.addEventListener("submit", validarFormulario);
