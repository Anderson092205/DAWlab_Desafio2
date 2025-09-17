// Inicializa un contador para numerar cada entrada de libro en la tabla
let contador = 1;

// Agrega un listener al formulario con ID "bookForm" que se activa al enviar
document.getElementById("bookForm").addEventListener("submit", function (e) {
  // Previene el comportamiento por defecto del formulario (recargar la página)
  e.preventDefault();

  // Obtiene los valores ingresados por el usuario en los campos del formulario
  const autor = document.getElementById("autor").value;
  const titulo = document.getElementById("titulo").value;
  const editorial = document.getElementById("editorial").value;
  const edicion = document.getElementById("edicion").value;
  const pais = document.getElementById("pais").value;

  // Construye un mensaje con los datos ingresados para mostrar al usuario
  const mensaje =
    `InfoBook.autor = ${autor}\n` +
    `InfoBook.titulo = ${titulo}\n` +
    `InfoBook.editorial = ${editorial}\n` +
    `InfoBook.edicion = ${edicion}\n` +
    `InfoBook.pais = ${pais}\n\n¿Es esta información correcta?`;

  // Muestra una ventana de confirmación con el mensaje
  const confirmar = window.confirm(mensaje);

  // Si el usuario confirma que los datos son correctos...
  if (confirmar) {
    // Selecciona el cuerpo de la tabla donde se agregarán los libros
    const tabla = document.querySelector("#tablaAutores tbody");

    // Crea una nueva fila para insertar los datos del libro
    const fila = document.createElement("tr");

    // Define el contenido HTML de la fila con los datos del libro y un botón para eliminar
    fila.innerHTML = `
      <td>${contador}</td>           <!-- Número de entrada -->
      <td>${titulo}</td>             <!-- Título del libro -->
      <td>${autor}</td>              <!-- Autor del libro -->
      <td>${editorial}</td>          <!-- Editorial -->
      <td>${edicion}</td>            <!-- Edición -->
      <td>${pais}</td>               <!-- País de publicación -->
      <td><button class="btn-eliminar">Eliminar</button></td> <!-- Botón para eliminar la fila -->
    `;

    // Agrega funcionalidad al botón "Eliminar" para quitar la fila de la tabla
    fila.querySelector(".btn-eliminar").addEventListener("click", function () {
      fila.remove(); // Elimina la fila actual del DOM
    });

    // Inserta la fila en la tabla
    tabla.appendChild(fila);

    // Incrementa el contador para la próxima entrada
    contador++;

    // Limpia el formulario para permitir una nueva entrada
    this.reset();
  }
});


