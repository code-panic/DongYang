const jsonURL = "./json/major.json";
const request = new XMLHttpRequest();

const major_kind_list = document.getElementById("major_kind_wrapper").children;

//Json 객체 받아오기
request.open('GET', jsonURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const majorObj = request.response;
    console.log(majorObj);
}

//클릭 이벤트 구현
Array.from(major_kind_list).forEach(major_kind => {
    major_kind.addEventListener("click", function() {
        clickMajorKind(major_kind);
    });
});

function clickMajorKind(major_kind) {
    Array.from(major_kind_list).forEach(major_kind => {
        major_kind.classList.remove("active")
    });

    major_kind.classList.add("active");


    // console.log(nav_link.dataset.id);
}
