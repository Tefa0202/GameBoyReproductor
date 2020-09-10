class audioPlayer{
    constructor(src, domElement,controls) {
        this.src = src;
        this.audio = new Audio(this.src);
        this.controls = controls;
        this.domElement = domElement;
        this.progress = this.domElement.querySelector(".back2 .progress");
        this.initControls();
        this.initProgressActions();
        this.audio.ontimeupdate = () => { this.updateUI(); }
       
    }
  
    initControls() {
        if(this.controls.play){
            this.initPlay(this.controls.play);
        }
    }
    initPlay(domElement) {
        domElement.onclick = () => {
           const icon = domElement.querySelector("i");
           const isPaused = icon.classList.contains("fa-play");
           console.log(isPaused);
           if (!isPaused) {
            icon.classList.replace('fa-pause','fa-play');
            this.pause();
        } else {
            icon.classList.replace('fa-play','fa-pause');
            this.play();
        }
        }
    }
    initProgressActions() {
        const back2 = this.domElement.querySelector(".controls .controls1 .rihtBtn ");
        back2.onclick = (e) => {
            const x = e.offsetX;
            const totalX = this.audio.currentTime+10;
            const current = this.audio.duration;
            // const totalX = back2.clientWidth;
            const progress = x / totalX;
            this.setCurrentTime(progress);
        };
    }

    setCurrentTime(progress) {
        this.audio.currentTime = this.audio.duration * progress;
    }
    updateUI() {
        console.log("Updating UI");
        const total = this.audio.duration;
        const current = this.audio.currentTime;
        const progress = (current / total) * 100;
        this.progress.style.width = `${progress}%`;
    }
    play() {
        this.audio.play().then().catch(err => console.log(`Error al reproducir el archivo: ${err}`));
    }
    pause(){ 
        this.audio.pause();
    
    }

}