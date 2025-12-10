// Import our custom CSS
import "../scss/keranjang.scss";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// Mendapatkan elemen tombol plus, p, dan tombol minus
const plusButton = document.getElementById("plusBtn");
const minusButton = document.getElementById("minusBtn");
const counterElement = document.getElementById("counter");

// Check if elements exist before using them
if (plusButton && minusButton && counterElement) {
  // Inisialisasi nilai awal counter
  let counterValue = 1;

  // Mengubah isi elemen <p> saat tombol plus ditekan
  plusButton.addEventListener("click", () => {
    counterValue++;
    counterElement.textContent = counterValue;
  });

  // Mengubah isi elemen <p> saat tombol minus ditekan
  minusButton.addEventListener("click", () => {
    if (counterValue > 1) {
      counterValue--;
      counterElement.textContent = counterValue;
    }
  });
} else {
  console.warn("Cart buttons or counter element not found");
}
