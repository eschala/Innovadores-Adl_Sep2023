const showTempo = document.querySelector(".class-tempo");
const showTiempo = document.querySelector(".class-tiempo");
const showGolpes = document.querySelector(".class-golpes");

const inputTempo = document.querySelector("#tempo");
const intputTiempo = document.querySelector("#tiempo");
const inputGolpes = document.querySelector("#golpes");

inputTempo.style.display = "none";
intputTiempo.style.display = "none";
inputGolpes.style.display = "none";

var tempo = 0,
  golpes = 0,
  tiempo = 0;

/* tempo = golpes / tiempo;
tiempo = golpes * tempo;
golpes = tiempo * tempo; */

const showTempoClick = () => {
  inputTempo.style.display = "none";
  intputTiempo.style.display = "block";
  inputGolpes.style.display = "block";

  tiempo = parseFloat(intputTiempo.value);
  golpes = parseFloat(inputGolpes.value);

  tempo = golpes / tiempo;


};
const showTiempoClick = () => {
  inputTempo.style.display = "block";
  intputTiempo.style.display = "none";
  inputGolpes.style.display = "block";

  tempo = parseFloat(inputTempo.value);
  golpes = parseFloat(inputGolpes.value);

  tiempo = golpes * tempo;


};
const showGolpesClick = () => {
  inputTempo.style.display = "block";
  intputTiempo.style.display = "block";
  inputGolpes.style.display = "none";

  tempo = parseFloat(inputTempo.value);
  tiempo = parseFloat(intputTiempo.value);

  golpes = tiempo * tempo;


};  
  showTempo.innerHTML = tempo + " Bpm";
showTiempo.innerHTML = tiempo + " Min";
  showGolpes.innerHTML = golpes + " Beats";


showTempo.addEventListener("click", showTempoClick);
showTiempo.addEventListener("click", showTiempoClick);
showGolpes.addEventListener("click", showGolpesClick);
