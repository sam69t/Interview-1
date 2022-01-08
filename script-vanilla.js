function refreshPage() {
  window.location.reload();
}

function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
document.getElementById("dwn-btn").addEventListener(
  "click",
  function () {
    // Generate download of hello.txt file with some content
    var number = document.getElementById("text-val").value;
    var text = document.getElementById("text-val2").value;
    var sum = number + " - " + text;
    var filename = number + ".txt";

    if (number.length == 0) {
      alert("Ecrire le numéro de la question");
    } else if (text.length == 0) {
      alert("Ecrire la réponse à la question");
    } else {
      download(filename, sum);
      document.getElementById("text-val").value = "";
      document.getElementById("text-val2").value = "Votre réponse";
      setTimeout(() => {
        window.location.reload();
      }, 150);
    }

    console.log(text.length);
  },
  false
);
// var url1 = "http://localhost:5501/JC2022";

// if (url.search("JC2022") > -1) {
//   alert("lol");
//   window.location.href = "http://127.0.0.1:5501/identifier.html";

//   // do your work
// }

var string = location.href;
var convertedString = string.toLowerCase();

// if (convertedString.indexOf("JC2022") != -1) {
//   alert("url has franky");
// } else {
//   alert("url has no franky");
// }

if (window.location.hash) {
  window.location.hash = "JC2022"; //set hash

  $(".waiting-room").css("display", "none");

  $(".identifier").css("display", "flex");

  // Fragment exists
} else {
  $(".identifier").css("display", "none");

  // Fragment doesn't exist
}
