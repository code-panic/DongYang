let isComputer = (window.innerWidth > 1408)? true : false;
let isPlaying = false;

const main_video = document.getElementById("main_video");
const main_bg = document.getElementById("main_bg");

const main_logo = document.getElementById("main_logo");
const main_desc_wrapper = document.getElementById("main_desc_wrapper");

let play_interval_id;
let desc_interval_id;

/* 볼륨 0으로 설정, 이렇지 않으면 정책에 위반되서 에러 터진다 */
main_video.muted = true;

/* 3초마다 스크롤 위치를 계산해서 동영상을 플레이 할지를 정한다 */
play_interval_id = setInterval(function() {
    if (window.scrollY < nav.offsetHeight) {
        isPlaying = true;
        
        main_video.play();
        main_bg.classList.add("invisiable");
    } else {
        isPlaying = false;

        main_video.pause();
        main_bg.classList.remove("invisiable");
    }

    console.log(isComputer);
}, 3000);

/* 5초마다 동영상 재생 상황을 파악해 자세한 설명을 보일지 결정한다 */
desc_interval_id = setInterval(function() {
    if (isPlaying) {
        if (isComputer) {
            main_logo.classList.add("smaller")
        }

        main_desc_wrapper.classList.add("invisiable");

    } else if (!isPlaying) {
        if (isComputer) {
            main_logo.classList.remove("smaller")
        }

        main_desc_wrapper.classList.remove("invisiable");
    }
}, 5000);

/* 비디오가 끝나면 비디오와 관련한 setInterval 함수를 모두 종료하고 첫 화면으로 돌아간다 */
main_video.onended = function() {
    clearInterval(play_interval_id);
    clearInterval(desc_interval_id);

    main_bg.classList.remove("invisiable");

    if (isComputer) {
        main_logo.classList.remove("smaller");
    } 

    main_desc_wrapper.classList.remove("invisiable");
}