function shift(direction) {
  var shifted = parseInt(document.querySelector(".container").style.marginLeft);
  if ( (direction > 0 && shifted > -400) || (direction < 0 && shifted < 0) ) {
    document.querySelector(".container").style.marginLeft = (shifted - 200 * direction) + "px";
  }
}
