const nav = document.getElementsByTagName("nav")[0];

const nav_button_to_main = document.getElementById("nav_button_to_main");
const nav_button_to_intro = document.getElementById("nav_button_to_intro");
const nav_button_to_major = document.getElementById("nav_button_to_major");
const nav_button_to_campus = document.getElementById("nav_button_to_campus");

const main_offsetTop = document.getElementById("main").offsetTop;
const intro_offsetTop = document.getElementById("intro").offsetTop;
const major_offsetTop = document.getElementById("major").offsetTop;
const campus_offsetTop = document.getElementById("campus").offsetTop;

const promo_number_student = document.getElementById("promo_number_student");
const promo_number_professor = document.getElementById("promo_number_professor");

let promo_number_student_intervalId;
let promo_number_student_isInvisiable = true;

let promo_number_professor_intervalId;
let promo_number_professor_isInvisiable = true;

window.onscroll = function() {
    /* 스크롤이 맨 위에 있을 때는 그라데이션 배경색 아닐 때는 단일 배경색 */
    if (window.scrollY > nav.offsetHeight) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

    removeNavClassAll();

    /* 네비게이션 하이라이트 처리 */
    if (window.scrollY <= main_offsetTop) {
        nav_button_to_main.classList.add("active");
    } else if (window.scrollY <= intro_offsetTop) {
        nav_button_to_intro.classList.add("active");
    } else if (window.scrollY <= major_offsetTop) {
        nav_button_to_major.classList.add("active");
    } else {
        nav_button_to_campus.classList.add("active");
    }

    /* 홍보숫자 증가 애니메이션 처리 */
    animatePromoNumber(promo_number_student, 
        promo_number_student_intervalId, 
        promo_number_student_isInvisiable,
        6018);

    animatePromoNumber(promo_number_professor, 
        promo_number_professor_intervalId, 
        promo_number_professor_isInvisiable,
        164);

    
}

/* interval 함수가 제대로 꺼지지 않는 것 같다 */
function animatePromoNumber(element, intervalId, isInvisiable, endNumber) {
    const rect = element.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0){
        if(isInvisiable) {
            setTimeout(function() {
                intervalId = setInterval(function() {
                    element.textContent = parseInt(lerp(parseInt(element.textContent), endNumber, 0.06));
    
                    if (parseInt(element.textContent) > endNumber * 0.9) {
                        element.textContent = endNumber;
                        clearInterval(intervalId);
                    }
                },120);
            },1000);

            isInvisiable = false;
        }
    } else {
        isInvisiable = true;
        element.textContent = 0;
    }


}

function lerp (start, end, step) {
    return (end -  start) * step + start;
}