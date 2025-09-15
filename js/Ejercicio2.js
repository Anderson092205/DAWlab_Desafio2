// === Navegación entre secciones ===
// Este bloque permite cambiar entre las pestañas CPU, Memoria, Disco y Ethernet
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;

    // Oculta todas las secciones
    document.querySelectorAll('.tab-content').forEach(section => {
      section.classList.remove('active');
    });

    // Muestra solo la sección seleccionada
    document.getElementById(tab).classList.add('active');
  });
});

// === Cambio de tema claro/oscuro ===
// Este botón alterna entre modo claro y oscuro para mejorar la visualización
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');
});

// === Simulación dinámica de métricas cada 2 segundos ===
// Este bloque actualiza los valores de rendimiento simulados en tiempo real
setInterval(() => {
  // === CPU ===
  const usoCPU = Math.floor(Math.random() * 100); // Valor entre 0 y 100
  const velocidadCPU = (1.2 + Math.random() * 2).toFixed(2); // Entre 1.2 y 3.2 GHz

  document.getElementById('cpu-uso').textContent = `${usoCPU}%`;
  document.getElementById('cpu-velocidad').textContent = `${velocidadCPU} GHz`;
  document.getElementById('barra-cpu').style.width = `${usoCPU}%`; // Actualiza la barra

  // === Memoria ===
  const usoMem = Math.floor(Math.random() * 100);
  const disponibleMem = (8 + Math.random() * 24).toFixed(1); // Entre 8 y 32 GB

  document.getElementById('mem-uso').textContent = `${usoMem}%`;
  document.getElementById('mem-disponible').textContent = `${disponibleMem} GB`;
  document.getElementById('barra-memoria').style.width = `${usoMem}%`;

  // === Disco ===
  const lecturaDisco = (Math.random() * 100).toFixed(2);
  const escrituraDisco = (Math.random() * 100).toFixed(2);
  const actividadDisco = Math.floor((parseFloat(lecturaDisco) + parseFloat(escrituraDisco)) / 2);

  document.getElementById('disco-lectura').textContent = `${lecturaDisco} KB/s`;
  document.getElementById('disco-escritura').textContent = `${escrituraDisco} KB/s`;
  document.getElementById('barra-disco').style.width = `${actividadDisco}%`;

  // === Ethernet ===
  const enviadoEth = (Math.random() * 100).toFixed(1);
  const recibidoEth = (Math.random() * 100).toFixed(1);
  const actividadEth = Math.floor((parseFloat(enviadoEth) + parseFloat(recibidoEth)) / 2);

  document.getElementById('eth-enviado').textContent = `${enviadoEth} Kbps`;
  document.getElementById('eth-recibido').textContent = `${recibidoEth} Kbps`;
  document.getElementById('barra-ethernet').style.width = `${actividadEth}%`;
}, 2000); // Se actualiza cada 2 segundos

// === Validación de IP con expresión regular ===
// Este bloque verifica si la IP ingresada es válida según el formato IPv4
document.getElementById('validarIp').addEventListener('click', () => {
  const ip = document.getElementById('ipInput').value;
  const resultado = document.getElementById('resultadoValidacion');

  // Expresión regular para validar IPv4 (ej. 192.168.0.1)
  const regex = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;

  // Muestra el resultado en pantalla
  if (regex.test(ip)) {
    resultado.textContent = "✅ IP válida";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ IP inválida";
    resultado.style.color = "red";
  }
});
// === Fin del JS ===