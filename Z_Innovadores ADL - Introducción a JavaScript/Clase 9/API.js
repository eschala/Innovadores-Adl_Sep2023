/* const persona={
    nombre:"Yeison",
    edad:24,
    correo:"yeison24@gmail.com"
}

JSON.parse(persona);

document.write(persona.info);

 */

fetch("https://jsonplaceholder.typicode.com/photos")
    .then(response => response.json()).then(data => {
        const images = document.querySelector(".image_Album");
        data.map((image)=>{

            images.src=image.url
        })


    })