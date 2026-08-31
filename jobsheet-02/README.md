# jobsheet-02-

ringkasan singkat jobsheet 2
1. Konsep Dasar CSS
   CSS (Cascading Style Sheets) adalah bahasa untuk mengatur tampilan elemen HTML — warna, ukuran, jarak, tata letak, dan sebagainya. Kalau HTML menentukan struktur/isi halaman (judul, paragraf, tabel, form), CSS menentukan bagaimana rupanya di layar.
2. Yang Berubah di File HTML
   Satu-satunya perubahan di setiap file HTML adalah satu baris baru di dalam <head>.
3. CSS: Reset & Gaya Dasar Body
   Ini bagian paling atas file style.css — fondasi yang memengaruhi seluruh halaman.
4. CSS: Header & Navbar dengan Flexbox
   Bagian ini adalah pengenalan pertama ke Flexbox (sistem tata letak 1 dimensi yang mengatur bagaimana elemen-elemen anak tersusun di dalam sebuah kotak pembungkus) — salah satu sistem tata letak (layout) terpenting di CSS modern.
5. CSS: Layout main & section
   Bagian ini mengatur lebar konten utama halaman dan tampilan setiap <section> menjadi "kartu" (card) putih yang terangkat dari latar belakang abu-abu.
6. CSS: Kartu Statistik dengan CSS Grid
   Bagian ini memperkenalkan CSS Grid, sistem layout lain (selain Flexbox) yang dipakai khusus untuk menyusun 3 kartu statistik di Beranda (Total Buku, Total Anggota, Sedang Dipinjam) menjadi 3 kolom sejajar.
7. CSS: Styling Tabel
   Bagian ini mempercantik tabel <table> di buku/list.html dan anggota/list.html.
8. CSS: Styling Form
   Bagian ini mempercantik form di buku/tambah.html dan anggota/tambah.html.
9. CSS: Footer
   Bagian terakhir dan paling sederhana di style.css.
10. Rangkuman & Latihan Lanjutan
    Konsep Inti yang Perlu Diingat
    (1) CSS terpisah dari HTML dan dihubungkan lewat <link rel="stylesheet"> — satu file CSS bisa dipakai ulang di banyak halaman HTML sekaligus (bab 1, bab 2).
    (2) box-sizing: border-box membuat perhitungan lebar/tinggi elemen jauh lebih mudah diprediksi ketika ada padding/border (bab 3).
    (3) Flexbox untuk tata letak 1 dimensi (navbar), CSS Grid untuk tata letak 2 dimensi berbasis kolom/baris (kartu statistik) — dua alat berbeda untuk kebutuhan berbeda (bab 4, bab 6).
    (4) Pseudo-class (:hover, :nth-child, :nth-of-type, :first-of-type, :last-of-type) memungkinkan styling berdasarkan state (kondisi kursor) atau posisi elemen, tanpa perlu menambah atribut apa pun di HTML.
    (5) Spesifisitas menentukan aturan mana yang menang kalau ada dua aturan CSS yang menyasar elemen yang sama — selector lebih spesifik (lebih banyak "syarat") umumnya menang, kecuali kalau spesifisitasnya sama, di mana urutan penulisan di file yang menentukan (bab 4 §4.7, bab 7 §7.5).
