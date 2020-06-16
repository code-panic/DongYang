const intro_name_wrapper = document.getElementById("intro_name_wrapper");
const intro_desc_wrapper = document.getElementById("intro_desc_wrapper");

window.onscroll = function() {
    // nav 배경처리 
    if (window.scrollY > nav.offsetHeight) {
        nav.classList.add("nav_scrolled");
    } else {
        nav.classList.remove("nav_scrolled");
    }

    // intro 애니메이션 처리
    scrollElement(intro_name_wrapper);
    scrollElement(intro_desc_wrapper);
}

function scrollElement(element) {
    const rect = element.getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0)
        element.classList.add("showed");
    else 
        element.classList.remove("showed");
}