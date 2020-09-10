"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var audioPlayer =
/*#__PURE__*/
function () {
  function audioPlayer(src, domElement, controls) {
    var _this = this;

    _classCallCheck(this, audioPlayer);

    this.src = src;
    this.audio = new Audio(this.src);
    this.controls = controls;
    this.domElement = domElement;
    this.progress = this.domElement.querySelector(".back2 .progress");
    this.initControls();
    this.initProgressActions();

    this.audio.ontimeupdate = function () {
      _this.updateUI();
    };
  }

  _createClass(audioPlayer, [{
    key: "initControls",
    value: function initControls() {
      if (this.controls.play) {
        this.initPlay(this.controls.play);
      }
    }
  }, {
    key: "initPlay",
    value: function initPlay(domElement) {
      var _this2 = this;

      domElement.onclick = function () {
        var icon = domElement.querySelector("i");
        var isPaused = icon.classList.contains("fa-play");
        console.log(isPaused);

        if (!isPaused) {
          icon.classList.replace('fa-pause', 'fa-play');

          _this2.pause();
        } else {
          icon.classList.replace('fa-play', 'fa-pause');

          _this2.play();
        }
      };
    }
  }, {
    key: "initProgressActions",
    value: function initProgressActions() {
      var _this3 = this;

      var back2 = this.domElement.querySelector(".controls .controls1 .rihtBtn ");

      back2.onclick = function (e) {
        var x = e.offsetX;
        var totalX = _this3.audio.currentTime + 10;
        var current = _this3.audio.duration; // const totalX = back2.clientWidth;

        var progress = x / totalX;

        _this3.setCurrentTime(progress);
      };
    }
  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(progress) {
      this.audio.currentTime = this.audio.duration * progress;
    }
  }, {
    key: "updateUI",
    value: function updateUI() {
      console.log("Updating UI");
      var total = this.audio.duration;
      var current = this.audio.currentTime;
      var progress = current / total * 100;
      this.progress.style.width = "".concat(progress, "%");
    }
  }, {
    key: "play",
    value: function play() {
      this.audio.play().then()["catch"](function (err) {
        return console.log("Error al reproducir el archivo: ".concat(err));
      });
    }
  }, {
    key: "pause",
    value: function pause() {
      this.audio.pause();
    }
  }]);

  return audioPlayer;
}();