
class Planetas {
    constructor(nombre,tamano,color,gravedad){
    this.nombre=nombre;
    this.tamano=tamano;
    this.color=color;
    this.gravedad=gravedad;
}

info(){
        return (`Hola soy el planeta ${this.nombre}, 
        mi tamaño es ${this.tamano}, soy de color ${this.color} y tengo ${this.gravedad} de gravedad.`);
    }
    
}


const tierra = new Planetas("Tierra","6.371km","azul, verde y marrón","9.8m/sg");
const marte = new Planetas("Marte","3.389km","marrón","3.71m/sg");

//tierra.info();


const VALIDAR_PLANETA = ()=>{
    TEXTO_USUARIO = document.querySelector(".texto-usuario");
    RESULTADO = document.querySelector(".rs");
    IMAGEN = document.querySelector(".planeta");
    if(TEXTO_USUARIO.value==="Tierra"){
        RESULTADO.innerHTML= tierra.info();
        IMAGEN.src="https://static.nationalgeographic.es/files/styles/image_3200/public/940.jpg?w=1900&h=1427"
    }
    else if (TEXTO_USUARIO.value==="Marte"){
        RESULTADO.innerHTML= marte.info();
        IMAGEN.src="https://fotografias.lasexta.com/clipping/cmsimages01/2023/07/06/6DF6DDE6-1250-48BB-8F63-09BE692B4CF3/nueva-imagen-marte-muestra-que-tan-rojo-como-pensabamos_98.jpg?crop=1287,724,x82,y0&width=1900&height=1069&optimize=high&format=webply"
    }

    else{
        alert("No es un planeta");
    }

}



class planetaAnillos extends Planetas {
    constructor(nombre,tamano,color,gravedad,anillos){
        super(nombre,tamano,color,gravedad);    
        this.anillos = anillos;
    }

    infoAnillo(){
        alert("Hola, soy un planeta con anillos.")
    }
}

const saturno = new planetaAnillos("Saturno", "3.456km","Verde","9.121m/s",true)


//saturno.infoAnillo();

document.write(saturno.anillos);


