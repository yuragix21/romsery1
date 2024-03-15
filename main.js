document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones
    var botones = document.querySelectorAll('.boton');
  
    // Agregar evento de clic a cada botón
    botones.forEach(function(boton) {
      boton.addEventListener('click', function() {
        // Obtener el texto específico del botón
        var texto = this.getAttribute('data-texto');
        
        // Mostrar la ventana emergente con el texto específico
        mostrarVentanaEmergente(texto);
      });
    });
  
    // Función para mostrar la ventana emergente
    function mostrarVentanaEmergente(texto) {
      // Obtener elementos
      var ventanaEmergente = document.getElementById('ventanaEmergente');
      var textoVentanaEmergente = document.getElementById('textoVentanaEmergente');
      var fondoDifuminado = document.createElement('div');
      fondoDifuminado.classList.add('fondo-difuminado');
  
      // Mostrar texto en la ventana emergente
      textoVentanaEmergente.textContent = texto;
  
      // Agregar clase para mostrar la ventana emergente y el fondo difuminado
      ventanaEmergente.classList.add('mostrar');
      document.body.appendChild(fondoDifuminado);
  
      // Agregar evento de clic al fondo difuminado para cerrar la ventana emergente
      fondoDifuminado.addEventListener('click', function() {
        ventanaEmergente.classList.remove('mostrar');
        this.parentNode.removeChild(this);
      });
    }
  });