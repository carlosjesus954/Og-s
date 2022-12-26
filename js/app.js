// Variables

const burguerBtn = document.querySelector(".menu");
const menu = document.querySelector(".nav");
const closeBtn = document.querySelector(".close");
const opacityDiv = document.querySelector(".opacity");

//hover para los elementos de la tienda
const producto = document.querySelectorAll(".clothes__cards");

// Funcion arrows carrusel
const carruselContainer = document.querySelector(".section__assets")
const arrowRight = document.querySelector(".section__right")
const arrowLeft = document.querySelector(".section__left")
// hover para los botones
const sectionButton = document.querySelector(".section__button")
// const imgProducto = document.query
//  Funciones
function mostrarMenu() {
  burguerBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  menu.classList.add("showmenu");
  opacityDiv.classList.remove("hidden");
}
function cerrarMenu() {
  burguerBtn.classList.remove("hidden");
  closeBtn.classList.add("hidden");
  menu.classList.remove("showmenu");
  opacityDiv.classList.add("hidden");
}
//hover para los elementos de la tienda
producto.forEach((item) => {
    item.addEventListener('mouseover', (ele)=>{
        console.log(item.childNodes);
        const imagenPrincipal = item.children[0]
        const imagenSecundaria = item.children[1]
        console.log(imagenPrincipal);
        console.log(imagenSecundaria);
        imagenPrincipal.classList.add('hidden');
        imagenSecundaria.classList.remove('hidden');
    })
    item.addEventListener('mouseout', (ele)=>{
        console.log(item.childNodes);
        const imagenPrincipal = item.children[0]
        const imagenSecundaria = item.children[1]
        console.log(imagenPrincipal);
        console.log(imagenSecundaria);
        imagenPrincipal.classList.remove('hidden');
        imagenSecundaria.classList.add('hidden');
    })
});
// carrusel
function moverDerecha (){
  carruselContainer.classList.add("carrusel__deslizar--derecha")
  carruselContainer.classList.remove("carrusel__deslizar--izquierda")
  arrowRight.classList.add("opacity--0")
  arrowLeft.classList.remove("opacity--0")
}
function moverIzquierda (){
  carruselContainer.classList.add("carrusel__deslizar--izquierda")
  carruselContainer.classList.remove("carrusel__deslizar--derecha")
  arrowRight.classList.remove("opacity--0")
  arrowLeft.classList.add("opacity--0")
}

// Hover botones Add to cart

function hoverButton (){
  sectionButton.classList.remove("button--out");
  sectionButton.classList.add("button--hover");
}
function outButton (){
  sectionButton.classList.add("button--out");
  sectionButton.classList.remove("button--hover");
}

// Eventos
burguerBtn.addEventListener("click", mostrarMenu);
closeBtn.addEventListener("click", cerrarMenu);
arrowRight.addEventListener("click", moverDerecha);
arrowLeft.addEventListener("click", moverIzquierda);
sectionButton.addEventListener('mouseover', hoverButton);
sectionButton.addEventListener('mouseout', outButton);