//Obtenemos los elementos

const TEXTO_USUARIO = document.querySelector(".texto");

const TEXTO_MOSTRAR = document.querySelector(".info");
const TIPO = document.querySelector(".tipo");
const FUENTE = document.querySelector(".cfuente");

//Evento que muestra la tecla presionada

const TECLA_PRESIONADA= (event)=>{

let key = event.key;
TEXTO_MOSTRAR.innerHTML= `La tecla presionada es: ${key}`;
TIPO.innerHTML= key === key.toUpperCase();
comprobar = key === key.toUpperCase();


if (comprobar === true){
    bg = document.querySelector("body");
    bg.style.backgroundColor="lightpink";
}

else if (comprobar !== true){
    bg = document.querySelector("body");
    bg.style.backgroundColor="lightblue";
}

else if (key=="Ñ" || key=="ñ"){
    bg = document.querySelector("body");
    bg.style.backgroundColor="green";
}

}


//Función para cambiar la fuente

const CAMBIAR_FUENTE = ()=>{
    TEXTO_USUARIO.style.fontSize="25px";
    TEXTO_MOSTRAR.style.fontSize="25px";
}

FUENTE.addEventListener("click",CAMBIAR_FUENTE);