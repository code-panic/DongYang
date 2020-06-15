let isPlaying = false;

const main_video = document.getElementById("main_video");
const main_bg = document.getElementById("main_bg");

const main_logo = document.getElementById("main_logo");
const main_desc_wrapper = document.getElementById("main_desc_wrapper");

let play_interval_id;
let desc_interval_id;
let volume_interval_id;

main_video.volume = 0;

play_interval_id = setInterval(function() {
    if (window.scrollY < nav.offsetHeight) {
        main_video.play();
        main_bg.style.opacity = 0;
        isPlaying = true;

        // volume_interval_id = setInterval(function() {
        //     // main_video.volume = Int(lerp(main_video, 1, 0.2));

        //     if (main_video.volume >= 0.8) {
        //         main_video.volume = 1; 
        //         clearInterval(volume_interval_id);
        //     }

        //     main_video.volume += 0.1;
        //     console.log(main_video.volume);

        // }, 100);

        // main_video.muted = false;
        // main_video.volume = 1;
    } else {
        main_video.pause();
        main_bg.style.opacity = 100;
        isPlaying = false;

        main_video.volume = 0;
    }
}, 5000);

desc_interval_id = setInterval(function() {
    // console.log("check");

    if (isPlaying) {
        main_logo.style.height = "120px";
        main_desc_wrapper.style.opacity = 0;
        main_desc_wrapper.style.transform = "translateY(100%)";
        main_desc_wrapper.style.display = "none";
    } else if (!isPlaying) {
        main_logo.style.height = "144px";
        main_desc_wrapper.style.opacity = 100;
        main_desc_wrapper.style.transform = "translateY(0)";
        main_desc_wrapper.style.display = "block";
    }
}, 10000);

main_video.onended = function() {
    clearInterval(play_interval_id);
    clearInterval(desc_interval_id);

    main_bg.style.opacity = 100;

    main_logo.style.height = "144px";
    main_desc_wrapper.style.opacity = 100;
    main_desc_wrapper.style.transform = "translateY(0)";
    main_desc_wrapper.style.display = "block";
}

// function lerp (start, end, step) {
//     return (end - start) * step + start;
// }