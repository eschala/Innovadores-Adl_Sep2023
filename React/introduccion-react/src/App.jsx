import './App.css'

const perfiles = [
{
  nombre: "8a",
  imagen: "https://i.postimg.cc/1X7bCGjB/Whats-App-Image-2023-12-07-at-16-52-51.jpg",
  edad: 20,
  color: "lightgray"
},
{
  nombre: "Samir",
  imagen:"src/assets/img/Samir.jpeg",
  edad: 24,
  color: "lightblue"
}
,
{
  nombre: "Carolina",
  imagen:"src/assets/img/Carolina.jpeg",
  edad: 20,
  color: "lightpink"
}
,
{
  nombre: "Juan Arriaga",
  imagen:"src/assets/img/Juan.jpeg",
  edad: 20,
  color: "#1466c3"
}
,
{
  nombre: "Yeni Katerine",
  imagen:"src/assets/img/Yeni.jpeg",
  edad: 28,
  color: "purple"
}
,
{
  nombre: "Melany",
  imagen:"src/assets/img/Melany.jpeg",
  edad: 19,
  color: "purple"
}
,
{
  nombre: "Jheraldyn",
  imagen:"src/assets/img/Jheraldyn.jpeg",
  edad: 17,
  color: "lightpink"
}
,
{
  nombre: "Yeisson",
  imagen:"src/assets/img/Yeisson.jpeg",
  edad: 22,
  color: "#F0394D"
}
,
{
  nombre: "Erick",
  imagen:"src/assets/img/Erick.jpeg",
  edad: 18,
  color: "#F0394D"
},
{
  nombre: "Anny",
  imagen:"src/assets/img/Anny.jpeg",
  edad: 24,
  color: "#9999ff"
},






]

function App() {
  
  const listaPerfiles= perfiles.map((usuarios)=>
  <div className='contenedor-perfiles' style={{backgroundColor:usuarios.color}}>
  <h2> Nombre: {usuarios.nombre} </h2> 
  <img src={usuarios.imagen} alt="" />
  <h2> Edad: {usuarios.edad} </h2>
  </div>

);
  
  return (
    <>
    <h1>Estudiantes Innovadores ADL </h1>
    <div className='contenedor-principal'>
    {listaPerfiles}
    </div>
 
    </>
  )
}

export default App
