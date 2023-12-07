var oe = document.querySelector("#nombre");
var boton = document.querySelector("#listo");


function enviar(){
   
   var guardar = oe.value;
   localStorage.setItem("lacoque",guardar);
   //var ya=  localStorage.getItem("lacoque");
   
    //alert(localStorage.getItem("lacoque"));
   // console.log(localStorage.getItem("lacoque"));
   location.replace("../quiz/index.html");

}
boton.addEventListener("click", enviar);