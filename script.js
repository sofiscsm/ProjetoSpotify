const songName = document.getElementById("song-name");
const song = document.getElementById("audio");
const play = document.getElementById("play");

songName.innerText = 'Tem mais Samba';
song.play();
song.pause();

function playSong(){
    song.play();
}

play.addEventListener("click", playSong);