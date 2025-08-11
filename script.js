document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todos los botones con la clase 'boton-comprar'
  const botonesComprar = document.querySelectorAll('.boton-comprar');

  // Itera sobre cada botón para agregarle un 'event listener'
  botonesComprar.forEach(boton => {
    boton.addEventListener('click', (evento) => {
      // Evita que el enlace recargue la página
      evento.preventDefault();

      // Encuentra el elemento padre '.producto' para obtener la información
      const productoDiv = evento.target.closest('.producto');
      
      // Obtiene el nombre del producto
      const nombreProducto = productoDiv.querySelector('h2').textContent;
      
      // Obtiene el precio del producto y lo convierte a número
      const precioTexto = productoDiv.querySelector('li:last-child strong').textContent;
      const precio = parseFloat(precioTexto.replace('$', ''));

      // Pide al usuario la cantidad de unidades
      const cantidad = parseInt(prompt(`¿Cuántas unidades de "${nombreProducto}" deseas comprar?`, '1'));

      // Verifica que la cantidad sea un número válido y mayor que cero
      if (cantidad > 0) {
        const total = precio * cantidad;
        alert(`¡Gracias por tu compra! Has seleccionado ${cantidad} unidades de ${nombreProducto}. El total es: $${total.toFixed(2)}.`);
      } else if (cantidad <= 0) {
        alert('La cantidad debe ser un número positivo. La compra no se ha realizado.');
      } else {
        alert('Entrada no válida. Por favor, introduce un número.');
      }
    });
  });
});