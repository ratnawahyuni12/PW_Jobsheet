Jobsheet 12 — Integrasi Modul Peminjaman

Konsep Inti yang Perlu Diingat

1. Tabel relasi (seperti peminjaman) menjembatani dua entitas melalui kunci asing, memungkinkan satu buku meminjamkan banyak anggota dari waktu ke waktu, dan sebaliknya ( bab 1 §1.1-1.2 ).
2. Transaksi memastikan beberapa perintah SQL berhasil/gagal bersama-sama — mencegah data setengah jadi jika salah satu langkah gagal di tengah proses ( bab 3 §3.4 ).
3. SELECT ... FOR UPDATEmencegah kondisi balapan dengan mengunci baris yang sedang diperiksa/diubah sampai transaksi selesai — penting kapan pun ada kemungkinan dua proses mengubah data yang sama secara bersamaan ( bab 3 §3.5 ).
4. JOINmenggabungkan data dari beberapa tabel menjadi satu hasil query, berdasarkan hubungan Foreign key/primary key ( bab 5 ).
5. Defense in depth — mencakup beberapa pertahanan sekaligus (pemeriksaan metode HTTP dan token CSRF dan guard login) lebih aman daripada mengandalkan satu lapisan saja ( bab 4 §4.3 ).