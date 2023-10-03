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

const stylesForCheckbox = document.querySelector(".checkbox_input");
const contenedores_ = document.querySelectorAll(".checkbox-container");

const activateCheckbox = () => {
  for (i = 0; i < contenedores_.length; i++) {
    contenedores_[i].classList.toggle("activateCheckbox");

    if (stylesForCheckbox.checked == true) {
        alert("Checkbox Activado");

        applyStylesCheckbox();
      } else {
        alert("Checkbox Desactivado");




        putOffStylesForCheckbox();
      }


  }
};

stylesForCheckbox.addEventListener("click", activateCheckbox);


let applyStylesCheckbox =()=>{

    let bodyStyles = document.querySelector(".body_page");

    for(i=0;i<bodyStyles.length;i++){
        
        bodyStyles[i].classList.toggle("applyStylesCheckbox");

    }

    (bodyStyles.style.backgroundColor)= "blue";
}

const putOffStylesForCheckbox = ()=>{


    for(i=0;i<bodyStyles.length;i++){
        
        bodyStyles[i].classList.toggle("applyStylesCheckbox");

    }
    bodyStyles.style.backgroundColor = "default";

}