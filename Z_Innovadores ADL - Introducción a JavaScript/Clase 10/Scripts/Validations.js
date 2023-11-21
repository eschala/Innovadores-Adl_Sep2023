

import {SumaFunction} from "./Suma.js"
import {RestaFunction} from "./Resta.js"

const VALIDATIONS =()=>{
    
//Seleccionamos los inputs
const check_Suma = document.querySelector("#Sumar_ID");
const check_Resta = document.querySelector("#Restar_ID");
if (check_Suma.checked==true && check_Resta.checked==false){
    SumaFunction();
}

else if (check_Suma.checked==false && check_Resta.checked==true){
    RestaFunction();
}

else if (check_Suma.checked==true && check_Resta.checked==true){
alert("No puedes seleccionar dos (2) operaciones al mismo tiempo.");
check_Suma.checked=false;
check_Resta.checked=false;
}

else if (check_Suma.checked==false && check_Resta.checked==false){
alert("Por favor seleccione una operación");
}

}


export{
VALIDATIONS

}


