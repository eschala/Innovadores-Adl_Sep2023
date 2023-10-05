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









activar_Checkbox();

const activateCheckbox = () => {
  /*   alert("probando"); */
    /* checkbox funcion activar/desactivar*/
  
    {
      container_Main.classList.toggle("activateCheckbox");
  
      {
        if (checkbox_Input.checked == true) {
          /* alert("Modo oscuro Activado"); */
          h1_Estilo.innerHTML = "Modo oscuro Activado";
  
          applyStylesForCheckbox();
        } else if (checkbox_Input.checked == false) {
  
          
          applyStylesForCheckbox();
          
          alert("Modo oscuro Desactivado");
          h1_Estilo.innerHTML = "Modo por defecto";
        }else{
          action_Check_applyrestoreChanges();
          h1_Estilo.innerHTML = "Modo por defecto";
        }
      }
      {
      }
    }
    {
  /*     acctionButton_changeBackground_Font();
      acctionButton_changeSizeFont_FamilyFont();
      acctionButton_restoreChanges(); */
    }
  };

  
/* putOffStylesForCheckbox = () => {
    // desactivar estilo estilo
    alert("Modo oscuro Desactivado");    
    checkbox_Input.classList.toggle("applyStylesCheckbox");

    body_Estilo.style.backgroundColor = "lightblue";
  };
   */
applyStylesForCheckbox = () => {
  // /* aplicar estilo al pulsar el Checkbox de MODO OSCURO*/
  /* referenciasDeClase

    -body
    -containter-main
    -tittle
    -paragraph-1
    -checkbox-label
    -checkbox_input
    -checkbox-container
    -btn-container
    -button-1
    -button-2
    -button-3
    -btn
    
    Referencias Nomenclatura

    applyStylesModeDark = Modo oscuro
    applyStylesBackground_Font = Accion boton 1
    applyStylesSizeFont_FamilyFont = Accion boton 2
    applyrestoreChanges = Accion boton 3
    
    */




  body_Estilo.classList.toggle("applyStylesModeDark-body");
  container_Main.classList.toggle("applyStylesModeDark-containter-main");
  h1_Estilo.classList.toggle("applyStylesModeDark-tittle");
  Paragragh_Estilo.classList.toggle("applyStylesModeDark-paragraph-1");
  checkbox_Label.classList.toggle("applyStylesModeDark-checkbox-label");
  checkbox_Input.classList.toggle("applyStylesModeDark-checkbox_input");
  checkbox_Container.classList.toggle("applyStylesModeDark-checkbox-container");
  button_Container.classList.toggle("applyStylesModeDark-btn-container");
  button1_Estilo.classList.toggle("applyStylesModeDark-button-1");
  button2_Estilo.classList.toggle("applyStylesModeDark-button-2");
  button3_Estilo.classList.toggle("applyStylesModeDark-button-3");
  for (i = 0; i < buttonAllSelect_Estilo.length; i++) {
    buttonAllSelect_Estilo[i].classList.toggle("applyStylesModeDark-btn");
  }


};
