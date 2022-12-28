//hover para los elementos de la tienda


// Funcion arrows carrusel
const carruselContainer = document.querySelector(".section__assets");
const arrowRight = document.querySelector(".section__right");
const arrowLeft = document.querySelector(".section__left");


// carrusel
function moverDerecha() {
    carruselContainer.classList.add("carrusel__deslizar--derecha");
    carruselContainer.classList.remove("carrusel__deslizar--izquierda");
    arrowRight.classList.add("opacity--0");
    arrowLeft.classList.remove("opacity--0");
  }
  function moverIzquierda() {
    carruselContainer.classList.add("carrusel__deslizar--izquierda");
    carruselContainer.classList.remove("carrusel__deslizar--derecha");
    arrowRight.classList.remove("opacity--0");
    arrowLeft.classList.add("opacity--0");
  }



  arrowRight.addEventListener("click", moverDerecha);
arrowLeft.addEventListener("click", moverIzquierda);