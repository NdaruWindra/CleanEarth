import "../scss/admin-nasabah-style.scss";

function fetchItemById(id) {
  fetch(`http://localhost:3000/nasabah/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch item");
      }
      return response.json();
    })
    .then((item) => {
      document.getElementById("itemId").value = item._id;
      document.getElementById("nama").value = item.nama;
      document.getElementById("bank").value = item.bank;
      document.getElementById("nominal").value = item.nominal;
      document.getElementById("telepon").value = item.no_telepon;
      document.getElementById("alamat").value = item.alamat;
    })
    .catch((error) => {
      console.error("Error fetching item:", error);
      alert("Gagal memuat data item");
    });
}

function updateItem(item) {
  const itemId = document.getElementById("itemId").value;

  fetch(`http://localhost:3000/nasabah/${itemId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to update item");
      }
      return response.json();
    })
    .then((updatedItem) => {
      alert("Data berhasil diperbarui");
      window.location.href = "admin-nasabah.html";
    })
    .catch((error) => {
      console.error("Error updating item:", error);
      alert("Gagal memperbarui data. Silakan coba lagi.");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (id) {
    // Fetch and populate the edit form with data based on the ID
    fetchItemById(id);
  }

  // Handle the form submission to update the item
  const editForm = document.getElementById("edit-form");
  editForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const editedItem = {
      nama: document.getElementById("nama").value,
      bank: document.getElementById("bank").value,
      nominal: parseFloat(document.getElementById("nominal").value),
      no_telepon: document.getElementById("telepon").value,
      alamat: document.getElementById("alamat").value,
    };

    updateItem(editedItem);
  });
});
