# Jobsheet 10 — Autentikasi & Manajemen Sesi

Jobsheet 10 mewujudkan sesuatu yang sudah dirancang jauh sebelumnya: ingat wireframe halaman Login dan pembagian aktor Tamu/Petugas yang sudah dibahas di dokumentasi jobsheet-04. Sekarang, 6 jobsheet kemudian, fitur itu benar-benar dibangun.

## Konsep Inti yang Perlu Diingat

1. **Password harus di-hash, tidak pernah disimpan apa adanya.** `password_hash()` dipakai saat menyimpan dan `password_verify()` saat memeriksa. Keduanya tidak pernah membutuhkan atau menghasilkan password asli dalam bentuk yang bisa dibaca kembali (bab 1 §1.2).
2. **Urutan include/require bisa jadi krusial.** `auth.php` wajib dipanggil sebelum ada output HTML apa pun, karena `header('Location: ...')` gagal kalau dipanggil terlambat (bab 4 §4.3).
3. **`session_status()` mencegah konflik `session_start()` ganda**, penting begitu banyak file berbeda perlu memeriksa atau memulai session yang sama (bab 4 §4.4).
4. **Guard clause otorisasi seharusnya tidak bergantung pada database**, supaya proteksi tetap berfungsi meski ada bagian lain dari aplikasi yang gagal (bab 4 §4.6).
5. **Menyembunyikan menu di UI bukan pengganti otorisasi sungguhan.** Keduanya perlu ada bersamaan: UI yang rapi dan guard yang benar-benar memblokir akses langsung (bab 5 §5.4).

## Yang Baru di Jobsheet 10

1. `sql/02_users.sql`: tabel `users` baru (nama, username, password, role).
2. Registrasi (`auth/register.php` + `proses_register.php`): password disimpan dalam bentuk hash lewat `password_hash()`, dengan pengecekan username duplikat.
3. Login (`auth/login.php` + `proses_login.php`): memverifikasi password lewat `password_verify()`.
4. Logout (`auth/logout.php`): mengakhiri sesi lewat `session_destroy()`.
5. `includes/auth.php`: "penjaga gerbang" yang mengalihkan pengunjung yang belum login ke halaman Login, dipasang di semua halaman yang wajib login.
6. Navbar dinamis: menu dan status login/logout berubah tergantung apakah pengunjung sudah login atau belum.