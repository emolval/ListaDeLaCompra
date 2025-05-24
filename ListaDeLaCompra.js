//creo que no hace falta decirlo, por que lo suelo poner en los archivos js y lo vimos en clase, pero esat linea asegura que se ejecute el js una vez cargado el dom
window.addEventListener('DOMContentLoaded', function () {
    //extraemos los elementos que vamos a usar, la lista y los dos botones
    const lista = document.getElementById("lista");
    const botonAnyadir = document.getElementById("botonAnyadir");
    const botonEliminar = document.getElementById("botonEliminar");

    botonAnyadir.addEventListener('click', function() {
        //extraemos el contenido del input
        const texto = document.getElementById("nuevoElemento").value.trim();
            //nos aseguramos que no haga nada si esta vacio
        if (texto !== "") {
            //creamos el elemento y lo añadimos
            const li = document.createElement("li");
            li.textContent = texto;
            lista.appendChild(li);
            //vaciamos el input, para que no haya que borrarlo
            document.getElementById("nuevoElemento").value = "";
        }
    });

    //igual que arriba, creamos la funcion del boton eliminar
    botonEliminar.addEventListener('click', function() {
        //Por suerte, existe una propiedad que identifica el primer elemento, nos asegutramos que la lista no esté vacía y lo borramos
        if (lista.firstElementChild) {
            lista.removeChild(lista.firstElementChild);
        }
    });
});
