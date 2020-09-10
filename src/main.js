const playBtn = document.querySelector(".contenedor .controls .playBtn");
const controls ={
    play: playBtn
}
const contenedor = new audioPlayer("./assets/songs/rock.mp3", document.querySelector(".contenedor") ,controls);

