//Importo el array con las imagenes
import { imagenes } from './imagenes.js';

//Variables
const imgContainer = document.querySelector('#img-container');
const imagen = document.querySelector('#imagen');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
let contador = 0;

//Guardo el valor de la imagen en el localStorage
localStorage.getItem('contador')
    ? (contador = localStorage.getItem('contador'))
    : (contador = 0);

//Inicializo la imagen
imagen.src = imagenes[contador].img;

//Funciones
EventListeners();

function EventListeners() {
    nextBtn.addEventListener('click', () => {
        nextImagen();
    });
    prevBtn.addEventListener('click', () => {
        prevImagen();
    });
}

//Funcion encargada de pasar a la imagen siguiente
function nextImagen() {
    contador++;

    if (contador >= imagenes.length) {
        contador = 0;
    }
    imagen.src = imagenes[contador].img;
    localStorage.setItem('contador', contador);
}

//Funcion encargada de pasar a la imagen anterior
function prevImagen() {
    contador--;

    if (contador < 0) {
        contador = imagenes.length - 1;
    }
    imagen.src = imagenes[contador].img;
    localStorage.setItem('contador', contador);
}
