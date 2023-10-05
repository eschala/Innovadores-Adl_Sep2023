activar_Checkbox = false;
desactivar_Checkbox = true;
putOffStylesForCheckbox();{}

activar_Checkbox = true;
desactivar_Checkbox = false;
applyStylesCheckbox();{}
var applyStylesCheckbox = () => {
/* activar estilos */

const bodyStyles = document.querySelector(".body_page");

for (i = 0; i < bodyStyles.length; i++) {
bodyStyles[i].classList.toggle("applyStylesCheckbox");
}

bodyStyles.style.backgroundColor = "blue";
};

var putOffStylesForCheckbox = () => {
/* quitar estilos */
const bodyStyles = document.querySelector(".body_page");
for (i = 0; i < bodyStyles.length; i++) {
bodyStyles[i].classList.toggle("putOffStylesForCheckbox");
}
/* bodyStyles.style.backgroundColor = "azure"; */
bodyStyles.style.backgroundColor = "red";
};


stylesForCheckbox.addEventListener("click", applyStylesCheckbox);


stylesForCheckbox.addEventListener("click", putOffStylesForCheckbox);



/* Funcion del checkbox para cambiar estilos*/

/* 
const stylesForCheckbox = document.querySelector(".checkbox_input");
const contenedores_ = document.querySelectorAll(".checkbox-container"); 
*/
/* 
    if (stylesForCheckbox.checked == true) {
      alert("Checkbox Activado");
    } else {
      alert("Checkbox Desactivado");
    }
*/
var activar_Checkbox, desactivar_Checkbox;
const stylesForCheckbox = document.querySelector(".checkbox_input");
const contenedores_ = document.querySelectorAll(".checkbox-container");
const bodyStyles = document.querySelector(".body_page");

const bodyIdSelect = document.querySelector("#body__");

const activateCheckbox = () => {
  alert("probando");
  /* checkbox funcion activar/desactivar*/

  for (i = 0; i < contenedores_.length; i++) {
    contenedores_[i].classList.toggle("activateCheckbox");

    {
      if (stylesForCheckbox.checked == true) {
        applyStylesCheckbox();
      } else if (stylesForCheckbox.checked == false) {
        putOffStylesForCheckbox();
      }
    }
    {
      /* if(){}else
      if(){}else{} */
    }
  }
};

applyStylesCheckbox = () => {
  /* aplicar estilo */
  alert("Modo oscuro Activado");
  bodyStyles.style.backgroundColor = "rgb(7, 2, 48)";
};
putOffStylesForCheckbox = () => {
  /* desactivar estilo estilo */
  alert("Modo oscuro Desactivado");
  bodyStyles.style.backgroundColor = "azure";
};

const button1 =
  document.querySelector(
    ".button-1"
  ); /* boton para cambiar el fondo y la fuente */
const button2 =
  document.querySelector(
    ".button-2"
  ); /* boton para cambiar el tamño de la fuente y la fuente */
const button3 =
  document.querySelector(".button-3"); /* boton para desahacer cambios*/

changeBackground_Font = () => {
  /*   alert("boton1"); */
  for (i = 0; i < contenedores_.length; i++) {
    contenedores_[i].classList.toggle("changeBackground_Font");

/*  */

    bodyIdSelect.style.backgroundColor = "darkblue";
    (bodyIdSelect.style.fontFamily = "Poppins"), "sans-serif";
    bodyIdSelect.style.color = "violet";
  }
};

changeSizeFont_FamilyFont = () => {
  /*   alert("boton2"); */
  for (i = 0; i < contenedores_.length; i++) {
    contenedores_[i].classList.toggle("changeSizeFont_FamilyFont");

    bodyIdSelect.style.fontSize = "50px";
    (bodyIdSelect.style.fontFamily = "Roboto"), "sans-serif";
    bodyIdSelect.style.color = "blueviolet";
  }
};

restoreChanges = () => {
  /*   alert("boton3"); */
  for (i = 0; i < contenedores_.length; i++) {
    contenedores_[i].classList.toggle("restoreChanges");

    bodyIdSelect.style.backgroundColor = "azure";
  }

  /* bodyStyles[i].undo; */
};

