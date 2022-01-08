// $("#draw").on("click", function () {
//   $("#canvasHTML").css("display", "flex");
//   $("body").addClass(".cursor");
// });
// $("#draw").click(function () {
//   console.log("normal");

//   // $("#canvasHTML").css("display", "flex");
//   $("#canvasHTML").toggleClass("show");
//   $(".draw-button").toggleClass("press");
//   $(".send").toggleClass("hide");
//   $(".rec-button").toggleClass("showing");
// });
// $(".record-mic").click(function () {
//   $(".test").toggleClass("showing");
//   $(".send").toggleClass("hide");
//   $(".rec-button").toggleClass("hide");
// });
// $(".write-text").click(function () {
//   $(".test").toggleClass("showing");
//   $(".send").toggleClass("hide");
//   $(".rec-button").toggleClass("hide");
// });

let canvasPhoto = false;
let canvasDrawing = false;

$(".logo-text").css("background-color", "white");
$(".logo-screenshot").css("background-color", "white");
$(".logo-mic").css("background-color", "white");
$(".logo-drop").css("background-color", "white");
$(".logo-crayon").css("background-color", "white");

$("#begin").click(function () {
  $(".regle").css("display", "none");
});
$(".rules").click(function () {
  $(".regle").css("display", "block");
});

$("#photo").click(function () {
  // $("#dwn-photo").css("display", "block");

  canvasPhoto = true;
  $(".text-area").css("z-index", "0");

  $("#canvasHTML").css("display", "flex");

  $(".rec-button").css("display", "none");
  $("#dwn-btn").css("display", "none");
  $(".saveImage").css("display", "none");
  $("#clear").css("display", "none");
  $(".text-area").css("border", "none");
});

$("#draw").click(function () {
  // $(".saveImage").css("display", "block");
  // $("#clear").css("display", "block");

  $(".text-area").css("border", "none");
  $(".text-area").css("z-index", "0");

  canvasPhoto = false;
  canvasDrawing = true;
  document.getElementById("text-val2").value = "";

  // $("#canvasHTML").css("display", "flex");
  $("#canvasHTML").css("display", "flex");
  $(".draw-button").css("display", "flex");
  $(".rec-button").css("display", "none");
  $(".send").css("display", "none");
  $("#dwn-photo").css("display", "none");
});

$(".record-mic").click(function () {
  $(".text-area").css("border", "none");
  $(".text-area").css("z-index", "0");
  $(".text-area").css("color", "white");

  $(".rec-button").css("display", "block");
  $(".rec-button").css("background-color", "green");
  $(".rec-button").css("color", "white");
  $("#dwn-photo").css("display", "none");

  $("#clear").css("display", "none");

  document.getElementById("text-val2").childNodes[0].nodeValue = "";
  console.log("clear");
  $(".saveImage").css("display", "none");
  $(".send").css("display", "none");
  $("#canvasHTML").css("display", "none");
});
$(".write-text").click(function () {
  // $(".send").css("display", "block");

  $(".text-area").css("z-index", "99999999");
  $(".text-area").css("color", "black");

  // $(".text-area").css("border", "1px solid black");

  document.getElementById("text-val2").childNodes[0].nodeValue =
    "Votre réponse";

  $(".rec-button").css("display", "none");
  $(".saveImage").css("display", "none");
  $("#canvasHTML").css("display", "none");

  $("#clear").css("display", "none");
  $("#dwn-photo").css("display", "none");
});

$("button.rec-button").click(function () {
  console.log("log");
});

$(".send-response").click(function () {
  $(".text-area").css("z-index", "99999999");
});

$(".logo-crayon").click(function () {
  $("#image_drop_area").css("display", "none");
  $(".drop-button").css("display", "none");

  $(".logo-crayon").css("background-color", "black");
  $(".draw-button").css({ filter: "invert()" });

  $(".logo-screenshot").css("background-color", "white");
  $(".rec-photo").css({ filter: "none" });

  $(".logo-text").css("background-color", "white");
  $(".write-text").css({ filter: "none" });

  $(".logo-mic").css("background-color", "white");
  $(".record-mic").css({ filter: "none" });

  $(".logo-drop").css("background-color", "white");
  $(".drop").css({ filter: "none" });
});

$(".logo-screenshot").click(function () {
  $("#image_drop_area").css("display", "none");
  $(".drop-button").css("display", "none");

  $(".logo-screenshot").css("background-color", "black");
  $(".rec-photo").css({ filter: "invert()" });

  $(".logo-crayon").css("background-color", "white");
  $(".draw-button").css({ filter: "none" });

  $(".logo-text").css("background-color", "white");
  $(".write-text").css({ filter: "none" });

  $(".logo-mic").css("background-color", "white");
  $(".record-mic").css({ filter: "none" });

  $(".logo-drop").css("background-color", "white");
  $(".drop").css({ filter: "none" });
});

$(".logo-text").click(function () {
  $(".text-area").css("display", "flex");

  $("#record-wrapper").css("display", "none");
  $("#image_drop_area").css("display", "none");
  $(".drop-button").css("display", "none");

  $(".logo-text").css("background-color", "black");
  $(".write-text").css({ filter: "invert()" });

  $(".logo-mic").css("background-color", "white");
  $(".record-mic").css({ filter: "none" });

  $(".logo-screenshot").css("background-color", "white");
  $(".rec-photo").css({ filter: "none" });

  $(".logo-crayon").css("background-color", "white");
  $(".draw-button").css({ filter: "none" });

  $(".logo-drop").css("background-color", "white");
  $(".drop").css({ filter: "none" });
});

$(".logo-mic").click(function () {
  $("#record-wrapper").css("display", "flex");
  $("#image_drop_area").css("display", "none");
  $(".drop-button").css("display", "none");

  $(".logo-mic").css("background-color", "black");
  $(".record-mic").css({ filter: "invert()" });

  $(".logo-drop").css("background-color", "white");
  $(".drop").css({ filter: "none" });

  $(".logo-screenshot").css("background-color", "white");
  $(".rec-photo").css({ filter: "none" });

  $(".logo-crayon").css("background-color", "white");
  $(".draw-button").css({ filter: "none" });

  $(".logo-text").css("background-color", "white");
  $(".write-text").css({ filter: "none" });
});
$(".drop").click(function () {
  // $(".drop-button").css("display", "block");

  $("#record-wrapper").css("display", "none");
  $("#canvasHTML").css("display", "none");
  $(".rec-button").css("display", "none");
  $("#dwn-btn").css("display", "none");
  $("#dwn-photo").css("display", "none");

  $(".saveImage").css("display", "none");
  $("#clear").css("display", "none");

  $(".text-area").css("display", "none");

  $("#image_drop_area").css("display", "flex");

  $(".logo-drop").css("background-color", "black");
  $(".drop").css({ filter: "invert()" });

  $(".logo-mic").css("background-color", "white");
  $(".record-mic").css({ filter: "none" });

  $(".logo-screenshot").css("background-color", "white");
  $(".rec-photo").css({ filter: "none" });

  $(".logo-crayon").css("background-color", "white");
  $(".draw-button").css({ filter: "none" });

  $(".logo-text").css("background-color", "white");
  $(".write-text").css({ filter: "none" });
});
