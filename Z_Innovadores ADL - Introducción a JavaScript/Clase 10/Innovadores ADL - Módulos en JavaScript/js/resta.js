//Función que realiza la operación de la suma
const RESTA = ()=>{
    const RS= document.querySelector(".resultado");
    const N1 = document.querySelector("#n1");
    const N2 = document.querySelector("#n2");
    //Constante para almacenar el resultado
    const RESULTADO = parseInt(N1.value)-parseInt(N2.value);
    RS.innerHTML=RESULTADO;
    }
    
    //Exportamos la función suma
    export{
        RESTA
    }