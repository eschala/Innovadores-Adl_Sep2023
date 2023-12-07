const samir = ["hola", "Como estas?", "Me alegra Mucho", "A Dios, me voy"];

for (let i = 0; i < samir.length; i++) {
  document.write(samir[i] + "<br>");
}

const body_Element = document.querySelector("body");
body_Element.style.height = "800px";

var contar = 0;

var operar = 0;

const mostrarMsg=()=>
{
alert(operar);}


const contarClicBody = (operar) => {
  contar++;
  operar = contar;

  const titulo_ = document.querySelector(".titulo");
  titulo_.innerHTML = operar;

  return operar;

};




body_Element.addEventListener("click", contarClicBody);
