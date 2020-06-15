let isPlaying = false;

const main_video = document.getElementById("main_video");
const main_bg = document.getElementById("main_bg");

const main_logo = document.getElementById("main_logo");
const main_desc_wrapper = document.getElementById("main_desc_wrapper");

setInterval(function() {
    if (window.scrollY < nav.offsetHeight) {
        main_video.play();
        main_bg.style.opacity = 0;
        isPlaying = true; 
    } else {
        main_video.pause();
        main_bg.style.opacity = 100;
        isPlaying = false;
    }
}, 5000);

// setInterval(function() {
//     if (isPlaying) {
//         main_logo.style.transform = "scale(0.6,0.6)";
//     }
// }, 10000);