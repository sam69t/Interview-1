function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(".logo-mic").css("display", "none");
$(".logo-crayon").css("display", "none");
$(".logo-drop").css("display", "none");
$(".logo-text").css("display", "none");
$(".logo-screenshot").css("display", "none");

$("#text-val").on("input", function (e) {
  let number = document.getElementById("text-val").value;
  //   //do your work here
  //   console.log(number);
  let stateDrop = randomIntFromInterval(1, 5);
  let stateMic = randomIntFromInterval(1, 5);
  let stateText = randomIntFromInterval(1, 5);
  let stateScreenShot = randomIntFromInterval(1, 5);
  let stateDraw = randomIntFromInterval(1, 5);

  console.log(stateDrop, stateMic, stateText, stateScreenShot, stateDraw);

  if (stateDrop < 2.5) {
    $(".logo-drop").css("display", "none");
    console.log("TRIGGER");
  } else {
    $(".logo-drop").css("display", "block");
  }

  if (stateMic < 2.5) {
    $(".logo-mic").css("display", "none");
    console.log("TRIGGER");
  } else {
    $(".logo-mic").css("display", "block");
  }

  if (stateText < 2.5) {
    $(".logo-text").css("display", "none");
    console.log("TRIGGER");
  } else {
    $(".logo-text").css("display", "block");
  }

  if (stateScreenShot < 2.5) {
    $(".logo-screenshot").css("display", "none");
    console.log("TRIGGER");
  } else {
    $(".logo-screenshot").css("display", "block");
  }
  if (stateDraw < 2.5) {
    $(".logo-crayon").css("display", "none");
    console.log("TRIGGER");
  } else {
    $(".logo-crayon").css("display", "block");
  }
  if (number.length == 1) {
    // if (number == 1) {
    //   $(".logo-mic").css("display", "none");
    //   $(".logo-drop").css("display", "none");
    //   $(".logo-text").css("display", "none");
    //   $(".logo-screenshot").css("display", "none");
    // } else {
    //   $(".logo-mic").css("display", "block");
    //   $(".logo-mic").css("display", "block");
    //   $(".logo-drop").css("display", "block");
    //   $(".logo-text").css("display", "block");
    //   $(".logo-screenshot").css("display", "block");
    // }
  } else if (number.length == 0) {
    $(".saveImage").css("display", "none");
    $("#canvasHTML").css("display", "none");
    $("#image_drop_area").css("display", "none");

    $(".text-area").css("display", "block");
    $(".text-area").css("border", "1px solid black");

    document.getElementById("text-val2").value = "";

    $(".dwn-button").css("display", "none");
    $("#dwn-photo").css("display", "none");
    $(".drop-button").css("display", "none");

    $(".send").css("display", "none");
    $("#clear").css("display", "none");

    $(".logo-mic").css("display", "none");
    $(".logo-crayon").css("display", "none");
    $(".logo-drop").css("display", "none");
    $(".logo-text").css("display", "none");
    $(".logo-screenshot").css("display", "none");
  }
});
