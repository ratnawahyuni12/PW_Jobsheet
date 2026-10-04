audit menyeluruh terhadap kode jobsheet 7-10, dengan bukti before/after

poin 1
kerentanan : SQL Injection
ditemukan di : Semua query di buku/, anggota/, auth/
sebelum : Sejak Jobsheet 8 sudah memakai prepared statement PDO (:parameter)
sesudah (perbaikan) : Diaudit ulang, sudah aman. tidak ada satupun query yang menyisipkan $_POST/$_GET langsung ke string SQL. Diuji input ' OR '1'='1 di form login → tidak berhasil bypass.

poin 2
kerentanan : XSS (Cross-Site Scripting)
ditemukan di : buku/list.php, buku/edit.php, anggota/list.php, anggota/edit.php, includes/header.php (nama petugas)
sebelum : Output judul, pengarang, nama, alamat, no_hp, dan nilai pencarian (q) dicetak langsung tanpa escaping
sesudah (perbaikan) : Dibungkus fungsi e() (includes/helpers.php, htmlspecialchars dengan ENT_QUOTES). Diuji simpan judul buku <script>alert(1)</script> → tampil sebagai teks biasa, bukan dieksekusi.

poin 3
kerentanan : CSRF (Cross-Site Request Forgery)
ditemukan di : Form Tambah/Edit/Hapus Buku & Anggota, Login, Register
sebelum : Form POST tidak memiliki token verifikasi — bisa dipicu dari situs lain
sesudah (perbaikan) : Ditambah includes/csrf.php (csrf_field() + csrf_verify()), token disimpan di $_SESSION['csrf_token'], diverifikasi di setiap proses_*.php dan hapus.php sebelum query dijalankan.

poin 4
kerentanan : Validasi & Sanitasi Input
ditemukan di : proses_tambah.php, proses_edit.php (buku & anggota)
sebelum : Sudah ada validasi tipe (is_numeric) dan wajib-isi sejak Jobsheet 7-9
sesudah (perbaikan) : Diaudit ulang, tetap dipertahankan — ditambah cast eksplisit (int) pada id di form Edit untuk mencegah nilai non-numerik masuk sebagai hidden input.

poin 5
kerentanan : Session Fixation
ditemukan di : auth/proses_login.php
sebelum : Session ID tidak diperbarui setelah login
sesudah (perbaikan) : session_regenerate_id(true) dipanggil tepat setelah password_verify() berhasil.

poin 6
kerentanan : Kebocoran Pesan Error (Information Disclosure)
ditemukan di : includes/koneksi.php
sebelum : Saat koneksi database gagal, pesan error asli PDO (SQLSTATE, host, port, nama database) dicetak langsung ke pengguna lewat die("Koneksi database gagal: " . $e->getMessage())
sesudah (perbaikan) : Diuji dengan mematikan layanan PostgreSQL lalu mengakses aplikasi → terbukti pesan error mentah tampil ke pengguna. Diperbaiki dengan mengganti die() menjadi pesan umum ("Terjadi gangguan pada sistem. Silakan coba lagi nanti.") dan mencatat detail error sebenarnya lewat error_log(). Diuji ulang setelah perbaikan → pesan mentah tidak lagi muncul.