document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bg-music");
    const videos = document.querySelectorAll("video");

    videos.forEach(video => {
        
      
        video.addEventListener("play", () => {
            if (!bgMusic.paused) {
                bgMusic.pause();
            }
        });

        
        video.addEventListener("playing", () => {
            if (!bgMusic.paused) {
                bgMusic.pause();
            }
        });

        
        video.addEventListener("pause", () => {
            if (bgMusic.paused) {
                bgMusic.play().catch(() => {});
            }
        });

        
        video.addEventListener("ended", () => {
            if (bgMusic.paused) {
                bgMusic.play().catch(() => {});
            }
        });
    });
});
