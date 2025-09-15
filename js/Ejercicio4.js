// === Función para resaltar el campo cuando recibe foco ===
// Se aplica un estilo visual para indicar que el usuario está escribiendo
function resaltar(campo) {
  campo.style.backgroundColor = "#eef6ff";
}

// === Validación de nombre con expresión regular ===
// Acepta letras, espacios y algunos acentos
function validarNombre(campo) {
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,}$/;
  if (regex.test(campo.value.trim())) {
    campo.classList.remove("error");
    campo.classList.add("correcto");
  } else {
    campo.classList.remove("correcto");
    campo.classList.add("error");
  }
}

// === Validación de correo electrónico ===
// Verifica formato estándar de email
function validarCorreo(campo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(campo.value.trim())) {
    campo.classList.remove("error");
    campo.classList.add("correcto");
  } else {
    campo.classList.remove("correcto");
    campo.classList.add("error");
  }
}

// === Validación de texto obligatorio (asunto y mensaje) ===
// Verifica que el campo no esté vacío
function validarTexto(campo) {
  if (campo.value.trim().length > 0) {
    campo.classList.remove("error");
    campo.classList.add("correcto");
  } else {
    campo.classList.remove("correcto");
    campo.classList.add("error");
  }
}

// === Validación de archivo adjunto ===
// Solo permite .jpg, .png, .pdf y .docx
function validarArchivo(campo) {
  const archivo = campo.files[0];
  if (!archivo) {
    campo.classList.add("error");
    campo.classList.remove("correcto");
    return;
  }

  const tiposPermitidos = [
    "image/jpeg",
    "image/png",
    "application/pdf",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];

  if (tiposPermitidos.includes(archivo.type)) {
    campo.classList.remove("error");
    campo.classList.add("correcto");
  } else {
    campo.classList.remove("correcto");
    campo.classList.add("error");
  }
}

// === Validación general al enviar el formulario ===
// Si todo está correcto, se muestra la pantalla de resumen
function validarFormulario() {
  // Validar todos los campos manualmente
  validarNombre(document.getElementById("nombreDe"));
  validarCorreo(document.getElementById("correoDe"));
  validarNombre(document.getElementById("nombrePara"));
  validarCorreo(document.getElementById("correoPara"));
  validarNombre(document.getElementById("nombreCC"));
  validarCorreo(document.getElementById("correoCC"));
  validarNombre(document.getElementById("nombreCCO"));
  validarCorreo(document.getElementById("correoCCO"));
  validarTexto(document.getElementById("asunto"));
  validarTexto(document.getElementById("mensaje"));
  validarArchivo(document.getElementById("archivo"));

  // Verificar si hay algún campo con clase "error"
  const errores = document.querySelectorAll(".error");
  if (errores.length > 0) {
    alert("Por favor corrija los campos marcados en rojo.");
    return false; // Evita el envío
  }

  // Si todo está bien, mostrar resumen
  mostrarResumen();
  return false; // Evita recargar la página
}

// === Mostrar pantalla de resumen con los datos ingresados ===
// Construye una vista con todos los datos del formulario
function mostrarResumen() {
  const resumen = document.getElementById("resumen");
  const formulario = document.getElementById("formCorreo");
  const datos = document.getElementById("datosResumen");

  // Oculta el formulario y muestra el resumen
  formulario.style.display = "none";
  resumen.style.display = "block";

  // Extrae los valores de los campos
  const nombreDe = document.getElementById("nombreDe").value;
  const correoDe = document.getElementById("correoDe").value;
  const nombrePara = document.getElementById("nombrePara").value;
  const correoPara = document.getElementById("correoPara").value;
  const nombreCC = document.getElementById("nombreCC").value;
  const correoCC = document.getElementById("correoCC").value;
  const nombreCCO = document.getElementById("nombreCCO").value;
  const correoCCO = document.getElementById("correoCCO").value;
  const asunto = document.getElementById("asunto").value;
  const mensaje = document.getElementById("mensaje").value;
  const archivo = document.getElementById("archivo").files[0];

  // Construye el contenido del resumen
  datos.innerHTML = `
    <p><strong>De:</strong> ${nombreDe} &lt;${correoDe}&gt;</p>
    <p><strong>Para:</strong> ${nombrePara} &lt;${correoPara}&gt;</p>
    <p><strong>CC:</strong> ${nombreCC} &lt;${correoCC}&gt;</p>
    <p><strong>CCO:</strong> ${nombreCCO} &lt;${correoCCO}&gt;</p>
    <p><strong>Asunto:</strong> ${asunto}</p>
    <p><strong>Mensaje:</strong><br>${mensaje.replace(/\n/g, "<br>")}</p>
    <p><strong>Archivo adjunto:</strong> ${archivo.name}</p>
  `;
}

// === Botón para volver al formulario ===
// Permite regresar y editar el contenido
function volver() {
  document.getElementById("formCorreo").style.display = "block";
  document.getElementById("resumen").style.display = "none";
}