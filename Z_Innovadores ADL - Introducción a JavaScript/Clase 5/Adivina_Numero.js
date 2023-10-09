
const ejecutarFuncion = ()=>{


    
const intputText = document.querySelector(".container_Main__inputNumber");
const numRandom = ~~(Math.random()*10);

const mostrarH = document.querySelector(".container_Main__Advice");
const mostrarH2 = document.querySelector(".container_Main__Advice2");


mostrarH.innerHTML = intputText.value;


//    alert("el numero random es " +numRandom);


    if (intputText.value == numRandom) {


        mostrarH.style.color = "green";
    
        mostrarH.innerHTML = "Estimado usuario, se la ganó, es " + numRandom;
    
    
    } else {
    
    
        mostrarH.style.color = "red";
        mostrarH.innerHTML = "Estimado usuario, no se la ganó, es " + numRandom;
    
    
    }
    
    mostrarH2.innerHTML=numRandom;
/*     alert(intputText.value); */

}


