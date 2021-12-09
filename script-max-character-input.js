function check(e, value) {
  //Check Charater
  var unicode = e.charCode ? e.charCode : e.keyCode;
  if (value.indexOf(".") != -1) if (unicode == 46) return false;
  if (unicode != 8)
    if ((unicode < 48 || unicode > 57) && unicode != 46) return false;
}
function checkLength() {
  var fieldLength = document.getElementById("text-val").value.length;
  //Suppose u want 4 number of character
  if (fieldLength <= 2) {
    return true;
  } else {
    var str = document.getElementById("text-val").value;
    str = str.substring(0, str.length - 1);
    document.getElementById("text-val").value = str;
  }
}
