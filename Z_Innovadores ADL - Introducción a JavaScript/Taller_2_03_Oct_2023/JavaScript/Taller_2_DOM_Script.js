const body_Estilo = document.querySelector(".body_page");
const container_Main = document.querySelector(".containter-main");
const h1_Estilo = document.querySelector(".tittle");
const Paragragh_Estilo = document.querySelector(".paragraph-1");
const checkbox_Label = document.querySelector(".checkbox-label");
const checkbox_Input = document.querySelector(".checkbox_input");
const checkbox_Container = document.querySelector(".checkbox-container");
const button_Container = document.querySelector(".btn-container");
const button1_Estilo = document.querySelector(".button-1");
const button2_Estilo = document.querySelector(".button-2");
const button3_Estilo = document.querySelector(".button-3");
const buttonAllSelect_Estilo = document.querySelectorAll(".btn");

/* var activar_Checkbox, desactivar_Checkbox;
const stylesForCheckbox = document.querySelector(".checkbox_input");
const contenedores_ = document.querySelectorAll(".checkbox-container");
const bodyStyles = document.querySelector(".body_page");

const bodyIdSelect = document.querySelector("#body__"); */

const activateCheckbox = () => {
  alert("probando");
  /* checkbox funcion activar/desactivar*/

  {
    container_Main.classList.toggle("activateCheckbox");

    {
      if (checkbox_Input.checked == true) {
        alert("Modo oscuro Activado");
        applyStylesForCheckbox();
      } else if (checkbox_Input.checked == false) {
        applyStylesForCheckbox();
        alert("Modo oscuro Desactivado");
      }
    }
    {
      /* if(){}else
      if(){}else{} */
    }
  }
  {
    acctionButton_changeBackground_Font();
    acctionButton_changeSizeFont_FamilyFont();
    acctionButton_restoreChanges();
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
  for(i=0;i<buttonAllSelect_Estilo.length;i++){
  buttonAllSelect_Estilo[i].classList.toggle("applyStylesModeDark-btn");
};

}

acctionButton();

function acctionButton() {


  
  acctionButton_changeBackground_Font = () => {

alert("<br>"+"acctionButton_changeBackground_Font");
    /* acction de cambiar aaa */
action_Check_applyStylesBackground_Font=1;
    body_Estilo.classList.toggle("applyStylesBackground_Font-body");
    container_Main.classList.toggle("applyStylesBackground_Font-containter-main");
    h1_Estilo.classList.toggle("applyStylesBackground_Font-tittle");
    Paragragh_Estilo.classList.toggle("applyStylesBackground_Font-paragraph-1");
    checkbox_Label.classList.toggle("applyStylesBackground_Font-checkbox-label");
    checkbox_Input.classList.toggle("applyStylesBackground_Font-checkbox_input");
    checkbox_Container.classList.toggle("applyStylesBackground_Font-checkbox-container");
    button_Container.classList.toggle("applyStylesBackground_Font-btn-container");
    button1_Estilo.classList.toggle("applyStylesBackground_Font-button-1");
    button2_Estilo.classList.toggle("applyStylesBackground_Font-button-2");
    button3_Estilo.classList.toggle("applyStylesBackground_Font-button-3");
    for(i=0;i<buttonAllSelect_Estilo.length;i++){
    buttonAllSelect_Estilo[i].classList.toggle("applyStylesBackground_Font-btn");
  

}

    if(action_Check_applyStylesBackground_Font==1){
        body_Estilo.removeEventListener(acctionButton_changeBackground_Font);
    }else {}
};
  acctionButton_changeSizeFont_FamilyFont = () => {

alert("<br>"+"acctionButton_changeSizeFont_FamilyFont");
    /* acction de cambiar aaa */
action_Check_applyStylesSizeFont_FamilyFont=2;
    body_Estilo.classList.toggle("applyStylesSizeFont_FamilyFont-body");
    container_Main.classList.toggle("applyStylesSizeFont_FamilyFont-containter-main");
    h1_Estilo.classList.toggle("applyStylesSizeFont_FamilyFont-tittle");
    Paragragh_Estilo.classList.toggle("applyStylesSizeFont_FamilyFont-paragraph-1");
    checkbox_Label.classList.toggle("applyStylesSizeFont_FamilyFont-checkbox-label");
    checkbox_Input.classList.toggle("applyStylesSizeFont_FamilyFont-checkbox_input");
    checkbox_Container.classList.toggle("applyStylesSizeFont_FamilyFont-checkbox-container");
    button_Container.classList.toggle("applyStylesSizeFont_FamilyFont-btn-container");
    button1_Estilo.classList.toggle("applyStylesSizeFont_FamilyFont-button-1");
    button2_Estilo.classList.toggle("applyStylesSizeFont_FamilyFont-button-2");
    button3_Estilo.classList.toggle("applyStylesSizeFont_FamilyFont-button-3");
    for(i=0;i<buttonAllSelect_Estilo.length;i++){
    buttonAllSelect_Estilo[i].classList.toggle("applyStylesSizeFont_FamilyFont-btn");
  

}

    if(action_Check_applyStylesSizeFont_FamilyFont==2){
        body_Estilo.removeEventListener(acctionButton_changeSizeFont_FamilyFont);
    }else {}
};
  acctionButton_restoreChanges = () => {

    alert("<br>"+"acctionButton_restoreChanges");
    /* acction de cambiar aaa */
action_Check_applyrestoreChanges=3;
    body_Estilo.classList.toggle("applyrestoreChanges-body");
    container_Main.classList.toggle("applyrestoreChanges-containter-main");
    h1_Estilo.classList.toggle("applyrestoreChanges-tittle");
    Paragragh_Estilo.classList.toggle("applyrestoreChanges-paragraph-1");
    checkbox_Label.classList.toggle("applyrestoreChanges-checkbox-label");
    checkbox_Input.classList.toggle("applyrestoreChanges-checkbox_input");
    checkbox_Container.classList.toggle("applyrestoreChanges-checkbox-container");
    button_Container.classList.toggle("applyrestoreChanges-btn-container");
    button1_Estilo.classList.toggle("applyrestoreChanges-button-1");
    button2_Estilo.classList.toggle("applyrestoreChanges-button-2");
    button3_Estilo.classList.toggle("applyrestoreChanges-button-3");
    for(i=0;i<buttonAllSelect_Estilo.length;i++){
    buttonAllSelect_Estilo[i].classList.toggle("applyrestoreChanges-btn");
  

}

    if(action_Check_applyrestoreChanges==3){
        checkbox_Input.removeEventListener(applyStylesForCheckbox,acctionButton_changeBackground_Font,acctionButton_changeSizeFont_FamilyFont);
    }else{
        if (checkbox_Input.checked == true) {
            alert("Ejecutó applyStylesForCheckbox()");
            applyStylesForCheckbox();
          } else if (checkbox_Input.checked == false) {
            applyStylesForCheckbox();
            alert("Ejecutó applyStylesForCheckbox()");
          }
      
    } 
};


 



}

