

window.onload=function(){
    alert("Load")

    
    nombre.style.color = "red";
}

let elemento=document.getElementById("nombre");
nombre.addEventListener("mouseover", function () {

    nombre.style.color = "green";
    nombre.innerText = (elemento.innerText).toUpperCase();

}, false)
nombre.addEventListener("mouseout", function () {
    nombre.style.color = "black";
    nombre.innerText = (elemento.innerText).toLowerCase();

}, false)