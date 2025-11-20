document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");
  audio.volume = 0.8; // volumen inicial

  // Intento de reproducción automática
  const attempt = audio.play();

  // Si el navegador bloquea el autoplay
  if (attempt !== undefined) {
    attempt.catch(() => {
      
      // Primera interacción del usuario => activar música
      const unlock = () => {
        audio.play();
        document.removeEventListener("click", unlock);
        document.removeEventListener("scroll", unlock);
        document.removeEventListener("touchstart", unlock);
      };

      document.addEventListener("click", unlock);
      document.addEventListener("scroll", unlock);
      document.addEventListener("touchstart", unlock);
    });
  }
});

// Pantalla de ingreso con inicio automático de música
const entryScreen = document.getElementById("entry-screen");
const bgMusic = document.getElementById("bg-music");

entryScreen.addEventListener("click", () => {
  entryScreen.classList.add("hide");

  setTimeout(() => {
    entryScreen.style.display = "none";
    bgMusic.play().catch(e => console.log("Autoplay bloqueado:", e));
  }, 600);
});