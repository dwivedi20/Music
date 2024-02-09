let progress= document.getElementById("progress");
let song= document.getElementById("song");
let Ctrl= document.getElementById("Ctrl")


song.onloadedmetadata=function() {
    progress.max=song.duration;
    progress.value=song.currentTime;
    
}
function playPause(){
    if(Ctrl.classList.contains("fa-pause")){
        song.pause();
        Ctrl.classList.remove("fa-pause")
        Ctrl.classList.add("fa-play")
    }
    else{
        song.play();
        Ctrl.classList.add("fa-pause")
        Ctrl.classList.remove("fa-play")
        

    }

}
if(song.play()){
    setInterval(()=>{
        progress.value=song.currentTime
    },500)
}
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value
    Ctrl.classList.add("fa-pause")
    Ctrl.classList.remove("fa-play")
    
}
