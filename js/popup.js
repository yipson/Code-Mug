const open = document.querySelector("#open");
const contenedorpopup = document.querySelector("#contenedorpopup");
const cerrar = document.querySelector("#cerrar");

open.addEventListener("click", () => {
  contenedorpopup.classList.add("show");
});

//cerrar imagen cuando se le da click
contenedorpopup.onclick = function () {
  contenedorpopup.classList.remove("show");
};

cerrar.onclick = function () {
  contenedorpopup.classList.remove("show");
};
