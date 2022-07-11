// Cambiar color al presionar las teclas a,s,d,e

// let color = "";

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        elemento1.style.backgroundColor = "yellow";
    } else if (event.key === 's') {
        elemento2.style.backgroundColor = "blue";
        // color = "blue";
    }  else if (event.key === 'd') {
        // color = "red";
        elemento3.style.backgroundColor = "red";
    }  else if (event.key === 'e') {
        elemento4.style.backgroundColor = "black";
        // color = "black";
    } else{
        color = ""
    }

})

// Cambiar color al hacer click en las cajas

let elemento1 = document.getElementById("ele3")
let elemento2 = document.getElementById("ele4")
let elemento3 = document.getElementById("ele5")
let elemento4 = document.getElementById("ele6")

elemento1.addEventListener("click", () => elemento1.style.backgroundColor = "yellow")
elemento2.addEventListener("click", () => elemento2.style.backgroundColor = "blue")
elemento3.addEventListener("click", () => elemento3.style.backgroundColor = "red")
elemento4.addEventListener("click", () => elemento4.style.backgroundColor = "black")
