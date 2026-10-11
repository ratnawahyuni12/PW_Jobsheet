## Yang Baru di Jobsheet 13 — Deployment & Dokumentasi (SIMPUS-Mini)

Sesuai README.md jobsheet ini:

- includes/config.php — file baru yang memisahkan kredensial database dari kode sumber, membaca dari environment variable dengan nilai cadangan (fallback) untuk pengembangan lokal.
- includes/koneksi.php diubah untuk membaca konfigurasi dari config.php, bukan lagi menuliskan kredensial langsung di kodenya.
- docs/manual-pengguna.md — panduan penggunaan aplikasi untuk pengguna akhir (bukan dokumentasi kode untuk developer).
- README.md (di root proyek) menjadi snapshot akhir proyek: ERD final, matriks fitur per role, instruksi instalasi lengkap.
- `.env.example` — template daftar environment variable (DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS) tanpa nilai asli, sebagai contoh bagi yang men-deploy aplikasi ini.
- docs/lessons-learned.md — refleksi pengerjaan jobsheet 1-13