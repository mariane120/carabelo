/*Indicar qué página es la actual para que aparezca un puntito en el menú en la palabra correspondiente */
// Esperar a que se carguen todos los includes antes de marcar el activo
window.addEventListener("load", () => {
  const checkMenuReady = setInterval(() => {
    const links = document.querySelectorAll(".cabeceira-container  a");
    if (links.length > 0) {
      clearInterval(checkMenuReady);
      links.forEach(link => {
        if (link.href === window.location.href) {
          link.classList.add("activo");
        }
      });
    }
  }, 100); // revisa cada 100 ms hasta que el menú esté cargado
});