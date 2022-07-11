// 3.1

ele = document.getElementById("ele1")
function pintar(){
    ele.style.backgroundColor = 'yellow';
    }
    // ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);



// 3.2

elemento = document.getElementById("ele2")
elemento.style.backgroundColor = "green";
function pintando(color){
    elemento.style.backgroundColor = color;
    }
    // ele = document.getElementById("ele1")
    ele.addEventListener("click", function(){pintando('yellow')});
// function pintar(color) {
//     pintando = document.getElementById("ele2")
//     pintando.style.backgroundColor = "green"
// }
// parrafo = document.querySelector("p")
// parrafo.addEventListener("click", pintar("yellow"))


