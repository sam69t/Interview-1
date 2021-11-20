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

$("#begin").click(function () {
  $(".regle").css("display", "none");
});
$(".rules").click(function () {
  $(".regle").css("display", "block");
});

$("#photo").click(function () {
  canvasPhoto = true;
  $(".text-area").css("z-index", "0");

  $("#dwn-photo").css("display", "block");
  $("#canvasHTML").css("display", "flex");

  $(".rec-button").css("display", "none");
  $("#dwn-btn").css("display", "none");
  $(".saveImage").css("display", "none");
  $("#clear").css("display", "none");
  $(".text-area").css("border", "none");
});

$("#draw").click(function () {
  $(".text-area").css("border", "none");
  $(".text-area").css("z-index", "0");

  canvasPhoto = false;
  canvasDrawing = true;
  console.log("normal");
  document.getElementById("text-val2").value = "";

  // $("#canvasHTML").css("display", "flex");
  $("#canvasHTML").css("display", "flex");
  $(".draw-button").css("display", "flex");
  $(".saveImage").css("display", "block");
  $(".rec-button").css("display", "none");
  $(".send").css("display", "none");
  $("#clear").css("display", "block");
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
  $(".text-area").css("z-index", "99999999");
  $(".text-area").css("color", "black");

  $(".text-area").css("border", "1px solid black");

  document.getElementById("text-val2").childNodes[0].nodeValue =
    "Votre réponse";

  $(".rec-button").css("display", "none");
  $(".saveImage").css("display", "none");
  $("#canvasHTML").css("display", "none");

  $(".send").css("display", "block");
  $("#clear").css("display", "none");
  $("#dwn-photo").css("display", "none");
});

$("button.rec-button").click(function () {
  console.log("log");
});

$(".logo-crayon").click(function () {
  $(".logo-crayon").css("background-color", "black");
  $(".draw-button").css({ filter: "invert()" });

  $(".logo-screenshot").css("background-color", "white");
  $(".rec-photo").css({ filter: "none" });

  $(".logo-text").css("background-color", "white");
  $(".write-text").css({ filter: "none" });

  $(".logo-mic").css("background-color", "white");
  $(".record-mic").css({ filter: "none" });
});

$(".logo-screenshot").click(function () {
  $(".logo-screenshot").css("background-color", "black");
  $(".rec-photo").css({ filter: "invert()" });

  $(".logo-crayon").css("background-color", "white");
  $(".draw-button").css({ filter: "none" });

  $(".logo-text").css("background-color", "white");
  $(".write-text").css({ filter: "none" });

  $(".logo-mic").css("background-color", "white");
  $(".record-mic").css({ filter: "none" });
});

$(".logo-text").click(function () {
  $(".logo-text").css("background-color", "black");
  $(".write-text").css({ filter: "invert()" });

  $(".logo-mic").css("background-color", "white");
  $(".record-mic").css({ filter: "none" });

  $(".logo-screenshot").css("background-color", "white");
  $(".rec-photo").css({ filter: "none" });

  $(".logo-crayon").css("background-color", "white");
  $(".draw-button").css({ filter: "none" });
});

$(".logo-mic").click(function () {
  $(".logo-mic").css("background-color", "black");
  $(".record-mic").css({ filter: "invert()" });

  $(".logo-screenshot").css("background-color", "white");
  $(".rec-photo").css({ filter: "none" });

  $(".logo-crayon").css("background-color", "white");
  $(".draw-button").css({ filter: "none" });

  $(".logo-text").css("background-color", "white");
  $(".write-text").css({ filter: "none" });
});
