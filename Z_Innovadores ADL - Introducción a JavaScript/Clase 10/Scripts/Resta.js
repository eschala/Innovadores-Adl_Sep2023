const RestaFunction=()=>{



    const n1=parseInt(prompt("Digite el primero numero"));
    const n2=parseInt(prompt("Digite el Segundo numero"));

    const rs = document.querySelector(".Resultado_SCREEN");

    const result = n1-n2;

    rs.innerHTML=result;
}


export{

    RestaFunction

}