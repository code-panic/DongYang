const campusRequest = new XMLHttpRequest();

const campus_map_wrapper = document.getElementById("campus_map_wrapper");

const campus_building_desc_cont = document.getElementById("campus_building_desc_cont");

const campus_building_name = document.getElementById("campus_building_name");
const campus_building_desc = document.getElementById("campus_building_desc");
const campus_building_floors = document.getElementById("campus_building_floors");

let campusObj;

campusRequest.open('GET', "./json/campus.json");
campusRequest.responseType = 'json';
campusRequest.send();

campusRequest.onload = function() {
    campusObj = campusRequest.response;
}

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

function addCanvasImage(src) {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 448;

    campus_map_wrapper.appendChild(canvas);

    //data-id 설정 코드 
    canvas.setAttribute('data-id', src.split("/")[2].split(".")[0]);

    if(canvas.dataset.id == "campus_building_1") {
        canvas.classList.add("clicked");
    }


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
                
                const canvas_list = campus_map_wrapper.children;

                Array.from(canvas_list).forEach(canvas => {
                    canvas.classList.remove('hover');
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

                const canvas_list = campus_map_wrapper.children;

                Array.from(canvas_list).forEach(canvas => {
                    canvas.classList.remove('clicked');
                });
                
                element.classList.remove('hover');
                element.classList.add('clicked');

                campus_building_desc_cont.style.animation = 'none';

                campus_building_desc_cont.offsetHeight;     //reflow trigger

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