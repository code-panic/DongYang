const campus_map_wrapper = document.getElementById("campus_map_wrapper");

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
            
            if (pixelData[3] != 0 && !element.classList.contains('clicked')) {
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
campus_map_wrapper.addEventListener('mouseclick', function(event) {
    const elements = document.elementsFromPoint(event.clientX, event.clientY);

    Array.from(elements).forEach(element => {
        if(element.tagName == "CANVAS") {
            const pixelData = element.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
            
            if (pixelData[3] != 0) {
                Array.from(canvas_list).forEach(canvas => {
                    canvas.classList.remove('clicked');
                });
                
                element.classList.add('clicked');
                
                
            }
        }
    });
});