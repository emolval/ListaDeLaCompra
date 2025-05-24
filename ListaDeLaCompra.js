//creo que no hace falta decirlo, por que lo suelo poner en los archivos js y lo vimos en clase, pero esat linea asegura que se ejecute el js una vez cargado el dom
window.addEventListener('DOMContentLoaded', function () {
    //extraemos los elementos que vamos a usar, la lista y los dos botones
    const lista = document.getElementById("lista");
    const botonAnyadir = document.getElementById("botonAnyadir");
    const botonEliminar = document.getElementById("botonEliminar");

    //nuevas const
    const botonEliminarPosicion = document.getElementById("botonEliminarPosicion");
    const mensaje = document.getElementById("mensaje");
    const posicionEliminar = document.getElementById("posicionEliminar");
    //esto debe salir de la funcion
    const inputNuevoElemento  = document.getElementById("nuevoElemento");

    function actualizarMensaje(texto) {
        mensaje.textContent = texto;
    }

    botonAnyadir.addEventListener('click', function() {
        //Se que se me repite con el de arriba, pero es para no cambiar tanto la estructura de lo que tenia ya heco
        const texto = inputNuevoElemento.value.trim();
        //nos aseguramos que no haga nada si esta vacio
        if (texto !== "") {
            //creamos el elemento y lo añadimos
            const li = document.createElement("li");
            li.textContent = texto;
            lista.appendChild(li);
            //vaciamos el input, para que no haya que borrarlo
            inputNuevoElemento.value = "";
            inputNuevoElemento.focus();
            actualizarMensaje(`Añadido: "${texto}". Total elementos: ${lista.children.length}.`);
        } else {
            actualizarMensaje("Escriba el nombre de un articulo para añadir a la lista.");
        }
    });

    //igual que arriba, creamos la funcion del boton eliminar
    botonEliminar.addEventListener('click', function() {
        //Por suerte, existe una propiedad que identifica el primer elemento, nos asegutramos que la lista no esté vacía y lo borramos
        if (lista.firstElementChild) {
            //guardamos el objeto antes de eliminarlo, para poder mostrarlo en el mensaje
            const eliminado = lista.firstElementChild.textContent;
            lista.removeChild(lista.firstElementChild);
            actualizarMensaje(`Eliminado primer elemento: "${eliminado}". Elementos restantes: ${lista.children.length}.`);
        } else {
            //Para cuando la lista este vacía, que no lo hice antes
            actualizarMensaje("La lista está vacía, no hay elementos para eliminar.");
        }
    });

    botonEliminarPosicion.addEventListener('click', function () {
        //Aviso que parte de este fragmento está sacado de Stack overflow, pues no sabía como hacerlo, y aun así todavía me confunde un poco
        const pos = parseInt(posicionEliminar.value, 10);
        if (isNaN(pos) || pos < 1 || pos > lista.children.length) {
            actualizarMensaje(`Posición inválida. Introduce un número entre 1 y ${lista.children.length}.`);
            return;
        }
        const elemento = lista.children[pos - 1];
        const textoEliminado = elemento.textContent;
        lista.removeChild(elemento);
        //actualizamos el mensaje
        actualizarMensaje(`Elemento en posición ${pos} eliminado: "${textoEliminado}". Elementos restantes: ${lista.children.length}.`);
        //limpiamos el input
        posicionEliminar.value = "";
        //devolvemos el cursor al input para ahorrar molestias (pongo lo que se me ocurre)
        posicionEliminar.focus();
    });
});
