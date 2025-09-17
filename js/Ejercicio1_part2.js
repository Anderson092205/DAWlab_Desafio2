let contador = 1;

document.getElementById("coverImage").style.display = "none"; // Ocultar imagen al inicio

document.getElementById("musicForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const cancion = document.getElementById("cancion").value;
  const cantante = document.getElementById("cantante").value;
  const discografica = document.getElementById("discografica").value;
  const duracion = document.getElementById("duracion").value;
  const nacionalidad = document.getElementById("nacionalidad").value;

  const tabla = document.querySelector("#tablaMusica tbody");
  const fila = document.createElement("tr");

  fila.innerHTML = `
    <td>${contador}</td>
    <td>${cancion}</td>
    <td>${cantante}</td>
    <td>${discografica}</td>
    <td>${duracion}</td>
    <td>${nacionalidad}</td>
    <td><button class="btn-play">Dale Play!</button></td>
  `;

  fila.querySelector(".btn-play").addEventListener("click", function () {
    const mensaje = 
      `INFORMACIÓN DE LA CANCIÓN:\n\n` +
      `Canción: ${cancion}\n` +
      `Cantante: ${cantante}\n` +
      `Discográfica: ${discografica}\n` +
      `Duración: ${duracion}\n` +
      `Nacionalidad: ${nacionalidad}\n\n` +
      `¿Deseas reproducir esta canción?`;

    const confirmar = window.confirm(mensaje);

    if (confirmar) {
      const infoCancion = document.getElementById("infoCancion");
      const coverImage = document.getElementById("coverImage");

      infoCancion.innerText = `${cancion} por ${cantante}`;
      infoCancion.style.fontSize = "24px";
      infoCancion.style.color = "#28a745";

      coverImage.style.display = "block";
      coverImage.style.width = "200px";
      coverImage.style.margin = "20px auto";
    }
  });

  tabla.appendChild(fila);
  contador++;
  this.reset();
});

