// Inicializa el contador para numerar cada canción agregada a la tabla
let contador = 1;

// Oculta la imagen de portada al cargar la página (se mostrará al reproducir una canción)
document.getElementById("coverImage").style.display = "none";

// Agrega un listener al formulario con ID "musicForm" que se activa al enviar
document.getElementById("musicForm").addEventListener("submit", function (e) {
  // Previene el comportamiento por defecto del formulario (evita recargar la página)
  e.preventDefault();

  // Obtiene los valores ingresados por el usuario en los campos del formulario
  const cancion = document.getElementById("cancion").value;
  const cantante = document.getElementById("cantante").value;
  const discografica = document.getElementById("discografica").value;
  const duracion = document.getElementById("duracion").value;
  const nacionalidad = document.getElementById("nacionalidad").value;

  // Selecciona el cuerpo de la tabla donde se agregará la nueva fila
  const tabla = document.querySelector("#tablaMusica tbody");

  // Crea una nueva fila para insertar los datos de la canción
  const fila = document.createElement("tr");

  // Define el contenido HTML de la fila con los datos de la canción y un botón para reproducir
  fila.innerHTML = `
    <td>${contador}</td>              
    <td>${cancion}</td>                <!-- Nombre de la canción -->
    <td>${cantante}</td>               <!-- Nombre del cantante -->
    <td>${discografica}</td>           <!-- Discográfica -->
    <td>${duracion}</td>               <!-- Duración de la canción -->
    <td>${nacionalidad}</td>           <!-- Nacionalidad del artista -->
    <td><button class="btn-play">Dale Play!</button></td> <!-- Botón para reproducir -->
  `;

  // Agrega funcionalidad al botón "Dale Play!" para mostrar información y la imagen
  fila.querySelector(".btn-play").addEventListener("click", function () {
    // Construye el mensaje con los datos de la canción para confirmar reproducción
    const mensaje = 
      `INFORMACIÓN DE LA CANCIÓN:\n\n` +
      `Canción: ${cancion}\n` +
      `Cantante: ${cantante}\n` +
      `Discográfica: ${discografica}\n` +
      `Duración: ${duracion}\n` +
      `Nacionalidad: ${nacionalidad}\n\n` +
      `¿Deseas reproducir esta canción?`;

    // Muestra una ventana de confirmación al usuario
    const confirmar = window.confirm(mensaje);

    // Si el usuario confirma, se muestra la información y la imagen de portada
    if (confirmar) {
      const infoCancion = document.getElementById("infoCancion");
      const coverImage = document.getElementById("coverImage");

      // Muestra el nombre de la canción y el cantante con estilo destacado
      infoCancion.innerText = `${cancion} por ${cantante}`;
      infoCancion.style.fontSize = "24px";
      infoCancion.style.color = "#28a745"; // Verde para resaltar

      // Muestra la imagen de portada con estilo centrado y tamaño definido
      coverImage.style.display = "block";
      coverImage.style.width = "200px";
      coverImage.style.margin = "20px auto";
    }
  });

  // Inserta la fila en la tabla
  tabla.appendChild(fila);

  // Incrementa el contador para la próxima canción
  contador++;

  // Limpia el formulario para permitir una nueva entrada
  this.reset();
});


