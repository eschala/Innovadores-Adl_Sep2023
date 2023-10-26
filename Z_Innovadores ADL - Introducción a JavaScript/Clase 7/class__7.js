const text_User = document.querySelector(".text");
const info_User = document.querySelector(".info");



const onKeyEnter=(event)=>{

let keyPress =event.key;


if(keyPress==="Enter"){

    alert("xD ha presionado enter");
}


}

const key_Pressed = (event)=>{
    onKeyEnter(event);

    let key = event.key;
    info_User.innerHTML="la tecla presionada es : "+key;
}