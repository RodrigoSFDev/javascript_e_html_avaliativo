const btn = document.querySelector("button");
const texto = document.querySelector("p");

function hidden() {
  if(texto.style.visibility === "visible"){
    texto.style.visibility = "hidden";
    
  } else {
    texto.style.visibility = "visible"
  }
}

btn.addEventListener('click', hidden);