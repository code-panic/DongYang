const nav = document.getElementsByTagName("nav")[0];

const nav_button_to_main = document.getElementById("nav_button_to_main");
const nav_button_to_intro = document.getElementById("nav_button_to_intro");
const nav_button_to_major = document.getElementById("nav_button_to_major");
const nav_button_to_campus = document.getElementById("nav_button_to_campus");

const main_offsetTop = document.getElementById("main").offsetTop;
const intro_offsetTop = document.getElementById("intro").offsetTop;
const major_offsetTop = document.getElementById("major").offsetTop;
const campus_offsetTop = document.getElementById("campus").offsetTop;

const titles = document.getElementsByClassName("title");

const intro_name_wrapper = document.getElementById("intro_name_wrapper");
const intro_desc_wrapper = document.getElementById("intro_desc_wrapper");

const promo = document.getElementById("promo");

const promo_student_number = document.getElementById("promo_student_number");
const promo_professor_number = document.getElementById("promo_professor_number");

let promo_student_number_id;
let promo_student_number_isShowed = false;

let promo_professor_number_id;
let promo_professor_number_isShowed = false;

window.onscroll = function() {
    /* 스크롤이 맨 위에 있을 때는 그라데이션 배경색 아닐 때는 단일 배경색 */
    if (window.scrollY > nav.offsetHeight) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

    removeNavActiveAll();

    /* 네비게이션 하이라이트 변화 처리 */
    if (window.scrollY <= main_offsetTop) {
        nav_button_to_main.classList.add("active");
    } else if (window.scrollY <= intro_offsetTop) {
        nav_button_to_intro.classList.add("active");
    } else if (window.scrollY <= major_offsetTop) {
        nav_button_to_major.classList.add("active");
    } else {
        nav_button_to_campus.classList.add("active");
    }

    // 타이틀 애니메이션 처리
    Array.from(titles).forEach(title => {
        scrollElement(title);
    });

    // intro 애니메이션 처리
    scrollElement(intro_name_wrapper);
    scrollElement(intro_desc_wrapper);

    scrollElement(promo);

    // 숫자 증가 애니메이션 처리 
    const promo_student_number_rect = promo_student_number.getBoundingClientRect();

    if (promo_student_number_rect.top <= window.innerHeight && promo_student_number_rect.bottom >= 0){
        if(!promo_student_number_isShowed) {
            promo_student_number_id = setInterval(function() {
                promo_student_number.textContent = parseInt(lerp(parseInt(promo_student_number.textContent), 6018, 0.2));

                if (parseInt(promo_student_number.textContent) > 5900) {
                    promo_student_number.textContent = 6018;
                    clearInterval(promo_student_number_id);
                }

            },50)

            promo_student_number_isShowed = true;
        }
    } else {
        promo_student_number_isShowed = false;
        promo_student_number.textContent = 0;
    }

    const promo_professor_number_rect = promo_professor_number.getBoundingClientRect();

    if (promo_professor_number_rect.top <= window.innerHeight && promo_professor_number_rect.bottom >= 0){
        if(!promo_professor_number_isShowed) {
            promo_professor_number_id = setInterval(function() {
                promo_professor_number.textContent = parseInt(lerp(parseInt(promo_professor_number.textContent), 164, 0.2));

                if (parseInt(promo_professor_number.textContent) > 155) {
                    promo_professor_number.textContent = 164;
                    clearInterval(promo_professor_number_id);
                }

            },50)

            promo_professor_number_isShowed = true;
        }
    } else {
        promo_professor_number_isShowed = false;
        promo_professor_number.textContent = 0;
    }


}

function scrollElement(element) {
    const rect = element.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0)
        element.classList.add("showed");
    else 
        element.classList.remove("showed");
}

function lerp (start, end, step) {
    return (end -  start) * step + start;
}