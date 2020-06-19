
// 빈 코드에 캔버스를 추가하는 방식
// const campus_map_wrapper = document.getElementById("campus_map_wrapper");

// addCanvas('./img/campus_building_9.png');
// // addCanvas('./img/campus_floor.png');
// // addCanvas('./img/campus_building_8.png');
// // addCanvas('./img/campus_building_7.png');
// // addCanvas('./img/campus_building_6.png');
// // addCanvas('./img/campus_building_5.png');
// // addCanvas('./img/campus_building_4.png');
// // addCanvas('./img/campus_building_3.png');
// // addCanvas('./img/campus_building_2.png');
// // addCanvas('./img/campus_building_1.png');

// function addCanvas(src) {
//     const canvas = document.createElement("canvas");
//     canvas.width = 800;
//     canvas.height = 448;

//     campus_map_wrapper.appendChild(canvas);

//     const tmp_image = new Image();
//     tmp_image.src = src;

//     tmp_image.onload = function() {
//         canvas.getContext('2d').drawImage(tmp_image, 0, 0, canvas.width, canvas.height);
//         console.log("tmp_imgae is loaded");    
//         // tmp_image.setAttribute('crossOrigin', '');
//     }
// }

// campus_map_wrapper.addEventListener('mousemove', function(event) {
//     const elements = document.elementsFromPoint(event.clientX, event.clientY);

//     Array.from(elements).forEach(element => {
//         if(element.tagName == "CANVAS") {
//             const pixel = element.getContext('2d').getImageData(event.clientX, event.clientY, 1, 1);
//             console.log(pixel.data);
//         }
//     });
// });

// 이미지 태그 곁으로 안 보이는 canvas 태그를 쓰는 방식 -> 성공

// const image = document.getElementById('image');
// const canvas = document.createElement('canvas');
// canvas.width = 800;
// canvas.height = 448;

// const tmp_image = new Image();
// tmp_image.src = "./img/campus_building_8.png";

// tmp_image.onload = function() {
//     canvas.getContext('2d').drawImage(tmp_image, 0, 0, canvas.width, canvas.height);
// }

// image.addEventListener('mousemove', function(event) {
//     var pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
//     console.log(pixelData);
// });

// 빈 코드에 캔버스를 추가하는 방식
const campus_map_wrapper = document.getElementById("campus_map_wrapper");

const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 448;

const tmp_image = new Image();
tmp_image.src = "./img/campus_building_8.png";

tmp_image.onload = function() {
    canvas.getContext('2d').drawImage(tmp_image, 0, 0, canvas.width, canvas.height);
}

campus_map_wrapper.appendChild(canvas);

campus_map_wrapper.addEventListener('mousemove', function(event) {
    var pixelData = canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
    console.log(pixelData);
});


