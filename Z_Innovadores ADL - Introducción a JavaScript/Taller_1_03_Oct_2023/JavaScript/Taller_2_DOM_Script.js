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

const activateCheckbox = () => {
  /* checkbox funcion */
  for (i = 0; i < contenedores_.length; i++) {
    contenedores_[i].classList.toggle("activateCheckbox");

    if (stylesForCheckbox.checked == false) {
      alert("Checkbox Activado");





    } else if (stylesForCheckbox.checked == true) {
      alert("Checkbox Desactivado");

      


    }



  }



  
};

