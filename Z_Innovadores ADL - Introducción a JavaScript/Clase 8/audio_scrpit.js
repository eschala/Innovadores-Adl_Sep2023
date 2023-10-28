const Audio_1 = "List MUSIC/Im blue CHIRIMIA BEAT.mp3";
const Audio_2 = "List MUSIC/Bayanni - Ta Ta Ta (Official Lyric Audio).mp3";
const Audio_3 = "List MUSIC/Mr Eazi - Exit (feat. Soweto Gospel Choir) [Official Audio].mp3";
const Audio_4 = "List MUSIC/ChocQuibTown - De Donde Vengo Yo (Official Music Video).mp3";
const Audio_5 = "List MUSIC/Alexis Play - Polka (Video Oficial).mp3";
const Audio_6 = "List MUSIC/Ruger - Asiwaju (Official Video).mp3";
const Audio_7 = "List MUSIC/Burna Boy - Gbona [Official Music Video].mp3";

const listAudios = [
  Audio_1,
  Audio_2,
  Audio_3,
  Audio_4,
  Audio_5,
  Audio_6,
  Audio_7,
];
const audio = document.createElement("audio");


img_BG1="Img/IMG_1871-Editar.jpg";
img_BG2="https://i0.wp.com/zedpushup.com/wp-content/uploads/2022/12/Fa4eGiYWIAEcYpL.jpeg?fit=1080%2C1080&ssl=1";
img_BG3="https://www.bellanaija.com/wp-content/uploads/2023/10/0s3a4727-scaled.jpg";
img_BG4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR153cgZLH6k40AvDrsrst8QJzjVMuaCOQ8mWMv3pB8frbeYYlk-RQ9INuHiKM3tZ5tn08&usqp=CAU";
img_BG5="https://caracoltv.brightspotcdn.com/dims4/default/65a9d82/2147483647/strip/false/crop/1500x964+0+0/resize/1200x771!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Fe5%2Fc8%2Fb396cf72430aa44b1cbc0b9ff69c%2Falexis-play.jpg";
img_BG6="https://i.ytimg.com/vi/MqqBH9Fa4NQ/maxresdefault.jpg";
img_BG7="https://pan-african-music.com/wp-content/uploads/2018/10/Burna-Boy-Gbona.jpg";
const listImgBackground =[img_BG1,img_BG2,img_BG3,img_BG4,img_BG5,img_BG6,img_BG7];


song_1="I'm blue CHIRIMIA BEAT - Samchaplus";
song_2="Bayanni - Ta Ta Ta (Official Lyric Audio)";
song_3="Mr Eazi - Exit (feat. Soweto Gospel Choir) [Official Audio]";
song_4="ChocQuibTown - De Donde Vengo Yo (Official Music Video)";
song_5="Alexis Play - Polka (Video Oficial)";
song_6="Ruger - Asiwaju (Official Video)";
song_7="Burna Boy - Gbona [Official Music Video]";



const listNameSONGS =[song_1,song_2,song_3,song_4,song_5,song_6,song_7];


audio.controls = false;
audio.src = Audio_1;


/* audio.src=listAudios[Audio_1]; */

const containerMainELEMENT = document.querySelector(".container_Main"); 
const PanelAUDIO = document.querySelector(".panel_Audio"); 
PanelAUDIO.appendChild(audio);

const PLAY = document.querySelector(".play");
const PAUSE = document.querySelector(".pause");
const NEXT = document.querySelector(".next");
const DURATION = document.querySelector(".duration");

const showNameSONG = document.querySelector(".showNameSONG_Class");
const showTittleNameSONG = document.querySelector(".songName");
const showNameMESSAGE = document.querySelector(".showNameMESSAGE__Class");
const showNameMESSAGE_2 = document.querySelector(".showNameMESSAGE__Class2");
const showListSONGS = document.querySelector(".showNameMESSAGE__Class3");
const showTextReproduciendo = document.querySelector(".showTextPlaying");

const indexPostShow = document.querySelector(".indexPost");

const contenerdorIMG = document.querySelector(".imgBackgroundSONG_DIV");
const imgBackgroundSONG_ELEMENT = document.querySelector(".imgBackgroundSONG_Class");



const songName__1 = document.querySelector(".songNameList-1");
const songName__2 = document.querySelector(".songNameList-2");
const songName__3 = document.querySelector(".songNameList-3");
const songName__4 = document.querySelector(".songNameList-4");
const songName__5 = document.querySelector(".songNameList-5");
const songName__6 = document.querySelector(".songNameList-6");
const songName__7 = document.querySelector(".songNameList-7");

songName__1.innerHTML ="1. "+song_1;
songName__2.innerHTML ="2. "+song_2;
songName__3.innerHTML ="3. "+song_3;
songName__4.innerHTML ="4. "+song_4;
songName__5.innerHTML ="5. "+song_5;
songName__6.innerHTML ="6. "+song_6;
songName__7.innerHTML ="7. "+song_7;



PAUSE.style.display="none";


const pauseAudio = () => {
  audio.pause();
  PAUSE.style.display="none";
  PLAY.style.display="block";
};

num = 0;
var postNum;



const nextAudio = () => {  

if(num==7)

{
  num=0;

  audio.src = listAudios[num];

}
  else{

    audio.src = listAudios[num];
        if(audio.src == listAudios[0]||num==0){
          
          num=1;
      audio.src = listAudios[num];

          

        }else{


          
          

        }

  }

          

      showTittleNameSONG.innerHTML=listNameSONGS[num];

      showNameMESSAGE_2.innerHTML="Cancion numero "+[num+1];
      imgBackgroundSONG_ELEMENT.src=listImgBackground[num]
      

      num++;
      audio.play();
  

};




const playAudio = () => {
  audio.controls = true;
  PAUSE.style.display="block";
  PLAY.style.display="none";
  if(num==0){
    postNum=num+1;
    showTittleNameSONG.innerHTML=listNameSONGS[num];
    imgBackgroundSONG_ELEMENT.src=listImgBackground[num]



  }
  audio.play();
/*   DURATION.innerHTML="dura "+audio.duration +" segundos"; */

};




PLAY.addEventListener("click", playAudio);
PAUSE.addEventListener("click", pauseAudio);
NEXT.addEventListener("click", nextAudio);

