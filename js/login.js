// Focus boton login
const sectionInput = document.querySelectorAll(".section__complements");
const ignoreElement1 = document.querySelector(".ignore-element1");
const ignoreElement2 = document.querySelector(".ignore-element2");

// botones login

sectionInput.forEach((input) => {
    input.addEventListener("click", (event) => {
      let span = input.children[0];
      span.classList.add("section__input--focus");
  
  
      // Para mas adelante aplicare el efecto para que se quite cuando este vacio el campo
  
      // if (event.target !== ignoreElement1) {
      //   if (input.value == "") {
      //     span.event.remove("section__input--focus");
      //   } else {
      //     console.log("okey");
      //   }
      // }
      // if (event.target !== ignoreElement2) {
      //   if (event.value == "") {
      //     span.classList.remove("section__input--focus");
      //   } else {
      //     console.log("okey");
      //   }
      // }
    });
  });

  ignoreElement1.addEventListener("click", (ele)=>{
    console.log("hola");
  })