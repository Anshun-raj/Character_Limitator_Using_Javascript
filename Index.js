var text = document.getElementById("txt");
var lim = document.getElementById("lim");
var limit = 80;
lim.textContent = 0 + "/" + limit;
text.addEventListener("input", function () {
  var txtLen = text.value.length;
  lim.textContent = txtLen + "/" + limit;
  if (txtLen > limit) {
    text.style.border = "3px solid red";
    lim.style.color = "red";
  } else {
    lim.style.color = "3px solid black";
    text.style.borderColor = "black";
  }
});
