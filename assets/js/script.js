function pintar(color){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = color;

}
//ejercicio 3.2
pintar('green');

//ejercicio 3.1
ele = document.getElementById("ele1")
ele.addEventListener("click", function(){
    ele.style.backgroundColor = 'yellow';            
});