// Import our custom CSS
import "../scss/pesananselesai.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

document.addEventListener("DOMContentLoaded", function() {
   var pesanSkrngButton = document.getElementById("pesanSkrng");
   var pesanStatus = document.getElementById("pesanStatus");

   pesanSkrngButton.addEventListener("click", function() {
       // Menampilkan pesan "Pemesanan Berhasil"
       pesanStatus.classList.remove("hidden");
   });
});
