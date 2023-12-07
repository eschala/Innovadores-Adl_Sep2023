

const VALIDAR=()=>{

    //Seleccionamos el elemento por su clase

const CAMPO_TEXTO = document.querySelector(".contenedor-principal__number");

//Generamos el número aleatorio
const NUMERO_RANDOM = ~~(Math.random()*11);

//Seleccionamos el párrafo 

const PARRAFO = document.querySelector(".contenedor-principal__texto");

if (CAMPO_TEXTO.value==NUMERO_RANDOM){
    PARRAFO.style.color="white";
    PARRAFO.innerHTML="¡Felicidades! El número es correcto: "+NUMERO_RANDOM;
}

else {
    PARRAFO.style.color="black";
    PARRAFO.innerHTML="Incorrecto, el número correcto es: "+NUMERO_RANDOM;
    CAMPO_TEXTO.value="";
}

}



