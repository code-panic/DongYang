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
    canvas.width = 800;
    canvas.height = 448;

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

//mouse hover 애니메이션 처리하기 
campus_map_wrapper.addEventListener('mousemove', function(event) {
    const elements = document.elementsFromPoint(event.clientX, event.clientY);

    Array.from(elements).forEach(element => {
        if(element.tagName == "CANVAS") {
            const pixelData = element.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
            
            if (pixelData[3] != 0 
                    && !element.classList.contains('clicked') 
                    && element.dataset.id != "campus_floor") {

                canvas_list.forEach(canvas => {
                    canvas.classList.remove('hover');
                    campus_floor.classList.remove('hoverSurrounding');
                    canvas.classList.remove('hoverSurrounding');

                    if (element.dataset.id == "campus_building_2") {
                        if (canvas.dataset.id == "campus_building_1" && !canvas.classList.contains("clicked")) {
                            canvas.classList.add("hoverSurrounding");
                        }
                    } else if (element.dataset.id == "campus_building_4") {
                        if (canvas.dataset.id == "campus_building_1" && !canvas.classList.contains("clicked")) {
                            canvas.classList.add("hoverSurrounding");
                        }
                    } else if (element.dataset.id == "campus_building_6") {
                        if ((canvas.dataset.id == "campus_building_4" || canvas.dataset.id == "campus_building_5") 
                                && !canvas.classList.contains("clicked")) {
                            canvas.classList.add("hoverSurrounding");
                        }
                    } else if (element.dataset.id == "campus_building_7") {
                        if (canvas.dataset.id == "campus_building_5"  && !canvas.classList.contains("clicked")) {
                            canvas.classList.add("hoverSurrounding");
                        }
                    } else if (element.dataset.id == "campus_building_8") {
                        if (canvas.dataset.id == "campus_building_7"  && !canvas.classList.contains("clicked")) {
                            canvas.classList.add("hoverSurrounding");
                        }
                    } else if (element.dataset.id == "campus_building_9") {
                        campus_floor.classList.add("hoverSurrounding");

                        if (canvas.dataset.id == "campus_building_5"  && !canvas.classList.contains("clicked")) {
                            canvas.classList.add("hoverSurrounding");
                        }
                    }
                });

                element.classList.add('hover');

            }
        }
    });
});

//mouse 클릭 애니메이션 처리하기 
campus_map_wrapper.onclick =  function(event) {
    const elements = document.elementsFromPoint(event.clientX, event.clientY);

    Array.from(elements).forEach(element => {
        if(element.tagName == "CANVAS") {
            const pixelData = element.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
            
            if (pixelData[3] != 0 
                    && element.dataset.id != "campus_floor") {
                
                campus_floor.classList.remove('clickedSurrounding');

                canvas_list.forEach(canvas => {
                    canvas.classList.remove('clicked');
                    canvas.classList.remove('clickedSurrounding');

                    // if (element.dataset.id == "campus_building_2") {
                    //     if (canvas.dataset.id == "campus_building_1") {
                    //         canvas.classList.add("clickedSurrounding");
                    //     }
                    // } else if (element.dataset.id == "campus_building_4") {
                    //     if (canvas.dataset.id == "campus_building_1") {
                    //         canvas.classList.add("clickedSurrounding");
                    //     }
                    // } else if (element.dataset.id == "campus_building_6") {
                    //     if (canvas.dataset.id == "campus_building_4" || canvas.dataset.id == "campus_building_5") {
                    //         canvas.classList.add("clickedSurrounding");
                    //     }
                    // } else if (element.dataset.id == "campus_building_7") {
                    //     if (canvas.dataset.id == "campus_building_5") {
                    //         canvas.classList.add("clickedSurrounding");
                    //     }
                    // } else if (element.dataset.id == "campus_building_8") {
                    //     if (canvas.dataset.id == "campus_building_7") {
                    //         canvas.classList.add("clickedSurrounding");
                    //     }
                    // } else if (element.dataset.id == "campus_building_9") {
                    //     campus_floor.classList.add("clickedSurrounding");

                    //     if (canvas.dataset.id == "campus_building_5") {
                    //         canvas.classList.add("clickedSurrounding");
                    //     }
                    // }

                    switch(element.dataset.id) {
                        case "campus_building_2":
                            if (canvas.dataset.id == "campus_building_1") {
                                canvas.classList.add("clickedSurrounding");
                            }
                            break;
                        case "campus_building_4":
                            if (canvas.dataset.id == "campus_building_1") {
                                canvas.classList.add("clickedSurrounding");
                            }
                            break;
                        case "campus_building_6":
                            if (canvas.dataset.id == "campus_building_4" || canvas.dataset.id == "campus_building_5") {
                                canvas.classList.add("clickedSurrounding");
                            }
                            break;
                        case "campus_building_7":
                            if (canvas.dataset.id == "campus_building_5") {
                                canvas.classList.add("clickedSurrounding");
                            }
                            break;
                        case "campus_building_8":
                            if (canvas.dataset.id == "campus_building_7") {
                                canvas.classList.add("clickedSurrounding");
                            }
                            break;
                        case "campus_building_9":
                            campus_floor.classList.add("clickedSurrounding");

                            if (canvas.dataset.id == "campus_building_5") {
                                canvas.classList.add("clickedSurrounding");
                            }
                            break;
                    }
                });
                
                element.classList.remove('hover');
                element.classList.add('clicked');

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
                            tmp_html += "<tr><td class=floor>" + floor['name'] + "</td><td>" + floor['desc'] + "</td></tr>" 
                        });

                        campus_building_floors.innerHTML = tmp_html;

                        return;
                    }
                });
                
            }
        }
    });
};