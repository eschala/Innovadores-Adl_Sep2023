const text_User = document.querySelector(".text");
const info_User = document.querySelector(".info");


const key_Pressed = (event)=>{

    let key = event.key;
    info_User.innerHTML="la tecla presionada es : "+key;
}