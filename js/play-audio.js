const entryScreen = document.getElementById("entry-screen");
const bgMusic = document.getElementById("bg-music");


function startMusic() {
    bgMusic.muted = false;

    bgMusic.play()
        .then(() => {
            console.log("🎵 Música reproducida correctamente");
        })
        .catch(err => {
            console.warn("⚠ El navegador bloqueó el autoplay, reintentando…", err);

            setTimeout(() => {
                bgMusic.play().catch(e => {
                    console.error("❌ No se pudo reproducir la música", e);
                });
            }, 300);
        });
}


entryScreen.addEventListener("click", () => {
    entryScreen.classList.add("fade-out");

    setTimeout(() => {
        entryScreen.style.display = "none";
        startMusic();
    }, 800);
});
