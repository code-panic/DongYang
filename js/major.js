const majorRequest = new XMLHttpRequest();

const major_kind_list = Array.from(document.getElementById("major_kind_list").children);

const major_desc_wrapper = document.getElementById("major_desc_wrapper");
const major_detail_bg = document.getElementById("major_detail_bg");

const major_name = document.getElementById("major_name");
const major_departments = document.getElementById("major_departments");
const major_desc = document.getElementById("major_desc");
const major_homepage_address = document.getElementById("major_homepage_address");

let majorObj;

/* Json 파일 받아오기 */
majorRequest.open('GET', "./json/major.json");
majorRequest.responseType = 'json';
majorRequest.send();

majorRequest.onload = function() {
    majorObj = majorRequest.response;
}

/* 클릭 이벤트 구현 */
major_kind_list.forEach(major_kind => {
    major_kind.onclick = function() {
        removeMajorActiveAll();

        major_kind.classList.add("active");

        major_desc_wrapper.style.animation = 'none';
        major_detail_bg.style.animation = 'none';
    
        /* 애니메이션을 리셋하기 위해서 리플로우를 걸어준다 */
        major_desc_wrapper.offsetHeight;
    
        /* major_detail 값 변경 */
        majorObj['majors'].forEach(major => {
            if(major_kind.dataset.id == major['id']) {
                major_desc_wrapper.style.animation = 'major_desc_wrapper_change 1s';
                major_detail_bg.style.animation = 'major_detail_bg_change 1s';
        
                major_detail_bg.src = "./img/major_"+ major['id'] + ".png";
    
                console.log(major_detail_bg.src);
    
                major_name.textContent = major['name'];
                
                major_departments.textContent = major['departments'][0] + ", " + major['departments'][1]
                if (major['departments'].length > 2) { 
                    major_departments.textContent += " 외 " + (major['departments'].length - 2) + "개 학과";
                }

                major_desc.textContent = major['desc'];
                major_homepage_address.href = major['homepage_address'];
    
                return;
            }
        });
    }
});

/* 모든 전공 버튼의 활성화 클래스를 지움 */
function removeMajorActiveAll() {
    major_kind_list.forEach(major_kind => {
        major_kind.classList.remove("active")
    });
}
