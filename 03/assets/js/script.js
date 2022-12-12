/* guardar en una variable el elemento div con id ele1 */
const ele = document.getElementById("ele1");

/* realizar una funcion que cambie de color con el parametro por defecto GREEN */
const color = 'green'
function pintar(color){
    ele.style.backgroundColor = color
}

/* Agregar un evento "click" que llame a la funcion pintar*/
ele.addEventListener("click",
/* OJO si no le ponemos un parametro a la funcion, nos devovera el parametro por defecto GREEN */
() =>{ pintar ('yellow');}); 