let contador = 1;

document.getElementById("bookForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const autor = document.getElementById("autor").value;
  const titulo = document.getElementById("titulo").value;
  const editorial = document.getElementById("editorial").value;
  const edicion = document.getElementById("edicion").value;
  const pais = document.getElementById("pais").value;

  const mensaje =
    `InfoBook.autor = ${autor}\n` +
    `InfoBook.titulo = ${titulo}\n` +
    `InfoBook.editorial = ${editorial}\n` +
    `InfoBook.edicion = ${edicion}\n` +
    `InfoBook.pais = ${pais}\n\n¿Es esta información correcta?`;

  const confirmar = window.confirm(mensaje);

  if (confirmar) {
    const tabla = document.querySelector("#tablaAutores tbody");
    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${contador}</td>
      <td>${titulo}</td>
      <td>${autor}</td>
      <td>${editorial}</td>
      <td>${edicion}</td>
      <td>${pais}</td>
      <td><button class="btn-eliminar">Eliminar</button></td>
    `;

    fila.querySelector(".btn-eliminar").addEventListener("click", function () {
      fila.remove();
    });

    tabla.appendChild(fila);
    contador++;
    this.reset();
  }
});

