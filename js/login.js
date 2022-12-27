// Focus boton login
const sectionInput = document.querySelectorAll(".section__complements");
const ignoreElement1 = document.querySelector(".ignore-element1");
const ignoreElement2 = document.querySelector(".ignore-element2");
const container1 = document.querySelector(".section__complements--1")
const container2 = document.querySelector(".section__complements--2")

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
    console.log(ele.target.value);
    if (ele.target.value === "") {
        const error = document.createElement('span')
        error.textContent = "Make sure the email is valid, don't forget the '@'"
        error.classList.add("error")
        ignoreElement1.classList.add('section__input--red')
        container1.appendChild(error)
        setTimeout(() => {
            error.remove();
            ignoreElement1.classList.remove('section__input--red')
        }, 3000);
        return
    }
  })
  ignoreElement2.addEventListener("click", (ele)=>{
    console.log(ele.target.value);
    if (ele.target.value === "") {
        const error = document.createElement('span')
        error.textContent = "This field cannot be empty"
        error.classList.add("error")
        ignoreElement2.classList.add('section__input--red')
        container2.appendChild(error)
        setTimeout(() => {
            error.remove();
            ignoreElement2.classList.remove('section__input--red')
        }, 3000);
        return
    }
  })