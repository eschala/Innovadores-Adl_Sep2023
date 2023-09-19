


function mostrarDatos(){


    nameInput=prompt("Nombre");
    ageInput=prompt("Edad");
    cityInput=prompt("Ciudad");
    document.write("<br>");

    document.write(`A ${nameInput}B ${ageInput}C ${cityInput}`);



    if(ageInput>18){

        alert("bienvenido");

    }
    else{
        alert("devuelvase mijo");


    }

    document.write("<br>");
    document.write(document.getElementById("input-name").value);
    document.write("<br>");
    document.write(document.getElementById("input-age").value);
    document.write("<br>");
    document.write(document.getElementById("input-city").value);

}