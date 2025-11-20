document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bg-music");
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        
        // Cuando el usuario intenta reproducir el video
        video.addEventListener("play", () => {
            if (!bgMusic.paused) {
                bgMusic.pause();
            }
        });

        // Algunos navegadores disparan "playing" en vez de "play"
        video.addEventListener("playing", () => {
            if (!bgMusic.paused) {
                bgMusic.pause();
            }
        });

        // Si el usuario pausa el video → vuelve la música
        video.addEventListener("pause", () => {
            if (bgMusic.paused) {
                bgMusic.play().catch(() => {});
            }
        });

        // Cuando termina el video → vuelve la música
        video.addEventListener("ended", () => {
            if (bgMusic.paused) {
                bgMusic.play().catch(() => {});
            }
        });
    });
});
