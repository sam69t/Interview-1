let width = 1840;
let height = 770;
var mic, recorder, soundFile;
var state = 0;

function setup() {
  var canvas = createCanvas(1100, 500);
  canvas.parent("canvasHTML");
  background(255, 255, 255, 0);

  let footer = document.getElementById("footer");
  saveImageBtn = createButton("Envoyer le dessin");
  saveImageBtn.id("dwn-btn");
  clearCanvas = createButton("Effacer");
  clearCanvas.id("clear");
  clearCanvas.mousePressed(clearTheCanvas);

  recbutton = createButton("Enregistrer");
  recbutton.mousePressed(startRec);
  recbutton.class("rec-button");
  recbutton.id("record");

  saveImageBtn.mousePressed(saveAsCanvas);
  saveImageBtn.addClass("saveImage");
  let buttonWrapper = createDiv("");
  buttonWrapper.addClass("button-wrapper");
  clearCanvas.parent(footer);
  buttonWrapper.parent(footer);
  saveImageBtn.parent(footer);
  recbutton.parent(footer);

  console.log("save");

  mic = new p5.AudioIn();

  // prompts user to enable their browser mic

  mic.start();
  mic.start();

  // create a sound recorder
  recorder = new p5.SoundRecorder();

  // connect the mic to the recorder
  recorder.setInput(mic);

  // this sound file will be used to
  // playback & save the recording
  soundFile = new p5.SoundFile();
}

function draw() {
  if (mouseIsPressed) {
    stroke(255);
    fill(0);

    // These calls to triangle were unusual, and seemed to be mostly working by accident
    //strokeWeight(30);
    //triangle(mouseX, mouseY, pmouseX, pmouseY);
    stroke(0);
    strokeWeight(5);
    //triangle(mouseX, mouseY, pmouseX, pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function clearTheCanvas() {
  clear();
  background(255);
}

function saveAsCanvas() {
  let number = document.getElementById("text-val").value;

  if (number.length == 0) {
    alert("Ecrire le numéro de la question");
  } else {
    save(number);
    clearTheCanvas();
    document.getElementById("text-val").value = "";

    console.log("save image");

    // refreshPage();
  }
}

function windowResized() {
  resizeCanvas(width, height);
}

// var mic, recorder, soundFile;
// var state = 0;

// function setup() {
//   createCanvas(600, 600);
//   background(200);
//   // create an audio in
//   thebutton = createButton("click me");
//   thebutton.position(19, 19);
//   thebutton.mousePressed(startRec);
//   thebutton.class("test");
//   mic = new p5.AudioIn();

//   // prompts user to enable their browser mic

//   mic.start();
//   mic.start();

//   // create a sound recorder
//   recorder = new p5.SoundRecorder();

//   // connect the mic to the recorder
//   recorder.setInput(mic);

//   // this sound file will be used to
//   // playback & save the recording
//   soundFile = new p5.SoundFile();

//   text("keyPress to record", 20, 20);
// }

// function keyPressed() {
//   // make sure user enabled the mic
// }

function startRec() {
  let number = document.getElementById("text-val").value;
  console.log(number);
  getAudioContext().resume();
  if (number == "") {
    alert("Ecrire le numéro de la question");
  } else {
    if (state === 0 && mic.enabled) {
      document.getElementById("text-val2").childNodes[0].nodeValue = "";

      document.getElementById("record").childNodes[0].nodeValue = "Stop";
      document
        .getElementById("record")
        .style.setProperty("background-color", "red");

      // record to our p5.SoundFile
      recorder.record(soundFile);
      console.log("STATE  0");
      background(255, 0, 0);
      text("Recording!", 20, 20);
      state++;
    } else if (state === 1) {
      document.getElementById("record").childNodes[0].nodeValue =
        "Terminer, cliquer pour envoyer";
      document
        .getElementById("record")
        .style.setProperty("background-color", "transparent");
      document.getElementById("record").style.setProperty("height", "10vh");
      document.getElementById("record").style.setProperty("color", "black");

      background(0, 255, 0);
      console.log("STATE  1");
      console.log(number);

      // stop recorder and
      // send result to soundFile
      recorder.stop();

      text("Stopped", 20, 20);
      state++;
    } else if (state === 2) {
      console.log("STATE  2");

      soundFile.play(); // play the result!
      save(soundFile, number + ".wav");
      // refreshPage();

      state++;
    }
  }
}
