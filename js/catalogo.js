//hover para los elementos de la tienda
producto.forEach((item) => {
    item.addEventListener("mouseover", (ele) => {
      console.log(item.childNodes);
      const imagenPrincipal = item.children[0];
      const imagenSecundaria = item.children[1];
      console.log(imagenPrincipal);
      console.log(imagenSecundaria);
      imagenPrincipal.classList.add("hidden");
      imagenSecundaria.classList.remove("hidden");
    });
    item.addEventListener("mouseout", (ele) => {
      console.log(item.childNodes);
      const imagenPrincipal = item.children[0];
      const imagenSecundaria = item.children[1];
      console.log(imagenPrincipal);
      console.log(imagenSecundaria);
      imagenPrincipal.classList.remove("hidden");
      imagenSecundaria.classList.add("hidden");
    });
  });
  