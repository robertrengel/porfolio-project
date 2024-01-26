import "./style.css";
import "normalize.css"

var contactosId = document.getElementById("contactos-msg")
var button = document.querySelector(".button")

button.addEventListener("click", ()=>{
    contactosId.classList.toggle("visible")
})

