// const campus_map_wrapper = document.getElementById("campus_map_wrapper");

// const campus_building_9 = document.getElementById("campus_building_9");
// const campus_building_9_canvas = document.createElement('canvas');

// campus_building_9_canvas.width = campus_building_9.width;
// campus_building_9_canvas.height = campus_building_9.height;
// campus_building_9_canvas.getContext('2d').drawImage(campus_building_9, 0, 0, campus_building_9.width, campus_building_9.height);

// const pixel = campus_building_9_canvas.getContext('2d').getImageData(1, 1, 1, 1).data;

// console.log("r : " + pixel[0] +" g : " + pixel[1] + " b : " + pixel[2] + " a : " + pixel[3]);

// campus_map_wrapper.addEventListener('mousemove', function(event) {
//     const campus_map_wrapper_rect = campus_map_wrapper.getBoundingClientRect();

//     // console.log("X : " + (event.clientX - campus_map_wrapper_rect.left) 
//     //             + " Y : " + (event.clientY - campus_map_wrapper_rect.top));

//     // const imgX = event.clientX - campus_map_wrapper_rect.left;
//     // const imgY = event.clientY - campus_map_wrapper_rect.top;

//     const elements = document.elementsFromPoint(event.clientX, event.clientY);

//     // Array.from(elements).forEach(element => function() {
//     //     if(element.tagName == "img" && )
//     // });

//     // console.log(elements);
// });

const campus_map_wrapper = document.getElementById("campus_map_wrapper");

addCanvas('./img/campus_building_9.png');
addCanvas('./img/campus_floor.png');
addCanvas('./img/campus_building_8.png');
addCanvas('./img/campus_building_7.png');
addCanvas('./img/campus_building_6.png');
addCanvas('./img/campus_building_5.png');
addCanvas('./img/campus_building_4.png');
addCanvas('./img/campus_building_3.png');
addCanvas('./img/campus_building_2.png');
addCanvas('./img/campus_building_1.png');

function addCanvas(src) {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 448;

    campus_map_wrapper.appendChild(canvas);

    const tmp_image = new Image();
    tmp_image.src = src;

    canvas.setAttribute('data-id', src);

    tmp_image.onload = function() {
        canvas.getContext('2d').drawImage(tmp_image, 0, 0, canvas.width, canvas.height);    
        // tmp_image.setAttribute('crossOrigin', '');
    }
}

campus_map_wrapper.addEventListener('mousemove', function(event) {
    const campus_map_wrapper_rect = campus_map_wrapper.getBoundingClientRect();

    const elements = document.elementsFromPoint(event.clientX, event.clientY);

    Array.from(elements).forEach(element => {
        if(element.tagName == "CANVAS") {
            // console.log(element);

            const pixel = element.getContext('2d')
                            .getImageData(event.clientX - campus_map_wrapper_rect.left, 
                                            event.clientY - campus_map_wrapper_rect.top, 1, 1).data;

        
            if (pixel[3] != 0) {
                console.log(element.src);
            }
        }
    });

    // console.log(elements);
});