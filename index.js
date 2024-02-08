const progress= document.getElementById("progress");
 const music=document.getElementById("song");
 const play=document.getElementById("play");
 const cnt=document.getElementById("cnt");
 const total=document.getElementById("total-time");
 const current=document.getElementById("current-time");


//PLAYING MUSIC UPON CHANGING INPUT VALUE

 progress.addEventListener("input",function(){
   music.play();
    music.currentTime=progress.value;
    cnt.classList.remove("fa-play");
    cnt.classList.add("fa-pause");
 })


 //SONG TOTAL TIMING UPON LOADING

 music.onloadedmetadata=function(){
   let sec=Math.floor((music.duration)%60);
   let min=Math.floor((music.duration)/60);
   sec=String(sec);
   min=String(min);
   if(sec.length==1){
      sec="0"+sec;
   }
   else if(sec.length==1 && min.length==1){sec="0"+sec;
   min="0"+min;
}
   total.innerHTML=`${min}:${sec}`;
   music.pause();
   progress.max=music.duration;
   progress.value=music.currentTime;
 }


//PLAY PAUSE BUTTON

 function playpause(){
    if(cnt.classList.contains("fa-pause")){
        music.pause();
        cnt.classList.remove("fa-pause");
        cnt.classList.add("fa-play");
    }
    else{
            music.play();
            cnt.classList.remove("fa-play");
            cnt.classList.add("fa-pause");
    }
 }


//CHANGING INPUT RANGE VALUES ACCORDING TO THE SONG

 if(music.play()){
    setInterval(()=>{progress.value=music.currentTime;
      500});
 }




 const volume=document.querySelector("#firstdiv");
 const volumeicon=document.querySelector("#volume");
 const changevolume=document.querySelector("#change-volume");
 const divofvolume=document.querySelector(".div-of-change-volume");
 volume.addEventListener("click",()=>{
   if(divofvolume.style.display=="none"){
      divofvolume.style.display="block"
   }
   else{
      divofvolume.style.display="none"
   }
 });


 //VOLUME INPUT

   changevolume.addEventListener('input', function() {

   if(changevolume.value==0){
      volumeicon.classList.add("fa-volume-xmark");
      volumeicon.classList.remove("fa-volume-high");
   }
   else if(changevolume.value<=40){
      volumeicon.classList.add("fa-volume-low");
      volumeicon.classList.remove("fa-volume-xmark");
      volumeicon.classList.remove("fa-volume-high");

   }
   else{
      volumeicon.classList.add("fa-volume-high");
      volumeicon.classList.remove("fa-volume-xmark");

   }
 });



//ADDING 0 IF TIME IS SINGLE DIGIT.

 setInterval(()=>{
   let sec=Math.floor((music.currentTime)%60);
   let min=Math.floor((music.currentTime)/60);
   sec=String(sec);

   if(sec.length==1){
      sec="0"+sec;
      current.innerHTML=`${min}:${sec}`;
   }
   else if(min.length==1){
      min="0"+min;
      current.innerText=`${min}:${sec}`;
   }
   else if(min.length==1&&sec.length==1){
      sec="0"+sec;
      min="0"+min;
      current.innerText=`${min}:${sec}`;
   }
   else{
   current.innerHTML=`${min}:${sec}`;}
 },1000)


//REPEAT BUTTON
 const repeat=document.querySelector(".repeat");
 repeat.addEventListener("click",()=>{
   repeat.classList.toggle("active");
 })





//DATABASE

 songs=[{artist:"Post Malone",songname:"White Iverson",image:"./Data/pic1.jpg",aboutimage:"./Data/artist1.jpg",aboutartist:"Post Malone, aka Austin Richard Post, is a genre-blending American artist celebrated for hits like \"White Iverson\" and \"Rockstar.\" His music combines hip-hop, rock, and pop, delving into themes of love, nightlife, and introspection, captivating a broad fan base.",aboutname:"Post Malone",background:"./Data/artist1.jpg",song:"./Data/song1.mp3", heart:"no"},{artist:"The Weeknd",songname:"Blinding Lights",image:"./Data/pic2.png",aboutimage:"./Data/artist2,5.jpg",aboutartist:"The Weeknd: Canadian singer known for seductive vocals and hits like \"Blinding Lights.\" Emotive lyrics explore love, lust, and heartbreak. Rising to fame with genre-blending music, Abel Tesfaye captivates global audiences with his unique sound and electrifying performances.",aboutname:"The Weeknd",background:"./Data/artist2,5.jpg",song:"./Data/song2.mp3", heart:"no"},{artist:"Travis Scott",songname:"Goosebumps",image:"./Data/pic3.jpg",aboutimage:"./Data/artist3.jpg",aboutartist:"Houston-born rapper Travis Scott rose to fame with albums like \"Rodeo\" and \"Astroworld,\" blending hip-hop, trap, and psychedelic rock. Hits like \"Sicko Mode\" showcase his dynamic style. He collaborates with brands like Nike and engages in philanthropy, cementing his status as a cultural icon.",aboutname:"Travis Scott",background:"./Data/artist3.jpg",song:"./Data/song3.mp3", heart:"no"},{artist:"Dababy",songname:"Rockstar",image:"./Data/pic4.jpg",aboutimage:"./Data/artist4.jpg",aboutartist:"DaBaby, born Jonathan Lyndale Kirk, is an American rapper known for hits like \"Suge.\" His dynamic flow and charismatic presence have propelled him to stardom, captivating audiences with his energetic performances and clever wordplay.",aboutname:"Dababy",background:"./Data/artist4.jpg",song:"./Data/song4.mp3", heart:"no"},
 {artist:"The Weeknd",songname:"Reminder",image:"./Data/pic5.jpg",aboutimage:"./Data/artist2,5.jpg",aboutartist:"The Weeknd: Canadian singer known for seductive vocals and hits like \"Blinding Lights.\" Emotive lyrics explore love, lust, and heartbreak. Rising to fame with genre-blending music, Abel Tesfaye captivates global audiences with his unique sound and electrifying performances.",aboutname:"The Weeknd",background:"./Data/artist2,5.jpg",song:"./Data/song5.mp3", heart:"no"}
];


let songindex=0;

//HEART BUTTON
 const heart=document.querySelector(".heart");
 heart.addEventListener("click",()=>{
   if(
   songs[songindex].heart=="no"){
      songs[songindex].heart="yes";
      heart.classList.add("active");
   }
   else{
      songs[songindex].heart="no";
      heart.classList.remove("active");
   }
   console.log(songs[songindex].heart)
 });




const artist=document.querySelector("#artist");
const songname=document.querySelector("#songname");
const background=document.querySelector(".tryingnew");
const image=document.querySelector("#image");
const previous=document.querySelector("#previous");
const next=document.querySelector("#next");
const aboutimage=document.querySelector(".aboutpanel img");
const aboutartist=document.querySelector(".aboutpanel p");
const aboutname=document.querySelector(".aboutpanel h2");



//LOADING SONG INDEX

function songloaded(songindex){
   artist.innerHTML=songs[songindex].artist;
   songname.innerHTML=songs[songindex].songname;
   image.src=songs[songindex].image;

   background.style.background=`url(${songs[songindex].background})`;
   background.style.backgroundSize="cover";

   music.src=songs[songindex].song;
   aboutimage.src=songs[songindex].aboutimage;
   aboutartist.innerHTML=songs[songindex].aboutartist;
   aboutname.innerHTML=songs[songindex].aboutname;

   if(songs[songindex].heart=="no"){
      heart.classList.remove("active");
   }
   else{
      heart.classList.add("active");
   }



};

songloaded(songindex);


//NEXT BUTTON

next.addEventListener("click",()=>{
   if(songindex==4){
      songindex=0;
   }
   else{
      songindex+=1;
   }
   songloaded(songindex);
});


//PREVIOUS BUTTON

previous.addEventListener("click",()=>{
   if(songindex==0){
      songindex=4;
   }
   else{
      songindex-=1;
   }
   songloaded(songindex);
});



const about=document.querySelector("#about");
const aboutpanel=document.querySelector(".aboutpanel");
const back=document.querySelector("#back");
const nav=document.querySelector(".nav");
const divplaylist=document.querySelector(".playlist");
const playlistpanel=document.querySelector(".playlistpanel");
const backplaylist=document.querySelector("#backplaylist");


//OPENING AND CLOSING ABOUTPANEL

about.addEventListener("click",async()=>{
   aboutpanel.classList.toggle("active");
   divplaylist.style.display="none";
   back.classList.toggle("active");
})

back.addEventListener("click",()=>{
   aboutpanel.classList.toggle("active");
   back.classList.toggle("active");
   divplaylist.style.display="block";
})

//OPENING AND CLOSING SONGPLAYLIST

divplaylist.addEventListener("click",()=>{
   playlistpanel.classList.toggle("active");
   divplaylist.style.display="none";
   about.style.display="none";
   backplaylist.style.display="block";
   nav.style.justifyContent="flex-end";

});

backplaylist.addEventListener("click",()=>{
   playlistpanel.classList.toggle("active");
   divplaylist.style.display="block";
   about.style.display="block";
   backplaylist.style.display="none";
   nav.style.justifyContent="space-between";
})

 









