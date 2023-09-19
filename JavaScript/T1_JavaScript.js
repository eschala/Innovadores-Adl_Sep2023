
var NameInput, AgeInput,CityInput;

NameInput=prompt("Escriba su nombre");AgeInput=prompt("Escriba su edad");CityInput=prompt("Escriba su ciudad");

document.write(`${NameInput} de ${AgeInput} años de la ciudad ${CityInput} <br>`);

if(AgeInput>=18){

    document.write("Mi loco dele pa' dentro, Usted puede ingresar porque es mayor de edad");

}
else{
    document.write("Mi loco dele pa' fuera, Devuelvase mijo, usted no tiene permiso, vuelva cuando sea mayor de edad");
}