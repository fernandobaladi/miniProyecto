var modal = document.getElementById("miModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
window.onload = function(){
  modal.style.display = "block";
  modalImg.src = img.src;
}


var span = document.getElementsByClassName("cerrar")[0];

span.onclick = function() {
  modal.style.display = "none";
}
