import "../scss/admin-nasabah-style.scss";

let data = [];

function renderTable() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";
    data.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.nama}</td>
            <td>${item.bank}</td>
            <td>Rp. ${item.nominal}</td>
            <td>${item.no_telepon}</td>
            <td>${item.alamat}</td>
            <td  style="text-align: center;">
                <button class="edit-button" edit-id="${item._id}" style="background-color: #B99B6B;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                <button class="delete-button" data-id="${item._id}" style="background-color: #AA5656;"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tableBody.appendChild(row);

         const editButtons = document.querySelectorAll(".edit-button");
         editButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                  const itemId = event.target.getAttribute("edit-id");
                  editItem(itemId);
            });
         });

         const deleteButtons = document.querySelectorAll(".delete-button");
         deleteButtons.forEach(button => {
            button.addEventListener("click", (event) => {
                  const itemId = event.target.getAttribute("data-id");
                  deleteItem(itemId);
            });
         });
    });
}

function editItem(id) {
   window.location.href = `admin-nasabah-edit.html?id=${id}`;
}


function deleteItem(id) {
    fetch(`https://precious-battledress-ray.cyclic.app/nasabah/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(deletedItem => {
        data = data.filter(item => item._id !== deletedItem._id);
        renderTable();
    });
}

// GET FUNCTION
fetch('https://precious-battledress-ray.cyclic.app/nasabah')
    .then(response => response.json())
    .then(items => {
        data = items;
        renderTable();
    });

export { editItem, deleteItem };
