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
