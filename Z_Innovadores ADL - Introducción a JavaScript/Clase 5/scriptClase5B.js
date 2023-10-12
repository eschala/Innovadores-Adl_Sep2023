const divContainer = document.querySelector(".container");

const imgImage = document.createElement("img");

imgImage.src="https://cdn.pixabay.com/photo/2021/08/20/18/33/british-museum-6561029_1280.jpg";

imgImage.width="1024";

divContainer.appendChild(imgImage);

const pParagragh = document.querySelector(".h_tittle");

pParagragh.setAttribute("contenteditable","true");