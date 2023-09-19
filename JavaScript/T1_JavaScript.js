
function mostrarDatos(){


    var nameInput=document.getElementById("label-name").value;
    var ageInput=parseInt(document.getElementById("label-age").value);
    var cityInput=document.getElementById("label-city").value;
    document.write("<br>");

   



    if(ageInput>18){

        alert("bienvenido");
        document.write(`Señor o señora ${nameInput} con ${ageInput} años de la ciudad ${cityInput}`);

    }
    else{
        alert("devuelvase mijo");
        document.write(`Joven/adolecente/niño ${nameInput} con ${ageInput} años de la ciudad ${cityInput}`);
        document.write("regrese cuando tenga la mayoria de edad");
    }


}