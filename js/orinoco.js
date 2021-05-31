/* images appareil photo 
let camImages =  [ 'images/vcam_1.jpg', 'vcam_2.jpg', 'vcam_3.jpg','vcam_4.jpg','vcam_5.jpg' ];

function demarrage() {
    camImages = document.createElement('img');
    img.src = camImages[0];
    let maDiv = document.getElementsByClassName("camera_picture1");
    maDiv.appendChild(img);
}  

let sImages =  [ 'pierre','paul','jean'];*/

/*test 2*/

const ul = document.getElementById('camera');
const url = 'http://localhost:3000/api/cameras';

function debut (element) {
    return document.createElement(element);
   }

   function append(parent, el) {
    return parent.appendChild(el);
}






