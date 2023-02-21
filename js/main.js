//*TODO: Práctica
//* 1) Crear una array Película con los atributos Título, Director, Año y Género
//* 2) Solicita los datos a través de un formulario. Validar los campos: "Año" que tenga 4 cifras y se encuentre entre el año 1.800 y la fecha actual, y los géneros serán terror, acción, comedia,romántica.
//* 3) Almacenar las películas en un array.
//* 4) Mostrar todas las películas en una tabla.

document.addEventListener('DOMContentLoaded', () => {


//*** VARIABLES ***//

const fragment = document.createDocumentFragment();

//* Capturas *//
const captureForm = document.querySelector('#form');
//const captureSubmit = document.querySelector('#boton-submit');
const captureTable = document.querySelector('#tablita');
const capInputTitle = document.querySelector('#title');
const capInputDirector = document.querySelector('#director');
const capInputYear = document.querySelector('#year');
const capInputGenre = document.querySelector('#genre');

//* Arrays */
const arrayGenres = ['Elige un género','Terror', 'Acción', 'Comedia', 'Romántica'];

const arrayMovies = []; //* los datos que voy a pintar en la tabla

const objValidarMovies = { //* (también podría hacerlo con un array vacío)
    title: false,
    director: false,
    year: false,
    genre: false,
}


//*** EVENTOS ***//

captureForm.addEventListener('submit', (ev) => { //* anulo (temporalmente(?) el atributo action del form

    ev.preventDefault();
    validarDatos();

})//!EV-SUBMIT



//*** FUNCIONES ***//

const pintarSelect = () => {

arrayGenres.forEach((item) => {
    const opciones = document.createElement('OPTION');
    opciones.textContent = item;

    fragment.append(opciones);

})

    capInputGenre.append(fragment);

}//!FUNC-PINTARSELECT


const validarDatos = () => {

    let errores = '';

    const title = capInputTitle.value;
    const director = capInputDirector.value;
    const year = capInputYear.value;
    const genre = capInputGenre.value;

    if(isNaN(title) && title.trim().length > 0){
        objValidarMovies.title = true;
    }else{
        objValidarMovies.title = false;
        errores += 'Error en título. ';
    }

    if(isNaN(director) && title.trim().length > 0){
        objValidarMovies.director = true;
    }else{
        objValidarMovies.director = false;
        errores += 'Error en director. ';
    }

    if(isNaN(year) || year == ""){
        objValidarMovies.year = false;
        errores += 'Error en año. ';
    }else if(year > 1800 && year <= 2023){
        objValidarMovies.year = true;
    }

    if(genre != 'Elige un género'){
        objValidarMovies.genre = true;
    }else{
        objValidarMovies.genre = false;
        errores += 'Error en género. ';
    }

    const arrayValidar = Object.values(objValidarMovies); //? investigar

    let validar = arrayValidar.findIndex((item) => item == false); //? investigar
    if(validar === -1){
        arrayMovies.push({
            title: title,
            director: director,
            year: year,
            genre: genre,
        })
    }else{
        alert(errores);
    }

}//!FUNC-VALIDARDATOS


const almacenarDatos = () => { //! (por hacer)



}//!FUNC-ALMACENARDATOS


const pintarTabla = () => { //! no hace nada porque no le está llegando nada del arrayMovies (dentro de la función de validación sí recibe el push)

    arrayMovies.forEach((item) => {
        const tableRow = document.createElement('TR');
        const titleTD = document.createElement('TD');
        titleTD.textContent = item.title;
        const directorTD = document.createElement('TD');
        directorTD.textContent = item.director;
        const yearTD = document.createElement('TD');
        yearTD.textContent = item.year;
        const genreTD = document.createElement('TD');
        genreTD.textContent = item.genre;

        tableRow.append(titleTD, directorTD, yearTD, genreTD);

        fragment.append(tableRow);

    })

    captureTable.append(fragment);

}//!FUNC-PINTARTABLA


const init = () => {

    pintarSelect();
    almacenarDatos();
    pintarTabla();

}//!FUNC-INIT


init();


})//!LOAD