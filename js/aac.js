
document.addEventListener("DOMContentLoaded", function() {
  const enlaces = document.querySelectorAll("#aacMenu a");
  const secciones = document.querySelectorAll(".aac article");

  // Función para mostrar la sección seleccionada
  function mostrarSeccion(id) {
    secciones.forEach(sec => {
      sec.style.display = sec.id === id ? "flex" : "none";
    });

    // Cambiar estilos activos en el menú
    enlaces.forEach(a => {
      if (a.getAttribute("href") === "#" + id) {
        a.classList.add("activo");
      } else {
        a.classList.remove("activo");
      }
    });
  }

  // Mostrar acompañamento por defecto
  mostrarSeccion("acompañamento");

  // Asignar eventos a los enlaces
  enlaces.forEach(a => {
    a.addEventListener("click", function(e) {
      e.preventDefault();
      const id = this.getAttribute("href").substring(1);
      mostrarSeccion(id);
    });
  });
});

