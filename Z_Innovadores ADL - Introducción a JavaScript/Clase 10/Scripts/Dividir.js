
const DividirFunction=()=>{



    const n1=parseInt(document.querySelector("#Number_1").value);
    const n2=parseInt(document.querySelector("#Number_2").value);


    const rs = document.querySelector(".Resultado_SCREEN");

    const result = n1/n2;

    rs.innerHTML=result;
}


export{

    DividirFunction

}