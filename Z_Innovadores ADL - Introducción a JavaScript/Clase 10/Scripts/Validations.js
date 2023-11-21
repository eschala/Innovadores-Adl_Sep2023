import { SumaFunction } from "./Suma.js";
import { RestaFunction } from "./Resta.js";
import { DividirFunction } from "./Dividir.js";
import { MultiplicarFunction } from "./Multiplicar.js";

const VALIDATIONS = () => {
  //Seleccionamos los inputs
  const check_Sumar = document.querySelector("#Sumar_ID");
  const check_Restar = document.querySelector("#Restar_ID");
  const check_Multiplicar = document.querySelector("#Multiplicar_ID");
  const check_Dividir = document.querySelector("#Dividir_ID");

  if (
    check_Sumar.checked == false &&
    check_Restar.checked == false &&
    check_Multiplicar.checked == false &&
    check_Dividir.checked == false
  ) {
  }

  /*   if (check_Suma.checked == true && check_Resta.checked == false) {
    SumaFunction();
  } 
  else if (check_Suma.checked == false && check_Resta.checked == true) {
    RestaFunction();
  } 
  else if (check_Suma.checked == true && check_Resta.checked == true) {
    alert("No puedes seleccionar dos (2) operaciones al mismo tiempo.");
    check_Suma.checked = false;
    check_Resta.checked = false;
  } 
  else if (check_Suma.checked == false && check_Resta.checked == false) {
    alert("Por favor seleccione una operación");
  }else if{
    DividirFunction();
    MultiplicarFunction();
  }
   */
};
  const check_Sumar = document.querySelector("#Sumar_ID");
  const check_Restar = document.querySelector("#Restar_ID");
  const check_Multiplicar = document.querySelector("#Multiplicar_ID");
  const check_Dividir = document.querySelector("#Dividir_ID");
const ForValidation = () => {
{

  if (check_Sumar.checked == true) {
    ValidationSuma();


    
  } else if (check_Restar.checked == true) {
    ValidationResta();



    
  } else if (check_Multiplicar.checked == true) {
    ValidationMultiplicacion();



    
  } else if (check_Dividir.checked == true) {
    ValidationDivicion();


    
  } else {
    alert("hay algun error");
  }}
};

const ValidationSuma = () => {
    SumaFunction();

    check_Restar.checked = false;
    check_Multiplicar.checked = false;
    check_Dividir.checked = false;

    MostrarCreditos();
};
const ValidationResta = () => {
    RestaFunction();

    check_Sumar.checked = false;
    check_Multiplicar.checked = false;
    check_Dividir.checked = false;

    MostrarCreditos();
};
const ValidationMultiplicacion = () => {
    MultiplicarFunction();

    check_Restar.checked = false;
    check_Sumar.checked = false;
    check_Dividir.checked = false;

    MostrarCreditos();
};
const ValidationDivicion = () => {
    DividirFunction(); 

    check_Restar.checked = false;
    check_Multiplicar.checked = false;
    check_Sumar.checked = false;

    MostrarCreditos();
};

const MostrarCreditos=()=>{

    const ShowCredits=document.querySelector(".t3");
    ShowCredits.style.display="block";
    ShowCredits.style.color="aliceblue";

}

export { /* VALIDATIONS */ ForValidation,ValidationSuma,ValidationResta,ValidationMultiplicacion,ValidationDivicion,MostrarCreditos }
