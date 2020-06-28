const nav_link_list = Array.from(document.getElementById("nav_links").children);

/* 네비게이션 버튼 클릭 이벤트 등록 (누르면 하이라이트 들어감) */
nav_link_list.forEach(nav_link => {
    nav_link.onclick = function(event){
        removeNavClassAll();

        nav_link.classList.add("active");
    }
});

/* 모든 네비게이션 버튼의 클래스를 지움 */
function removeNavClassAll() {
    nav_link_list.forEach(nav_link => {
        nav_link.classList.remove("active");
        nav_link.classList.remove("hover");
    });
}