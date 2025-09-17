const palabrasInfo = {
  'Ser': 'Existir o tener una cualidad o identidad.',
  'Estar': 'Hallarse en un lugar, situación o estado.',
  'Tener': 'Poseer algo, ya sea un objeto o una cualidad.',
  'Hacer': 'Realizar una acción o fabricar algo.',
  'Ir': 'Moverse de un lugar a otro.',
  'Poder': 'Ser capaz o tener la facultad para hacer algo.',
  'Saber': 'Tener conocimiento sobre algo.',
  'Decir': 'Expresar algo con palabras.',
  'Ver': 'Percibir algo con la vista.',
  'Querer': 'Desear algo o a alguien.',
  'Hablar': 'Articular sonidos para comunicarse.',
  'Dar': 'Entregar algo a otra persona.',
  'Poner': 'Colocar algo en un lugar.',
  'Venir': 'Acercarse al lugar donde se encuentra el hablante.',
  'Llamar': 'Pronunciar el nombre de una persona para que atienda.',
  'Comer': 'Ingerir alimentos.',
  'Beber': 'Ingerir líquidos.',
  'Dormir': 'Estar en estado de reposo inconsciente.',
  'Entender': 'Comprender el significado de algo.',
  'Llegar': 'Alcanzar un destino.',
  'Empezar': 'Iniciar una acción o proceso.',
  'Terminar': 'Dar fin o concluir algo.',
  'Persona': 'Ser humano, individuo.',
  'Hombre': 'Ser humano de sexo masculino.',
  'Mujer': 'Ser humano de sexo femenino.',
  'Niño': 'Persona que se encuentra en la infancia.',
  'Amigo': 'Persona con la que se tiene una relación de amistad.',
  'Familia': 'Conjunto de personas unidas por lazos de parentesco.',
  'Casa': 'Edificio o construcción destinada a la vivienda.',
  'Ciudad': 'Población grande y con gran cantidad de habitantes.',
  'País': 'Territorio geográfico que constituye una nación.',
  'Mundo': 'El planeta Tierra.',
  'Día': 'Período de 24 horas.',
  'Noche': 'Período de oscuridad.',
  'Semana': 'Período de siete días consecutivos.',
  'Tiempo': 'La duración de las cosas sujetas a cambio.',
  'Agua': 'Líquido transparente e incoloro, esencial para la vida.',
  'Comida': 'Cualquier sustancia comestible.',
  'Dinero': 'Medio de pago y de intercambio.',
  'Trabajo': 'Actividad que se realiza para obtener un beneficio.',
  'Coche': 'Vehículo para transportarse.',
  'Libro': 'Conjunto de hojas unidas con un texto escrito.',
  'Color': 'Cualidad de la luz que el ojo percibe.',
  'Parte': 'Porción de un todo.',
  'Problema': 'Cuestión que requiere una solución.',
  'Grande': 'Que tiene un tamaño considerable.',
  'Pequeño': 'Que tiene un tamaño reducido.',
  'Bueno': 'Que tiene valor positivo o que es de calidad.',
  'Malo': 'Que tiene un valor negativo o que carece de calidad.',
  'Nuevo': 'Que se usa por primera vez.',
  'Viejo': 'Que tiene mucha edad o mucho tiempo.',
  'Alto': 'Que tiene una altura o estatura considerable.',
  'Bajo': 'Que tiene poca altura o estatura.',
  'Feliz': 'Que se siente alegre.',
  'Triste': 'Que siente pena o melancolía.',
  'Fácil': 'Que no presenta dificultad para ser realizado.',
  'Difícil': 'Que requiere esfuerzo o habilidad para ser realizado.',
  'Rápido': 'Que se mueve a gran velocidad.',
  'Lento': 'Que se mueve con poca velocidad.',
  'Caliente': 'Que tiene una temperatura elevada.',
  'Frío': 'Que tiene una temperatura baja.',
  'Cansado': 'Que siente falta de energía o fatiga.',
  'Fuerte': 'Que tiene gran fuerza física.',
  'Débil': 'Que tiene poca fuerza.',
  'Amable': 'Que se comporta de manera agradable y cortés.',
  'Aquí': 'En este lugar.',
  'Ahora': 'En este momento.',
  'Hoy': 'En el día presente.',
  'Ayer': 'En el día anterior a hoy.',
  'Siempre': 'En todo momento.',
  'Nunca': 'En ningún momento.',
  'Mucho': 'En gran cantidad.',
  'Poco': 'En pequeña cantidad.',
  'Bien': 'De manera correcta o satisfactoria.',
  'Mal': 'De manera incorrecta o insatisfactoria.',
  'Sí': 'Expresión para afirmar algo.',
  'No': 'Expresión para negar algo.',
  'Con': 'Indica compañía o medio.',
  'Sin': 'Indica ausencia o falta de algo.',
  'Para': 'Indica propósito, destino o destinatario.',
  'Pero': 'Conjunción que introduce una objeción o contraste.'
};

const buscador = document.getElementById('buscador');
const lista = document.getElementById('lista');
const mostrarBtn = document.getElementById('mostrar');
const significadoDiv = document.getElementById('significado');

let palabraSeleccionada = null;

buscador.addEventListener('input', () => {
  const filtro = buscador.value.toLowerCase();
  lista.innerHTML = '';
  Object.keys(palabrasInfo).forEach(palabra => {
    if (palabra.toLowerCase().includes(filtro)) {
      const li = document.createElement('li');
      li.textContent = palabra;
      li.addEventListener('click', () => {
        palabraSeleccionada = palabra;
        buscador.value = palabra; // Copia al input
        document.querySelectorAll('li').forEach(el => el.classList.remove('selected'));
        li.classList.add('selected');
      });
      lista.appendChild(li);
    }
  });
});

mostrarBtn.addEventListener('click', () => {
  if (palabraSeleccionada) {
    significadoDiv.textContent = palabrasInfo[palabraSeleccionada];
  } else {
    significadoDiv.textContent = 'Selecciona una palabra primero.';
  }
});

