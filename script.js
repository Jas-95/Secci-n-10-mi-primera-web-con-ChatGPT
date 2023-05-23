// Obtener referencia al formulario
const formulario = document.getElementById('formulario');

// Agregar un event listener para el evento 'submit'
formulario.addEventListener('submit', function(event) {
  // Detener el envío del formulario
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensaje').value;

  // Validar los campos del formulario
  if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
    alert('Por favor, complete todos los campos del formulario.');
  } else {
    // Aquí puedes realizar alguna acción adicional, como enviar los datos a través de AJAX o realizar otras validaciones

    // Por ejemplo, mostrar una alerta indicando que el formulario se ha enviado exitosamente
    alert('El formulario se ha enviado exitosamente.');

    // Restablecer los valores de los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('mensaje').value = '';
  }
});


    