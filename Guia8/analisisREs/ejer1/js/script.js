document.addEventListener("DOMContentLoaded", function () {
    const songTitle = document.getElementById("song-title");
    const songArtist = document.getElementById("song-artist");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const stopBtn = document.getElementById("stop-btn");

    let isPlaying = false;
    let animationPaused = false;

    playBtn.addEventListener("click", function () {
        isPlaying = true;
        songTitle.style.animationPlayState = "running";
        songArtist.style.animationPlayState = "running";
    });

    pauseBtn.addEventListener("click", function () {
        if (isPlaying) {
            animationPaused = !animationPaused;
            songTitle.style.animationPlayState = animationPaused ? "paused" : "running";
            songArtist.style.animationPlayState = animationPaused ? "paused" : "running";
        }
    });

    stopBtn.addEventListener("click", function () {
        isPlaying = false;
        animationPaused = false;
        songTitle.style.animation = "none";
        songArtist.style.animation = "none";
    });
});
