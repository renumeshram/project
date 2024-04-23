
// const {parse} = require('node-html-parser'); 
// import fetch from "node-fetch";
console.log('Javascript!');

async function getSongs(){
let a= await fetch("http://127.0.0.1:5500/songs/")
let response = await a.text()
console.log(response)
let div= document.createElement("div")
div.innerHTML= response;
let as= div.getElementsByTagName ("a")
let songs=[]
for (let index = 0; index < as.length; index++) {
    // if(index==0){
    //     continue;
    // }
    const element = as[index];
    if(element.href.endsWith(".mp3")){
        songs.push(element.href.split("/songs/")[1])
    }
    
}
return songs

}
//get list of songs

async function main(){
let songs=await getSongs()
console.log(songs);
 let songUL= document.querySelector(".songList").getElementsByTagName("ul")[0]
for (const song of songs) {
    songUL.innerHTML=songUL.innerHTML + `<li> ${song.replaceAll("%20","")}</li>`;
 }

//play first song

var audio = new Audio(songs[0]);
audio.play();

audioElement.addEventListener("loadeddata", () => {
//   let duration = audio.duration;
  console.log(audio.duration, audio.currentSrc, audio.currentTime);
  // The duration variable now holds the duration (in seconds) of the audio clip
});

} 

main() 