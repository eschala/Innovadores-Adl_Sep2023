import { SUMA } from "./suma.js";
import { RESTA } from "./resta.js";

const VALIDATIONS =()=>{
    
//Seleccionamos los inputs
const CHECK_SUMA = document.querySelector("#suma");
const CHECK_RESTA = document.querySelector("#resta");

if (CHECK_SUMA.checked==true && CHECK_RESTA.checked==false){
    SUMA();
}

else if (CHECK_SUMA.checked==false && CHECK_RESTA.checked==true){
    RESTA();
}

else if (CHECK_SUMA.checked==true && CHECK_RESTA.checked==true){
alert("No puedes seleccionar dos (2) operaciones al mismo tiempo.");
CHECK_SUMA.checked=false;
CHECK_RESTA.checked=false;
}

else if (CHECK_SUMA.checked==false && CHECK_RESTA.checked==false){
alert("Por favor seleccione una operación");
}

}


export{
VALIDATIONS

}