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

/* acctionButton(); */

// function acctionButton() {
acctionButton_changeBackground_Font = () => {
/*   alert("<br>" + "acctionButton_changeBackground_Font"); */
  /* acction de cambiar aaa */
  action_Check_applyStylesBackground_Font = 1;
  body_Estilo.classList.add("applyStylesBackground_Font-body");
  container_Main.classList.add("applyStylesBackground_Font-containter-main");
  h1_Estilo.classList.add("applyStylesBackground_Font-tittle");
  Paragragh_Estilo.classList.add("applyStylesBackground_Font-paragraph-1");
  checkbox_Label.classList.add("applyStylesBackground_Font-checkbox-label");
  checkbox_Input.classList.add("applyStylesBackground_Font-checkbox_input");
  checkbox_Container.classList.add(
    "applyStylesBackground_Font-checkbox-container"
  );
  button_Container.classList.add("applyStylesBackground_Font-btn-container");
  button1_Estilo.classList.add("applyStylesBackground_Font-button-1");
  button2_Estilo.classList.add("applyStylesBackground_Font-button-2");
  button3_Estilo.classList.add("applyStylesBackground_Font-button-3");
  for (i = 0; i < buttonAllSelect_Estilo.length; i++) {
    buttonAllSelect_Estilo[i].classList.add("applyStylesBackground_Font-btn");
  }
  if (    (action_Check_applyStylesSizeFont_FamilyFont = 1)==true) {
    h1_Estilo.innerHTML = "Acción del boton 1 Activada";
    Paragragh_Estilo.innerHTML = "Tipografia POPPINS y Color de fondo cambiado";


  }

  /* {
    





    action_Check_applyStylesSizeFont_FamilyFont = 2;
    body_Estilo.classList.add("applyStylesSizeFont_FamilyFont-body");
    container_Main.classList.add("applyStylesSizeFont_FamilyFont-containter-main");
    h1_Estilo.classList.add("applyStylesSizeFont_FamilyFont-tittle");
    Paragragh_Estilo.classList.add("applyStylesSizeFont_FamilyFont-paragraph-1");
    checkbox_Label.classList.add("applyStylesSizeFont_FamilyFont-checkbox-label");
    checkbox_Input.classList.add("applyStylesSizeFont_FamilyFont-checkbox_input");
    checkbox_Container.classList.add("applyStylesSizeFont_FamilyFont-checkbox-container");
    button_Container.classList.add("applyStylesSizeFont_FamilyFont-btn-container");
    button1_Estilo.classList.add("applyStylesSizeFont_FamilyFont-button-1");
    button2_Estilo.classList.add("applyStylesSizeFont_FamilyFont-button-2");
    button3_Estilo.classList.add("applyStylesSizeFont_FamilyFont-button-3");
  
    for (i = 0; i < buttonAllSelect_Estilo.length; i++) {
      buttonAllSelect_Estilo[i].classList.add("applyStylesSizeFont_FamilyFont-btn");
    }
  }
    
 */
};
acctionButton_changeSizeFont_FamilyFont = () => {
/*   alert("<br>" + "acctionButton_changeSizeFont_FamilyFont"); */
  /* acction de cambiar aaa */
  action_Check_applyStylesSizeFont_FamilyFont = 2;
  body_Estilo.classList.add("applyStylesSizeFont_FamilyFont-body");
  container_Main.classList.add(
    "applyStylesSizeFont_FamilyFont-containter-main"
  );
  h1_Estilo.classList.add("applyStylesSizeFont_FamilyFont-tittle");
  Paragragh_Estilo.classList.add("applyStylesSizeFont_FamilyFont-paragraph-1");
  checkbox_Label.classList.add("applyStylesSizeFont_FamilyFont-checkbox-label");
  checkbox_Input.classList.add("applyStylesSizeFont_FamilyFont-checkbox_input");
  checkbox_Container.classList.add(
    "applyStylesSizeFont_FamilyFont-checkbox-container"
  );
  button_Container.classList.add(
    "applyStylesSizeFont_FamilyFont-btn-container"
  );
  button1_Estilo.classList.add("applyStylesSizeFont_FamilyFont-button-1");
  button2_Estilo.classList.add("applyStylesSizeFont_FamilyFont-button-2");
  button3_Estilo.classList.add("applyStylesSizeFont_FamilyFont-button-3");
  for (i = 0; i < buttonAllSelect_Estilo.length; i++) {
    buttonAllSelect_Estilo[i].classList.add(
      "applyStylesSizeFont_FamilyFont-btn"
    );
  }
  if (
    (action_Check_applyStylesSizeFont_FamilyFont == 2)  == true
  ) {

    h1_Estilo.innerHTML = "Acción del boton 2 Activada";
    Paragragh_Estilo.innerHTML =
      "Tipografia ROBOTO y tamaño de fuente aumentado a 50px";

  }

  /* {    action_Check_applyStylesBackground_Font = 1;
    body_Estilo.classList.add("applyStylesBackground_Font-body");
    container_Main.classList.add("applyStylesBackground_Font-containter-main");
    h1_Estilo.classList.add("applyStylesBackground_Font-tittle");
    Paragragh_Estilo.classList.add("applyStylesBackground_Font-paragraph-1");
    checkbox_Label.classList.add("applyStylesBackground_Font-checkbox-label");
    checkbox_Input.classList.add("applyStylesBackground_Font-checkbox_input");
    checkbox_Container.classList.add("applyStylesBackground_Font-checkbox-container");
    button_Container.classList.add("applyStylesBackground_Font-btn-container");
    button1_Estilo.classList.add("applyStylesBackground_Font-button-1");
    button2_Estilo.classList.add("applyStylesBackground_Font-button-2");
    button3_Estilo.classList.add("applyStylesBackground_Font-button-3");
    for (i = 0; i < buttonAllSelect_Estilo.length; i++) {
      buttonAllSelect_Estilo[i].classList.add("applyStylesBackground_Font-btn");
    }
} */
};
acctionButton_restoreChanges = () => {
  alert("Se restablecio la configuracion de la pagina");
  /* acction de cambiar aaa */
  action_Check_applyrestoreChanges = 3;
  body_Estilo.classList.remove(
    "applyStylesSizeFont_FamilyFont-body",
    "applyStylesBackground_Font-body",
    "applyStylesModeDark-body"
  );
  container_Main.classList.remove(
    "applyStylesSizeFont_FamilyFont-containter-main",
    "applyStylesBackground_Font-containter-main",
    "applyStylesModeDark-containter-main"
  );
  h1_Estilo.classList.remove(
    "applyStylesSizeFont_FamilyFont-tittle",
    "applyStylesBackground_Font-tittle",
    "applyStylesModeDark-tittle"
  );
  Paragragh_Estilo.classList.remove(
    "applyStylesSizeFont_FamilyFont-paragraph-1",
    "applyStylesBackground_Font-paragraph-1",
    "applyStylesModeDark-paragraph-1"
  );
  checkbox_Label.classList.remove(
    "applyStylesSizeFont_FamilyFont-checkbox-label",
    "applyStylesBackground_Font-checkbox-label",
    "applyStylesModeDark-checkbox-label"
  );
  checkbox_Input.classList.remove(
    "applyStylesSizeFont_FamilyFont-checkbox_input",
    "applyStylesBackground_Font-checkbox_input",
    "applyStylesModeDark-checkbox_input"
  );
  checkbox_Container.classList.remove(
    "applyStylesSizeFont_FamilyFont-checkbox-container",
    "applyStylesBackground_Font-checkbox-container",
    "applyStylesModeDark-checkbox-container"
  );
  button_Container.classList.remove(
    "applyStylesSizeFont_FamilyFont-btn-container",
    "applyStylesBackground_Font-btn-container",
    "applyStylesModeDark-btn-container"
  );
  button1_Estilo.classList.remove(
    "applyStylesSizeFont_FamilyFont-button-1",
    "applyStylesBackground_Font-button-1",
    "applyStylesModeDark-button-1"
  );
  button2_Estilo.classList.remove(
    "applyStylesSizeFont_FamilyFont-button-2",
    "applyStylesBackground_Font-button-2",
    "applyStylesModeDark-button-2"
  );
  button3_Estilo.classList.remove(
    "applyStylesSizeFont_FamilyFont-button-3",
    "applyStylesBackground_Font-button-3",
    "applyStylesModeDark-button-3"
  );
  for (i = 0; i < buttonAllSelect_Estilo.length; i++) {
    buttonAllSelect_Estilo[i].classList.remove(
      "applyStylesSizeFont_FamilyFont-btn",
      "applyStylesBackground_Font-btn",
      "applyStylesModeDark-btn"
    );
  }
  h1_Estilo.innerHTML = "Modo por defecto";
  Paragragh_Estilo.innerHTML =
    "Este parrafo es un ejemplo de el preestablecido por defecto";

  /* if (action_Check_applyrestoreChanges == 3) {
      checkbox_Input.removeEventListener(
        applyStylesForCheckbox,
        acctionButton_changeBackground_Font,
        acctionButton_changeSizeFont_FamilyFont
      );
    } else {
      if (checkbox_Input.checked == true) {
        alert("Ejecutó applyStylesForCheckbox()");
        applyStylesForCheckbox();
      } else if (checkbox_Input.checked == false) {
        applyStylesForCheckbox();
        alert("Ejecutó applyStylesForCheckbox()");
      }
    } */
};
// }
