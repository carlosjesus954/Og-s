// Variables
const burguerBtn = document.querySelector(".menu");
const menu = document.querySelector(".nav");
const closeBtn = document.querySelector(".close");
const opacityDiv = document.querySelector(".opacity");


// hover para los botones
const sectionButton = document.querySelector(".section__button");

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


// Hover botones Add to cart

function hoverButton() {
  sectionButton.classList.remove("button--out");
  sectionButton.classList.add("button--hover");
}
function outButton() {
  sectionButton.classList.add("button--out");
  sectionButton.classList.remove("button--hover");
}

// Eventos
burguerBtn.addEventListener("click", mostrarMenu);
closeBtn.addEventListener("click", cerrarMenu);
sectionButton.addEventListener("mouseover", hoverButton);
sectionButton.addEventListener("mouseout", outButton);


