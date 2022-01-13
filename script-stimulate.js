function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// NONE NORMALEMENT

$(".logo-mic").css("display", "block");
$(".logo-crayon").css("display", "block");
$(".logo-drop").css("display", "block");
$(".logo-text").css("display", "block");
$(".logo-screenshot").css("display", "block");

$("#text-val").on("input", function (e) {
  let number = document.getElementById("text-val").value;
  //   //do your work here
  //   console.log(number);
  let stateDrop = randomIntFromInterval(1, 5);
  let stateMic = randomIntFromInterval(1, 5);
  let stateText = randomIntFromInterval(1, 5);
  let stateScreenShot = randomIntFromInterval(1, 5);
  let stateDraw = randomIntFromInterval(1, 5);

  // console.log(stateDrop, stateMic, stateText, stateScreenShot, stateDraw);

  if (stateDrop < 2.5) {
    $(".logo-drop").css("display", "none");
    // console.log("TRIGGER");
  } else {
    $(".logo-drop").css("display", "block");
  }

  if (stateMic < 2.5) {
    $(".logo-mic").css("display", "none");
    // console.log("TRIGGER");
  } else {
    $(".logo-mic").css("display", "block");
  }

  if (stateText < 2.5) {
    $(".logo-text").css("display", "none");
    // console.log("TRIGGER");
  } else {
    $(".logo-text").css("display", "block");
  }

  if (stateScreenShot < 2.5) {
    $(".logo-screenshot").css("display", "none");
    // console.log("TRIGGER");
  } else {
    $(".logo-screenshot").css("display", "block");
  }
  if (stateDraw < 2.5) {
    $(".logo-crayon").css("display", "none");
    // console.log("TRIGGER");
  } else {
    $(".logo-crayon").css("display", "block");
  }
  if (number.length == 1) {
    $(".button-next").css("display", "block");

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
    $(".button-next").css("display", "none");

    $(".saveImage").css("display", "none");
    $("#canvasHTML").css("display", "none");
    $("#image_drop_area").css("display", "none");

    $(".text-area").css("display", "block");
    // $(".text-area").css("border", "1px solid black");

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

$(".button-next").click(function () {
  $(".STEP-1").css("display", "none");
  $(".STEP-2").css("display", "block");
});

$(".button-back").click(function () {
  $(".STEP-1").css("display", "block");
  $(".STEP-2").css("display", "none");

  $(".STEP-3").css("display", "none");
});

$(".send-response").click(function () {
  canvasPhoto = false;
  $(".STEP-3").css("display", "block");
  $(".button-back").css("display", "none");

  $(".send-response").css("display", "none");
});

$(".uno").click(function () {
  canvasPhoto = true;

  $(".button-back").css("display", "block");

  $(".STEP-3").css("display", "none");
  $(".send-response").css("display", "block");
});

$(".logo-crayon").click(function () {
  clearTheCanvas();
});

$(".draw-button").click(function () {
  $(".erase").css("opacity", "1");
  setTimeout(() => {
    $(".erase").css("opacity", "0");
  }, 5000);
});

$(".logo-screenshot").click(function () {
  $(".erase").css("opacity", "0");
});

// $(".logo-screenshot").click(function () {
//   $(".p5Canvas").addClass("fix");
// });
// $(".logo-crayon").click(function () {
//   $(".p5Canvas").removeClass("fix");
// });

let choice_crayon = false;
let choice_screenshot = false;
let choice_mic = false;
let choice_drop = false;
let choice_text = false;
$(".logo-crayon").click(function () {
  choice_crayon = true;

  choice_screenshot = false;
  choice_mic = false;
  choice_drop = false;
  choice_text = false;

  console.log(
    choice_drop,
    choice_screenshot,
    choice_crayon,
    choice_text,
    choice_mic
  );
});
$(".logo-screenshot").click(function () {
  $(".erase").css("opacity", "0");

  choice_screenshot = true;

  choice_crayon = false;
  choice_mic = false;
  choice_drop = false;
  choice_text = false;

  console.log(
    choice_drop,
    choice_screenshot,
    choice_crayon,
    choice_text,
    choice_mic
  );
});
$(".logo-text").click(function () {
  $(".erase").css("opacity", "0");

  choice_text = true;

  choice_screenshot = false;
  choice_crayon = false;
  choice_mic = false;
  choice_drop = false;

  console.log(
    choice_drop,
    choice_screenshot,
    choice_crayon,
    choice_text,
    choice_mic
  );
});

$(".logo-mic").click(function () {
  $(".erase").css("opacity", "0");

  choice_mic = true;

  choice_screenshot = false;
  choice_crayon = false;
  choice_text = false;
  choice_drop = false;

  console.log(
    choice_drop,
    choice_screenshot,
    choice_crayon,
    choice_text,
    choice_mic
  );
});
$(".drop").click(function () {
  $(".erase").css("opacity", "0");

  choice_drop = true;

  choice_screenshot = false;
  choice_crayon = false;
  choice_mic = false;
  choice_text = false;

  console.log(
    choice_drop,
    choice_screenshot,
    choice_crayon,
    choice_text,
    choice_mic
  );
});

$(".duo").click(function () {
  let number = document.getElementById("text-val").value;
  let text = document.getElementById("text-val2").value;

  console.log(number);
  if (choice_text === true) {
    let sum = number + " - " + text;
    let filename = number + ".txt";

    console.log(filename, sum);

    download(filename, sum);
    setTimeout(() => {
      window.location.reload();
    }, 150);
  }

  if (choice_crayon === true) {
    save(number);
    clearTheCanvas();
    console.log(number);
    setTimeout(() => {
      window.location.reload();
    }, 150);
    // document.getElementById("text-val").value = "";
  }
  if (choice_mic === true) {
    save(soundFile, number + ".wav");
    setTimeout(() => {
      window.location.reload();
    }, 150);
    // document.getElementById("text-val").value = "";
  }
  if (choice_screenshot === true) {
    save(number);
    clearTheCanvas();
    console.log(number);
    setTimeout(() => {
      window.location.reload();
    }, 150);
  }

  if (choice_drop === true) {
    console.log("DROP");

    $("#download").click(function () {
      $("#download").attr("download", number);
      $("#download").attr("href", event.target.result);
      setTimeout(() => {
        window.location.reload();
      }, 150);
    });
  }

  // setTimeout(() => {
  //   window.location.reload();
  // }, 200);
});

$("#name").on("input", function (e) {
  if ($(this).val() == "6969") {
    $(".send-pass").css("display", "block");
  } else {
    $(".send-pass").css("display", "none");
  }
});

// $(".send-pass").click(function () {
//   $(".identifier").css("display", "none");
// });
