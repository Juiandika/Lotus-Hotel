var booking = document.getElementById("bookingpu");
var tutup = document.getElementById("close");
var tampil = document.querySelectorAll(".booking-btn").length;
var room = document.getElementById("room");
var price = document.getElementById("price");

for (var i=0; i<tampil; i++){
  document.querySelectorAll(".booking-btn")[i].addEventListener("click", function(){
    booking.style.display = "block";
    });
}

tutup.onclick = function(){
  booking.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == booking) {
    booking.style.display = "none";
  }
}
