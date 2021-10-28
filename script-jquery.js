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
$("#begin").click(function () {
  $(".regle").css("display", "none");
});
$(".rules").click(function () {
  $(".regle").css("display", "block");
});

$("#draw").click(function () {
  console.log("normal");
  document.getElementById("text-val2").value = "";

  // $("#canvasHTML").css("display", "flex");
  $("#canvasHTML").css("display", "flex");
  $(".draw-button").css("display", "flex");
  $(".saveImage").css("display", "block");
  $(".rec-button").css("display", "none");
  $(".send").css("display", "none");
  $("#clear").css("display", "block");
});

$(".record-mic").click(function () {
  $(".rec-button").css("display", "block");
  $(".rec-button").css("background-color", "green");
  $(".rec-button").css("color", "white");

  $("#clear").css("display", "none");

  $(".saveImage").css("display", "none");
  $(".send").css("display", "none");
  $("#canvasHTML").css("display", "none");
});
$(".write-text").click(function () {
  document.getElementById("text-val2").childNodes[0].nodeValue =
    "Votre réponse";

  $(".rec-button").css("display", "none");
  $(".saveImage").css("display", "none");
  $("#canvasHTML").css("display", "none");

  $(".send").css("display", "block");
  $("#clear").css("display", "none");
});

$("button.rec-button").click(function () {
  console.log("log");
});
