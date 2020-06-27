const campusRequest = new XMLHttpRequest();

const campus_map_wrapper = document.getElementById("campus_map_wrapper");

let campus_floor;

const campus_building_desc_cont = document.getElementById("campus_building_desc_cont");

const campus_building_name = document.getElementById("campus_building_name");
const campus_building_desc = document.getElementById("campus_building_desc");
const campus_building_floors = document.getElementById("campus_building_floors");

let campusObj;

/* 캔버스 json 파일 불러오기 */
campusRequest.open('GET', "./json/campus.json");
campusRequest.responseType = 'json';
campusRequest.send();

campusRequest.onload = function() {
    campusObj = campusRequest.response;
}

/* 캔버스 추가하기 */
addCanvasImage('./img/campus_building_9.png');
addCanvasImage('./img/campus_floor.png');
addCanvasImage('./img/campus_building_8.png');
addCanvasImage('./img/campus_building_7.png');
addCanvasImage('./img/campus_building_6.png');
addCanvasImage('./img/campus_building_5.png');
addCanvasImage('./img/campus_building_4.png');
addCanvasImage('./img/campus_building_3.png');
addCanvasImage('./img/campus_building_2.png');
addCanvasImage('./img/campus_building_1.png');

const canvas_list = Array.from(campus_map_wrapper.children);

function addCanvasImage(src) {
    /* 캔버스 태그 추가하기 */
    const canvas = document.createElement('canvas');
    
    if(isComputer) {
        canvas.width = 800;
        canvas.height = 448;
    } else {
        canvas.width = 280;
        canvas.height = 156;
    }

    campus_map_wrapper.appendChild(canvas);

    /* data-id 설정하기 */ 
    canvas.setAttribute('data-id', src.split("/")[2].split(".")[0]);

    /* 1호관으로 초기 설정 & 캠퍼스 바닥 이미지 주소 저장하기 */
    if(canvas.dataset.id == "campus_building_1") {
        canvas.classList.add("clicked");
    } else if (canvas.dataset.id == "campus_floor") {
        campus_floor = canvas;
    }

    /* 캔버스에 이미지 그려넣기 */
    const tmp_image = new Image();
    tmp_image.src = src;

    tmp_image.onload = function() {
        canvas.getContext('2d').drawImage(tmp_image, 0, 0, canvas.width, canvas.height);
    }
}

/* 
호버한 위치에 겹치는 모든 태그들 중에서 캔버스 태그만을 고르고 
그 중에서 클릭한 위치에 투명하지 않은(건물이미지가 있는) 그림을 선택
*/
campus_map_wrapper.addEventListener('mousemove', function(event) {
    const elements = document.elementsFromPoint(event.clientX, event.clientY);

    Array.from(elements).forEach(element => {
        if(element.tagName == "CANVAS") {
            const pixelData = element.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
            
            if (pixelData[3] != 0 && !element.classList.contains('clicked') 
                    && element.dataset.id != "campus_floor") {

                /* 관련된 클래스를 모두 리셋하기 */
                canvas_list.forEach(canvas => {
                    canvas.classList.remove('hover');
                    canvas.classList.remove('hoverSurrounding');
                });

                campus_floor.classList.remove('hoverSurrounding');

                /* 호버한 건물 더 투명하게 하기 */
                element.classList.add('hover');

                /* 호버한 건물을 가리는 건물을 반투명화하기 */
                switch(element.dataset.id) {
                    case "campus_building_2":
                        addClassByDataId("campus_building_1", "hoverSurrounding", "clicked");
                        break;
                    case "campus_building_4":
                        addClassByDataId("campus_building_1", "hoverSurrounding", "clicked");
                        break;
                    case "campus_building_6":
                        addClassByDataId("campus_building_4", "hoverSurrounding", "clicked");
                        addClassByDataId("campus_building_5", "hoverSurrounding", "clicked");
                        break;
                    case "campus_building_7":
                        addClassByDataId("campus_building_5", "hoverSurrounding", "clicked");
                        break;
                    case "campus_building_8":
                        addClassByDataId("campus_building_7", "hoverSurrounding", "clicked");
                        break;
                    case "campus_building_9":
                        campus_floor.classList.add("hoverSurrounding");
                        addClassByDataId("campus_building_5", "hoverSurrounding", "clicked");
                        break;
                }

                return;

            }
        }
    });
});

/* 
클릭한 위치에 겹치는 모든 태그들 중에서 캔버스 태그만을 고르고 
그 중에서 클릭한 위치에 투명하지 않은(건물이미지가 있는) 그림을 선택
*/
campus_map_wrapper.onclick =  function(event) {
    const elements = document.elementsFromPoint(event.clientX, event.clientY);

    Array.from(elements).forEach(element => {
        if(element.tagName == "CANVAS") {
            const pixelData = element.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
            
            if (pixelData[3] != 0 && element.dataset.id != "campus_floor") {
                /* 관련된 클래스를 모두 리셋하기 */
                canvas_list.forEach(canvas => {
                    canvas.classList.remove('hover');
                    canvas.classList.remove('hoverSurrounding');
                    canvas.classList.remove('clicked');
                    canvas.classList.remove('clickedSurrounding');
                });

                campus_floor.classList.remove('clickedSurrounding');

                /* 클릭한 건물 불투명하게 만들기 */
                element.classList.add('clicked');

                /* 클릭한 건물을 가리는 건물을 반투명화하기 */
                switch(element.dataset.id) {
                    case "campus_building_2":
                        addClassByDataId("campus_building_1", "clickedSurrounding");
                        break;
                    case "campus_building_4":
                        addClassByDataId("campus_building_1", "clickedSurrounding");
                        break;
                    case "campus_building_6":
                        addClassByDataId("campus_building_4", "clickedSurrounding");
                        addClassByDataId("campus_building_5", "clickedSurrounding");
                        break;
                    case "campus_building_7":
                        addClassByDataId("campus_building_5", "clickedSurrounding");
                        break;
                    case "campus_building_8":
                        addClassByDataId("campus_building_7", "clickedSurrounding");
                        break;
                    case "campus_building_9":
                        campus_floor.classList.add("clickedSurrounding");
                        addClassByDataId("campus_building_5", "clickedSurrounding");
                        break;
                }

                campus_building_desc_cont.style.animation = 'none';

                /* 애니메이션을 리셋하기 위해서 리플로우를 걸어준다 */
                campus_building_desc_cont.offsetHeight;

                 /* campus_building 값 변경 */
                campusObj['bulidings'].forEach(building => {
                    if(element.dataset.id == building['id']) {
                        campus_building_desc_cont.style.animation = 'campus_building_desc_cont_change 1s';

                        campus_building_name.textContent = building['name'];
                        campus_building_desc.textContent = building['desc'];
                        
                        let tmp_html = '';

                        building['floors'].forEach(floor => {
                            tmp_html += "<tr><td class=floor>" + floor['name'] + "</td><td>" + floor['desc'] + "</td></tr>";
                        });

                        campus_building_floors.innerHTML = tmp_html;

                        return;
                    }
                });
            }
        }
    });
};

/* data-id로 검색한 태그에 클래스를 더해준다 */
function addClassByDataId(data_id, class_add) {
    document.querySelector("[data-id='" + data_id + "']").classList.add(class_add);
}

function addClassByDataId(data_id, class_add, class_avoid) {
    const element = document.querySelector("[data-id='" + data_id + "']");

    if (!element.classList.contains(class_avoid)) {
        element.classList.add(class_add);   
    }
}