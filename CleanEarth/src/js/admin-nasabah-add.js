import "../scss/admin-nasabah-style.scss";

document.getElementById('add-form').addEventListener('submit', async function (e) {
   e.preventDefault();

   const nama = document.getElementById('nama').value;
   const bank = document.getElementById('bank').value;
   const nominal = parseFloat(document.getElementById('nominal').value);
   const telepon = document.getElementById('telepon').value;
   const alamat = document.getElementById('alamat').value;

   // Validasi data jika diperlukan

   const data = {
       nama,
       bank,
       nominal,
       no_telepon: telepon,
       alamat
   };

   try {
       const response = await fetch('https://precious-battledress-ray.cyclic.app/nasabah', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(data),
       });

       if (response.ok) {
           // Data berhasil ditambahkan
           alert('Data berhasil ditambahkan');
           window.location.href = 'admin-nasabah.html';
       } else {
           const errorMessage = await response.text();
           alert(`Gagal menambahkan data: ${errorMessage}`);
       }
   } catch (error) {
       console.error('Gagal menambahkan data:', error);
       alert('Gagal menambahkan data. Silakan coba lagi.');
   }
});
