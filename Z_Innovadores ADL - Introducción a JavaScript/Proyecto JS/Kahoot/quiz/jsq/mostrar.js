
import { preguntas,primeraPregunta,segundaPregunta,terceraPregunta,cuartaPregunta,quintaPregunta,vectorPreguntas } from "./preguntas.js";


var segundos = 15;
var correctas = 0;
var incorrecta = 0;
var contador = 0;


var PreguntaHtml = document.querySelector("#pregunta");
var imagenHtml = document.querySelector("#imagen");
var opcion1Html = document.querySelector("#opcion1");
var opcion2Html = document.querySelector("#opcion2");
var opcion3Html = document.querySelector("#opcion3");
var opcion4Html = document.querySelector("#opcion4");
var general = document.querySelector(".general");
var botones = document.querySelectorAll(".opciones");
var bien = document.querySelector("#correctas")
var mal = document.querySelector("#incorrectas")
var usuario = document.querySelector("#usuario");
var divtiempo = document.querySelector(".tiempo");
var tiempo = document.querySelector("#tiempo");
var score = document.querySelector(".score");
var body = document.querySelector("body");
function mostrar  () {
    var intervalo = setInterval(function() {
        PreguntaHtml.innerHTML = vectorPreguntas[contador].pregunta;
     imagenHtml.src = vectorPreguntas[contador].imagen;
     opcion1.innerHTML = vectorPreguntas[contador].opcion1;
     opcion2.innerHTML = vectorPreguntas[contador].opcion2;
     opcion3.innerHTML = vectorPreguntas[contador].opcion3;
     opcion4.innerHTML = vectorPreguntas[contador].opcion4;
     
     segundos--;
     tiempo.innerHTML = segundos;
     usuario.innerHTML= localStorage.getItem("lacoque");
     
     if( segundos == 0){
        segundos = 15;
        
         contador++;
         console.log(contador);
         incorrecta++;
         mal.innerHTML= incorrecta;
         if((correctas+incorrecta)==5){
            general.style.display="none";
            divtiempo.style.display="none";
            score.style.display="grid";
            body.style.backgroundColor="rgb(56, 18, 114)";
            
            score.style.color="white";
            score.style.justifyContent="center";
            score.style.alingContent="center";
            score.style.backgroundColor="white";
         }
     }
      
    
        if (contador == 5) {
          clearInterval(intervalo);
       

        }
       
    
      }, 1000);
      
   
    ;
   
 }

 



botones.forEach(btn => {
 btn.addEventListener("click",e =>{
    
     if(e.target.value == vectorPreguntas[contador].respuesta){
        e.target.style.backgroundColor = "green";
         correctas++;
         bien.innerHTML=correctas;
         contador++;
         if((correctas+incorrecta)==5){
            general.style.display="none";
            divtiempo.style.display="none";
            score.style.display="grid";
            body.style.backgroundColor="rgb(56, 18, 114)";
            score.style.backgroundColor="white";
            score.style.color="white";
            score.style.justifyContent="center";
            score.style.alingContent="center";

         }
         

         

            
     }else{
         incorrecta++;
         mal.innerHTML= incorrecta;
         contador++;
         if((correctas+incorrecta)==5){
            general.style.display="none";
            divtiempo.style.display="none";
            score.style.display="grid";
            body.style.backgroundColor="rgb(56, 18, 114)";
            score.style.backgroundColor="white";
           
           

         }
       
     }
 })
 
});

 export{mostrar,correctas,incorrecta};