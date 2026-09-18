Jobsheet 7 — PHP Dasar & Form Handling

Konsep Inti yang Perlu Diingat
1. Server-side berjalan sebelum halaman sampai ke browser — kode PHP tidak pernah terlihat pengguna, hanya hasilnya (bab 1 §1.1).
2. include menghapus duplikasi kode antar halaman — sekali ubah header.php, semua halaman yang meng-include-nya ikut berubah (bab 2).
3. $_SESSION menjembatani data antar permintaan HTTP yang terpisah — tapi sifatnya sementara, hilang saat sesi browser berakhir (bab 3).
4. Validasi server-side tidak bisa dilewati pengguna, berbeda dari validasi HTML/JavaScript yang keduanya berjalan di browser dan bisa dinonaktifkan (bab 4 §4.6).
5. Redirect setelah POST (header('Location: ...') + exit) adalah pola umum untuk mencegah data ter-submit ulang kalau pengguna me-refresh halaman hasil, dan untuk langsung mengarahkan ke halaman yang relevan (form kalau error, daftar kalau sukses) (bab 4 §4.4-4.5).
6. Flash message adalah pola "sekali tampil" — disimpan lalu segera dihapus (unset) setelah dibaca, supaya tidak muncul berulang di kunjungan berikutnya (bab 5 §5.2).