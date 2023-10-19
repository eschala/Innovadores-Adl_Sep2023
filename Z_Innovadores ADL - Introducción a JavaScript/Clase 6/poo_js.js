class Planetas{
    constructor(name,size,color,gravity){
        this.name=name;
        this.size=size;
        this.color=color;
        this.gravity=gravity;
        
    }
    info(){
    
        document.write("Hola soy el planeta "+this.name+"<br>");
        document.write("Mi tamaño es "+this.size+"<br>");
        document.write("de color "+this.color+"<br>");
        document.write("y gravedad de "+this.gravity+"<br>");

        
    }
}


const tierra = new Planetas("Tierra","6.371","Azul,Verde y Marron","9.8m/s^2");


const marte = new Planetas("Marte","3.389","Marrón","3.71m/s^2");





const text_name_USER = document.querySelector(".text__name");
const text_size_USER = document.querySelector(".text__size");
const text_color_USER = document.querySelector(".text__color");
const text_gravity_USER = document.querySelector(".text__gravity");

const paragraphResult = document.querySelector(".Resultado");


const validarPlaneta=()=>{
    if((text_name_USER.value==="Tierra")||(text_name_USER.value==="tierra")){
        paragraphResult.innerHTML=tierra.info();



    }
    else
    if((text_name_USER.value==="Marte")||(text_name_USER.value==="marte"))
    {
        paragraphResult.innerHTML=marte.info();
    }
    else{
        alert("agregar uno nuevo");
        addPlanetas();
        
    }
}

const addPlanetas=()=>{

    const namePlanet= new Planetas(text_name_USER.value,text_size_USER.value,text_color_USER.value,text_gravity_USER.value);
    paragraphResult.innerHTML=namePlanet.info();



}