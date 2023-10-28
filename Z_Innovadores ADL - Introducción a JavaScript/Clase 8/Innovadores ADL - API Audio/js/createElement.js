const contenedor = document.querySelector(".contenedor");

const imagen = document.createElement("img");
imagen.height="500";
imagen.width="800";

imagen.src="https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg";

//Insertamos la imagen en el contenedor
contenedor.appendChild(imagen);

//Cambiando atributos

const parrafo = document.querySelector(".texto");


parrafo.setAttribute("contenteditable","false");