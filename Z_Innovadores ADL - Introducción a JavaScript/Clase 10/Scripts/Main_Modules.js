import {SumaFunction} from "./Suma.js";

import {RestaFunction} from "./Resta.js";
import {DividirFunction} from "./Dividir.js";
import {MultiplicarFunction} from "./Multiplicar.js";
import { ForValidation} from "./Validations.js";
import { ValidationSuma,ValidationResta,ValidationMultiplicacion,ValidationDivicion} from "./Validations.js";
/* import {  VALIDATIONS } from "./Validations.js"; */


const BTN = document.querySelector(".calcular");

const clickCheckBox_Suma= document.querySelector("#Sumar_ID");
const clickCheckBox_Resta= document.querySelector("#Restar_ID");
const clickCheckBox_Multiplicacion= document.querySelector("#Multiplicar_ID");
const clickCheckBox_Division= document.querySelector("#Dividir_ID");

if(clickCheckBox_Suma.checked==true){
    clickCheckBox_Resta.checked = false;
    clickCheckBox_Multiplicacion.checked = false;
    clickCheckBox_Division.checked = false;
}
if(clickCheckBox_Resta.checked==true){
    clickCheckBox_Suma.checked = false;
    clickCheckBox_Multiplicacion.checked = false;
    clickCheckBox_Division.checked = false;
}
if(clickCheckBox_Multiplicacion.checked==true){
    clickCheckBox_Suma.checked = false;
    clickCheckBox_Resta.checked = false;
    clickCheckBox_Division.checked = false;

}
if(clickCheckBox_Division.checked==true){
    clickCheckBox_Suma.checked = false;
    clickCheckBox_Resta.checked = false;
    clickCheckBox_Multiplicacion.checked = false;
}


BTN.addEventListener("click",ForValidation);
clickCheckBox_Suma.addEventListener("click",ForValidation);
clickCheckBox_Suma.addEventListener("click",ValidationSuma);
clickCheckBox_Resta.addEventListener("click",ValidationResta);
clickCheckBox_Multiplicacion.addEventListener("click",ValidationMultiplicacion);
clickCheckBox_Division.addEventListener("click",ValidationDivicion);







/* 
import {SumaFunction} from "./Suma.js"
import {RestaFunction} from "./Resta.js"
import {MultiplicarFunction} from "./Multiplicar.js"
import {DividirFunction} from "./Dividir.js"

SumaFunction();
RestaFunction();
MultiplicarFunction();
DividirFunction();
 */