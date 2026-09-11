Jobsheet 6 — Fetch API & JSON

Titik penting lain dalam perjalanan SIMPUS-Mini: untuk pertama kalinya, data tabel (Daftar Buku & Daftar Anggota) tidak lagi ditulis manual di HTML — diambil secara dinamis dari file JSON memakai JavaScript. Empat perubahan besarnya:

1. Dua file JSON baru (data/buku.json, data/anggota.json) — sumber data, menggantikan sementara API/server sungguhan yang belum ada.
2. Rendering tabel dipindah ke JavaScript — <tbody> di HTML sekarang kosong, diisi dinamis oleh assets/js/buku.js / assets/js/anggota.js lewat fetch + async/await.
3. Loading indicator — teks "Memuat data..." muncul sesaat selagi data sedang diambil.
4. Penanganan error dengan try/catch — kalau pengambilan data gagal, tabel menampilkan pesan error alih-alih halaman kosong/rusak.

Ditambah satu perubahan pendukung: initHapusConfirm di app.js diubah ke pola event delegation, karena tombol Hapus sekarang berada di baris yang baru dibuat setelah halaman selesai dimuat (dibahas di bab 6).