// Variables

const burguerBtn = document.querySelector(".menu");
const menu = document.querySelector(".nav");
const closeBtn = document.querySelector(".close");
const opacityDiv = document.querySelector(".opacity");

//hover para los elementos de la tienda
const producto = document.querySelectorAll(".clothes__cards");

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

// Eventos
burguerBtn.addEventListener("click", mostrarMenu);
closeBtn.addEventListener("click", cerrarMenu);
