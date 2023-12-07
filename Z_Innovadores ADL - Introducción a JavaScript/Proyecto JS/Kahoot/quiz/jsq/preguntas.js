class preguntas{
    constructor(pregunta, imagen, opcion1,opcion2,opcion3,opcion4, respuesta){
        this.pregunta = pregunta;
        this.imagen = imagen;
        this.opcion1 = opcion1;
        this.opcion2 = opcion2;
        this.opcion3 = opcion3;
        this.opcion4 = opcion4;
        this.respuesta = respuesta;
    }
}
var primeraPregunta =  new preguntas("El primer conjunto de números que existió fueron los Dígitos ¿Dónde empieza el conjunto digito? Escoja la respuesta correcta", "https://www.ejemplosde.com/images/uploads/matematicas/suma.png?1560785365191",5,4,7,2,3);
var segundaPregunta = new preguntas("¿Cuanto es 3 * 3?","https://i.ytimg.com/vi/YFtEaVw5k1A/maxresdefault.jpg",15,9,16,6,2);
var terceraPregunta = new preguntas("¿Cual es la raiz cuadrada de 100?", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Racine_carr%C3%A9e_bleue.svg/1200px-Racine_carr%C3%A9e_bleue.svg.png",10,50,100,25,1);
var cuartaPregunta = new preguntas("¿Cuanto es 9 al cuadrado?","https://i.ytimg.com/vi/loEjcsaXh2Y/maxresdefault.jpg", 18,81,36,49,2);
var quintaPregunta = new preguntas ("¿Cual es la operación que permite repartir en partes iguales cierta cantidad de elementos?","https://img.freepik.com/vector-premium/ninos-objetos-matematicos_1639-28398.jpg","Suma","Resta","Multiplicacion","Division",4);

var vectorPreguntas = [primeraPregunta,segundaPregunta,terceraPregunta,cuartaPregunta,quintaPregunta];

export{preguntas,primeraPregunta,segundaPregunta,terceraPregunta,cuartaPregunta,quintaPregunta,vectorPreguntas};