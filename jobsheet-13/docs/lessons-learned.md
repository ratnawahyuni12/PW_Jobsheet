# Lessons Learned — SIMPUS-Mini (Jobsheet 1-13)

## Konsep yang paling menantang
Alur peminjaman buku, terutama bagian kodenya. Aku sudah paham alurnya: petugas memilih anggota dan buku, stok buku berkurang saat dipinjam, lalu bertambah lagi saat dikembalikan. Tapi untuk penulisan kodenya, aku masih perlu belajar lebih banyak.

## Kenapa menantang
Kode peminjaman menggabungkan banyak hal sekaligus: transaksi database (beginTransaction, commit, rollBack), kunci baris (FOR UPDATE), query JOIN beberapa tabel, dan validasi keterlambatan. Karena semuanya ada dalam satu alur, aku masih sulit memahami bagian mana yang mengerjakan apa.

## Bagaimana aku memahami alurnya
Aku paham alur peminjaman dengan mencoba langsung di aplikasi: meminjam buku, lalu melihat stoknya berkurang, kemudian mengembalikannya dan melihat stoknya bertambah lagi. Aku juga mengecek isi tabel di DBeaver untuk melihat data peminjaman dan tanggalnya berubah. Selain itu, aku membaca penjelasan di jobsheet dan berdiskusi untuk memahami bagian yang membingungkan.

## Yang akan kulakukan berbeda
Kalau membuat proyek ini dari awal lagi, aku akan mempelajari kode transaksi peminjaman lebih dulu sebelum mengerjakan fitur lain, supaya aku lebih paham bagian yang paling kompleks. Aku juga akan mencatat dan mengambil screenshot hasil tiap jobsheet saat mengerjakannya, bukan di akhir. Terakhir, aku akan mulai mengerjakan lebih awal supaya tidak terburu-buru.

## Yang ingin kujelaskan saat UAS
Aku ingin bisa menjelaskan dengan baik cara konfigurasi dipisah dari kode: config.php membaca environment variable, sehingga aplikasi yang sama bisa memakai database berbeda tanpa mengubah kode. Aku juga ingin menjelaskan struktur database, yaitu hubungan antara tabel buku, anggota, users, dan peminjaman. Satu hal lagi yang akan kupelajari sebelum UAS adalah kode transaksi peminjaman, supaya aku bisa menjelaskan alasan stok dan pencatatan peminjaman harus diproses bersamaan.