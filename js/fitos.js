
document.addEventListener("DOMContentLoaded", function() {
  // Selecciona todos los títulos
  const titulos = document.querySelectorAll(".titulo-fito");

  titulos.forEach(titulo => {
    titulo.addEventListener("click", function() {
      // Busca el bloque de contenido siguiente
      const contido = this.nextElementSibling;
      const simbolo = this.querySelector(".mas");

      // Cierra todos los demás contidos abiertos
      document.querySelectorAll(".contido-fito").forEach(c => {
        if (c !== contido) c.style.display = "none";
      });
      document.querySelectorAll(".mas").forEach(mas => {
        if (mas !== simbolo) mas.textContent = "+";
      });

      // Alterna el desplegable actual
      if (contido.style.display === "block") {
        contido.style.display = "none";
        simbolo.textContent = "+";
      } else {
        contido.style.display = "block";
        simbolo.textContent = "–";
      }
    });
  });
});





