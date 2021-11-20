// (function () {
//   var streaming = false,
//     video = document.querySelector("#video"),
//     cover = document.querySelector("#cover"),
//     canvas = document.querySelector("#canvas"),
//     photo = document.querySelector("#photo"),
//     startbutton = document.querySelector("#startbutton"),
//     width = 320,
//     height = 0;

//   navigator.getMedia =
//     navigator.getUserMedia ||
//     navigator.webkitGetUserMedia ||
//     navigator.mozGetUserMedia ||
//     navigator.msGetUserMedia;

//   navigator.getMedia(
//     {
//       video: true,
//       audio: false,
//     },
//     function (stream) {
//       if (navigator.mozGetUserMedia) {
//         video.mozSrcObject = stream;
//       } else {
//         var vendorURL = window.URL || window.webkitURL;
//         video.src = vendorURL.createObjectURL(stream);
//       }
//       video.play();
//     },
//     function (err) {
//       console.log("An error occured! " + err);
//     }
//   );

//   video.addEventListener(
//     "canplay",
//     function (ev) {
//       if (!streaming) {
//         height = video.videoHeight / (video.videoWidth / width);
//         video.setAttribute("width", width);
//         video.setAttribute("height", height);
//         canvas.setAttribute("width", width);
//         canvas.setAttribute("height", height);
//         streaming = true;
//       }
//     },
//     false
//   );

//   function takepicture() {
//     canvas.width = width;
//     canvas.height = height;
//     canvas.getContext("2d").drawImage(video, 0, 0, width, height);
//     var data = canvas.toDataURL("image/png");
//     photo.setAttribute("src", data);
//   }

//   startbutton.addEventListener(
//     "click",
//     function (ev) {
//       takepicture();
//       ev.preventDefault();
//     },
//     false
//   );
// })();
// var capture;
// var video;

// function setup() {
//   let canvasWebcam = createCanvas(1600, 500);
//   canvasWebcam.parent("canvasWebcam");
//   background(50);
//   video = createCapture(VIDEO);
//   video.position(0, 0);
//   video.size(700, 0);

//   // savePhotoUne = createButton("Envoyer la photo");
//   // savePhotoUne.id("dwn-photo");
//   // savePhotoUne.parent(footer);
//   // savePhotoUne.mousePressed(savePhoto);
// }

// function draw() {
//   //   video.hide();
//   //   push();
//   //   translate(width, 0);
//   //   scale(-1, 1);
//   //   image(video, 700, 0);
//   //   pop();
//   // }a
// }
// function savePhoto() {
//   let number = document.getElementById("text-val").value;

//   if (number.length == 0) {
//     alert("Ecrire le numéro de la question");
//   } else {
//     save(number);
//     clearTheCanvas();
//     document.getElementById("text-val").value = "";

//     console.log("save image");

//     // refreshPage();
//   }
// }
