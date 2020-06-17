const jsonURL = "./json/major.json";
const request = new XMLHttpRequest();

const major_kind_list = document.getElementById("major_kind_wrapper").children;

const major_name = document.getElementById("major_name");
const major_department = document.getElementById("major_department");
const major_desc = document.getElementById("major_desc");
const major_homepage_adress = document.getElementById("major_hompage_adress");

let majorObj;

//Json 객체 받아오기
request.open('GET', jsonURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    majorObj = request.response;
    // console.log(majorObj);
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

    // console.log(major_kind.textContent);

    console.log(majorObj);
    console.log(majorObj['majors'][0]);

    //major_detail의 값 변경
    majorObj['majors'].forEach(major => {
        if(major['name'] == major_kind.textContent) {
            major_name = major['name'];
            
            major_desc = major['desc'];
            major_homepage_adress.href = major['homepage_adress'];


            return;
        }
    });

    // console.log(nav_link.dataset.id);
}
