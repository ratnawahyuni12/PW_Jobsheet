Jobsheet 9 — CRUD Penuh

Konsep Inti yang Perlu Diingat
1. UPDATE/DELETE tanpa WHERE sangat berbahaya — selalu memastikan klausa WHERE id = :id ada sebelum menjalankan kedua perintah ini, kalau tidak seluruh tabel bisa berubah/terhapus sekaligus (bab 2 §2.6, bab 3 §3.4).
2. GET untuk operasi aman, POST untuk operasi yang mengubah data — terutama untuk operasi destruktif seperti Delete, yang sengaja diblokir kalau diakses lewat GET (bab 3 §3.2-3.3).
3. Event submit bisa dibatalkan sebelum data terkirim, beda dari menunggu click lalu bereaksi setelahnya — penting begitu form benar-benar terhubung ke aksi sungguhan di server (bab 4).
4. Pagination (LIMIT/OFFSET) mencegah satu halaman menampilkan seluruh data sekaligus, penting untuk performa begitu jumlah data bertambah banyak (bab 5 §5.2-5.4).
5. Pencarian sisi server (ILIKE) berbeda tujuannya dari filter sisi klien yang sudah kamu bangun sejak jobsheet-05 — server bisa mencari lintas semua halaman/data, klien hanya menyaring apa yang sedang tampil (bab 5 §5.6).

Perubahan dari Jobsheet 8
1. Tambah buku/edit.php + buku/proses_edit.php, anggota/edit.php + anggota/proses_edit.php — melengkapi Create+Read (Jobsheet 8) dengan Update.
2. Tambah buku/hapus.php, anggota/hapus.php — Delete, hanya menerima POST (bukan GET) agar tidak terpicu tidak sengaja lewat link/crawler.
3. Tombol Hapus di list.php sekarang berupa <form class="form-hapus" method="post"> sungguhan (bukan lagi tombol <button> polos) — app.js (initHapusConfirm) diubah untuk konfirmasi di event submit (bisa preventDefault()), bukan click.
4. buku/list.php & anggota/list.php: tambah pagination (LIMIT/OFFSET, 5 baris/halaman) dan pencarian server-side (WHERE judul/nama ILIKE :kw) — form GET, menggantikan kolom cari client-side murni dari Jobsheet 5/6.

Cara menjalankan
Opsi 1 — PHP built-in server:
  - php -S localhost:8000
  - Buka http://localhost:8000/index.php, uji siklus lengkap: tambah → tampil → ubah (Edit) → tampil berubah → hapus → hilang dari list.
Opsi 2 — Laragon (Apache): lewat virtual host langsung ke folder jobsheet-09/ (mis. http://jobsheet09.test/), atau bersarang di bawah domain proyek (mis. http://dp2026.test/kode-praktikum/jobsheet-09/) — path CSS/JS/link sudah relatif otomatis (lihat includes/header.php), jadi keduanya jalan.

Catatan
1. Kolom pencarian (#search-input) di halaman ini melayani dua peran: filter instan client-side (JS, dari Jobsheet 5) untuk baris yang sedang tampil di halaman saat ini, dan pencarian penuh lintas-halaman lewat tombol "Cari" (server-side).
2. Nilai q dari pencarian belum di-escape saat ditampilkan kembali ke value input — ini sengaja belum diperbaiki di sini; audit dan perbaikan XSS dilakukan menyeluruh di Jobsheet 11.