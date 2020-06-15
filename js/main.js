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

setInterval(function() {
    console.log("check");

    if (isPlaying) {
        main_logo.style.height = "120px";
        main_desc_wrapper.style.opacity = 0;
        main_desc_wrapper.style.transform = "translateY(100%)";
        main_desc_wrapper.style.display = "none";
    }
}, 10000);