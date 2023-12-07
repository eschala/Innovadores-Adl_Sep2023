const main_ =document.querySelector(".main");
const tittle_Main_ =document.querySelector(".tittle_Main");
const parrafo_ =document.querySelector(".parrafo");


const searchTerm = document.querySelector('#ingresarPelicula').value;
const apiKey = '711ffca8';
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
const apiUrl2 = `http://www.omdbapi.com/?apikey=[711ffca8]&`;

fetch(apiUrl2)
.then(res=>res.json())
.then(response=>)