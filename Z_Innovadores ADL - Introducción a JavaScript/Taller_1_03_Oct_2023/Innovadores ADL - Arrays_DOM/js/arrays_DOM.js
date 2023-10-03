/*
//Array en JavaScript
const lista = [1,2,3,4,5]

document.write(lista[0]);

*/

/*
//Creando una lista de elementos

const miLista= []

for (i=0;i<5;i++){
    miLista.push(prompt("Digite el nombre:"));
}

document.write(miLista);

*/

//A partir de un array mostrar los elementos en lista
/*
const listaADL= [
{
    nombre:"Ixyz",
    edad:"19",
    celular:"213938218"
},
{
    nombre:"Yurleivy",
    edad:"15",
    celular:"31555551221"
},
{
    nombre: "Eduar",
    edad:"23",
    celular:"213712329132"
},
{
    nombre: "Michael",
    edad:"23",
    celular:"213712329132"
}

];
//MAP en arrays
const list = document.querySelector(".list");
const nuevaLista= listaADL.map((item)=> list.innerHTML+= item.nombre+"<br>");
*/
/*
//Crear un arreglo a partir de un texto
const texto = "123456";
const nombres= "Luis";
const arreglo = Array.from(texto);

document.write(arreglo);
*/
/*
//Concatenar arrays
const nombres = ["Luis","Carlos"];
const numeros = [212121,121212];

document.write(nombres.concat(numeros));
*/


/*
//Método math.random()
const numero = ~~(Math.random()*1000000);

document.write(numero);
*/
/*
//Ver los elementos en el DOM de HTML
const cuerpo = document.getElementById("cuerpito");

document.write(cuerpo);

const caja = document.getElementById("cajita");

document.write(caja);

const parrafo = document.getElementById("parrafito");

document.write(parrafo);

const parrafo2 = document.querySelector("#parrafito");

document.write(parrafo2)

//Modificar un NodeList
const contenedor = document.querySelectorAll(".contenedor");
document.write("<br>"+contenedor);


for (i=0;i<contenedor.length;i++){

    contenedor[i].style.backgroundColor="lightblue";
    contenedor[i].style.width="100%";
    contenedor[i].style.height="400px";
    contenedor[i].style.border="2px solid white";
    
}
*/

//Cambiar estilos de un contenedor con un botón

const BOTON = document.querySelector(".boton");
const CONTENEDORES = document.querySelectorAll(".contenedor");

const cambiarColor = ()=>{

    for (i=0;i<CONTENEDORES.length;i++){
       CONTENEDORES[i].classList.toggle("cambiarColor"); 
    }

}

BOTON.addEventListener("click",cambiarColor);



















