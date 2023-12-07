//Creamos un objeto y luego lo convertimos a JSON
/*
const persona= {
    nombre: "Yeison",
    edad: 24,
    correo: "yeison24@gmail.com",
    bailar(){
        console.log("Bailandoooooo...");
    }
}

//document.write(persona.bailar());

const NUEVA_PERSONA= JSON.stringify(persona);

console.log(NUEVA_PERSONA);

*/
/*
//Hacemos la petición al servidor que contiene los datos (recursos)
fetch("https://jsonplaceholder.typicode.com/photos")
    //Recibimos los recursos y definimos la forma en como se almacenan
    .then(response => response.json())
    //Operando con los datos obtenidos
    .then(datos =>{
    const album= document.querySelector(".album");
    //Hacer un mapeo del array para mostrar todas las imágenes
    datos.map((imagen)=>{
    const imagenes = document.createElement("img");
    imagenes.src=imagen.url
    imagenes.style.width="100px";
    album.appendChild(imagenes);
    })
    })
*/


//API de Google Translator

//const palabra = prompt("Escriba la palabra: ");
    
const TEXT_AREA1= document.querySelector(".textarea1")
const TEXT_AREA2= document.querySelector(".textarea2")
document.querySelector('.translate').addEventListener('click', async function() {
    const texto = document.querySelector('.textarea1').value;
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '58da8ab37emsh18bd725ca57fcafp1cb784jsn4c2caddd8892',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
      },
      body: new URLSearchParams({
        source_language: 'es',
        target_language: 'en',
        text: texto,
      }),
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.data.translatedText.length > 0) {
        const translatedText = result.data.translatedText;
        document.querySelector('.textarea2').value = translatedText;
      } else {
        console.log('No translation available');
      }
    } catch (error) {
      console.error(error);
    }
  });
  