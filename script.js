document.addEventListener("DOMContentLoaded", () => {
    // Mostrar elementos con animación
    const fadeInElements = document.querySelectorAll(".fade-in");
    fadeInElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("show");
      }, index * 500); // Retraso de 500 ms entre elementos
    });
  
    // Control de audio
    const audio = document.getElementById("audio");
    const playPauseButton = document.getElementById("playPause");
    const stopButton = document.getElementById("stopAudio");
  
    playPauseButton.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
  
    stopButton.addEventListener("click", () => {
      audio.pause();
      audio.currentTime = 0;
    });
  });
  
