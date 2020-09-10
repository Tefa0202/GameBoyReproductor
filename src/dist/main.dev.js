"use strict";

var playBtn = document.querySelector(".contenedor .controls .playBtn");
var controls = {
  play: playBtn
};
var contenedor = new audioPlayer("./assets/songs/rock.mp3", document.querySelector(".contenedor"), controls);