let width = 1840;
let height = 770;
var mic, recorder, soundFile;
var state = 0;
let record = document.getElementById("record");

let functionOnce = false;

function setup() {
  var canvas = createCanvas(1250, 600);
  canvas.parent("canvasHTML");
  background(255, 255, 255, 0);

  video = createCapture(VIDEO);
  video.position(0, 0);
  video.size(700, 0);

  let footer = document.getElementById("footer");

  saveImageBtn = createButton("Envoyer le dessin");
  saveImageBtn.id("dwn-btn");
  clearCanvas = createButton("Effacer");
  clearCanvas.id("clear");
  clearCanvas.mousePressed(clearTheCanvas);

  savePhotoUne = createButton("Envoyer la photo");
  savePhotoUne.id("dwn-photo");

  recbutton = createButton("Enregistrer");
  recbutton.mousePressed(startRec);
  recbutton.class("rec-button");
  recbutton.id("recording");

  savePhotoUne.mousePressed(saveAsCanvas);
  saveImageBtn.mousePressed(saveAsCanvas);
  saveImageBtn.addClass("saveImage");
  let buttonWrapper = createDiv("");
  buttonWrapper.addClass("button-wrapper");

  savePhotoUne.parent(footer);
  clearCanvas.parent(footer);
  buttonWrapper.parent(footer);
  saveImageBtn.parent(footer);
  recbutton.parent(record);

  video.hide();

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
  if (canvasPhoto == true) {
    isCanvasPhoto();
  } else {
  }

  if (canvasDrawing == true) {
    isCanvasDrawing();
  }
}

function clearTheCanvas() {
  clear();
  background(255);
}

function clearDrawing() {
  clear();
  background(255);
  console.log("shot once");

  functionOnce = true;
  console.log(functionOnce);
}

function isCanvasPhoto() {
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 800, 50);
  pop();

  console.log(functionOnce);
}
function isCanvasDrawing() {
  if (!functionOnce) clearDrawing();

  if (mouseIsPressed) {
    stroke(0);
    // stroke(255);
    strokeWeight(15);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function saveAsCanvas() {
  let number = document.getElementById("text-val").value;

  if (number.length == 0) {
    alert("Ecrire le numéro de la question");
  } else {
    save(number);
    clearTheCanvas();
    document.getElementById("text-val").value = "";

    // refreshPage();
    setTimeout(() => {
      window.location.reload();
    }, 150);
  }

  console.log("save image");
}

function windowResized() {
  // resizeCanvas(width, height);
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

      document.getElementById("recording").childNodes[0].nodeValue = "Stop";
      document
        .getElementById("recording")
        .style.setProperty("background-color", "red");

      // record to our p5.SoundFile
      recorder.record(soundFile);
      console.log("STATE  0");
      state++;
    } else if (state === 1) {
      document.getElementById("recording").childNodes[0].nodeValue =
        "Terminer, cliquer pour envoyer";
      document
        .getElementById("recording")
        .style.setProperty("background-color", "transparent");
      document.getElementById("recording").style.setProperty("height", "10vh");
      document.getElementById("recording").style.setProperty("color", "black");

      // background(0, 255, 0);
      console.log("STATE  1");
      console.log(number);

      // stop recorder and
      // send result to soundFile
      recorder.stop();

      // text("Stopped", 20, 20);
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
