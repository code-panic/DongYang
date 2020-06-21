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
    // nav 배경처리 
    if (window.scrollY > nav.offsetHeight) {
        nav.classList.add("nav_scrolled");
    } else {
        nav.classList.remove("nav_scrolled");
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