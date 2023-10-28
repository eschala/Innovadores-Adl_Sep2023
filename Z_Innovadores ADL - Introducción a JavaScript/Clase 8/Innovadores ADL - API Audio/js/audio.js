//Creamos la lista de reproduccciones
const TIGER = "https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3";
const MARIO = "http://www.sonidosmp3gratis.com/sounds/ringtones-super-mario-bros.mp3";
const MI = "http://www.sonidosmp3gratis.com/sounds/mision-imposible-peliculas-.mp3";

const LISTA_REPRODUCCION = [TIGER,MARIO,MI];

//Creamos un elemento de tipo audio y lo insertamos en el body de nuestro documento
const audio = document.createElement("Audio");
audio.controls=true;
audio.src="https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3";
const body = document.querySelector("body");
body.appendChild(audio);
//audio.play();

//Seleccionamos los botones

const REPRODUCIR = document.querySelector(".play");
const PAUSAR = document.querySelector(".pause");
const SIGUIENTE = document.querySelector(".next");
const DURACION = document.querySelector(".duration");
//Funciones de control

const PLAY = ()=>{
    audio.play();
    DURACION.innerHTML= audio.duration;
}

const PAUSE = ()=>{
    audio.pause();
}
contador=0;
const NEXT = ()=>{
    console.log(audio.src= LISTA_REPRODUCCION[contador++]);
    audio.play();

    contador== LISTA_REPRODUCCION.length ? contador=0:console.log("Reproduciendo...");

}

//Creamos los eventos

REPRODUCIR.addEventListener("click",PLAY);
PAUSAR.addEventListener("click",PAUSE);
SIGUIENTE.addEventListener("click",NEXT);


/*
const NEXT = ()=>{
    audio.play();
}
*/