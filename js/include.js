document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll("[include-html]");
  elements.forEach(async (el) => {
    const file = el.getAttribute("include-html");
    try {
      const response = await fetch(file);
      if (!response.ok) throw new Error(`Error ${response.status}`);
      const content = await response.text();
      el.innerHTML = content;
    } catch (err) {
      el.innerHTML = "Error al cargar " + file;
    }
  });
});

