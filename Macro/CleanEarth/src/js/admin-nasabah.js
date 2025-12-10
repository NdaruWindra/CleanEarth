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
                <button class="edit-button" data-edit-id="${item._id}" style="background-color: #B99B6B;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                <button class="delete-button" data-id="${item._id}" style="background-color: #AA5656;"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Attach event listeners after all rows are rendered
    const editButtons = document.querySelectorAll(".edit-button");
    editButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const itemId = event.target.closest("button").getAttribute("data-edit-id");
            editItem(itemId);
        });
    });

    const deleteButtons = document.querySelectorAll(".delete-button");
    deleteButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const itemId = event.target.closest("button").getAttribute("data-id");
            deleteItem(itemId);
        });
    });
}

function editItem(id) {
   window.location.href = `admin-nasabah-edit.html?id=${id}`;
}


function deleteItem(id) {
    if (!confirm('Apakah Anda yakin ingin menghapus data ini?')) {
        return;
    }
    
    fetch(`http://localhost:3000/nasabah/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete item');
        }
        return response.json();
    })
    .then(deletedItem => {
        data = data.filter(item => item._id !== deletedItem._id);
        renderTable();
        alert('Data berhasil dihapus');
    })
    .catch(error => {
        console.error('Error deleting item:', error);
        alert('Gagal menghapus data');
    });
}

// GET FUNCTION
fetch('http://localhost:3000/nasabah')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json();
    })
    .then(items => {
        data = items;
        renderTable();
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        alert('Gagal memuat data nasabah');
    });

export { editItem, deleteItem };
