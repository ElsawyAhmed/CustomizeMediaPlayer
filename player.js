document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);
function initialiseMediaPlayer() {
   mediaPlayer = document.getElementById('media-video');
  // mediaPlayer.controls = false;
}
function togglePlayPause() {
   var btn = document.getElementById('play-pause-button');
   if (mediaPlayer.paused ||mediaPlayer.ended ) {
      btn.title = 'pause';
      btn.innerHTML = 'Pause';
      btn.className = 'pause';
      mediaPlayer.play();
   }
   else {
      btn.title = 'play';
      btn.innerHTML = 'Play';
      btn.className = 'play';
      mediaPlayer.pause();
   }
}

function stop() {
   mediaPlayer.pause();
   mediaPlayer.currentTime = 0;
}


function pause(){
   mediaPlayer.pause();
}
function backward(){
    mediaPlayer.currentTime-=2;
 
}
function forward(){
   mediaPlayer.currentTime+=2;
   
}

document.addEventListener("keyup",function(e){
            if(e.key==" "){
                togglePlayPause();
            }
            else if(e.key=="ArrowRight"){
                forward();
            }
            else if(e.key=="ArrowLeft"){
                backward();
            }
        });
function showControls(){
    let divdisplay = document.getElementById("media-controls").style.display;
    let videodisplay = document.getElementById("controls").style.display ;

    if(videodisplay == "none" ){
            document.getElementById("controls").style.display = "";   
        
     }
}

function hideControls(){
        if(document.getElementById("controls").style.display == ""){
             document.getElementById("controls").style.display = "none"
  }
}