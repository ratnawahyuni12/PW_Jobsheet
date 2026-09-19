Jobsheet 8 — Koneksi PostgreSQL

Konsep Inti yang Perlu Diingat
1. Database menyelesaikan masalah "data hilang" dari jobsheet-07 — data sekarang tersimpan permanen di PostgreSQL, terpisah dari sesi browser mana pun (bab 1 §1.1).
2. Skema SQL mendefinisikan aturan data, bukan cuma nama kolom — NOT NULL, UNIQUE, tipe data yang tepat semuanya membantu menjaga kualitas data langsung dari lapisan database (bab 2).
3. PDO adalah jembatan seragam antara PHP dan berbagai jenis database, dimulai dengan membuat koneksi lewat DSN (bab 4).
4. Prepared statement (prepare()+execute()) adalah cara aman memasukkan data dari pengguna ke query SQL — pakai ini kapan pun ada nilai dari luar (seperti $_POST) yang perlu masuk ke query (bab 5 §5.3).
5. Struktur array hasil fetchAll(PDO::FETCH_ASSOC) konsisten dengan struktur $_SESSION sebelumnya — kode yang menampilkan data tidak perlu berubah sama sekali, hanya sumber datanya yang berpindah (bab 6 §6.4).