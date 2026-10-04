Jobsheet 11 — Keamanan Web Dasar

Konsep Inti yang Perlu Diingat
1. Audit keamanan bisa menghasilkan "sudah aman," bukan cuma perbaikan baru — SQL injection dan validasi input di jobsheet ini dikonfirmasi aman, bukan ditulis ulang dari nol (bab 1 §1.2).
2. Selalu escape data sebelum dicetak ke HTML, terutama data yang pernah melewati input pengguna (form, $_GET) — e() menjadi kebiasaan yang harus otomatis dilakukan setiap kali menulis <?php echo ...; ?> untuk data semacam itu (bab 2).
3. Metode POST saja tidak cukup mencegah CSRF — token per-sesi yang diverifikasi lewat hash_equals() adalah lapisan proteksi tambahan yang benar-benar dibutuhkan (bab 3).
4. Regenerasi ID sesi tepat setelah login menutup celah session fixation — perbaikan kecil di titik yang presisi (bab 4).
5. Laporan audit yang baik selalu menyertakan bukti pengujian konkret (before/after, langkah verifikasi), bukan sekadar klaim "sudah diperbaiki" (bab 5 §5.5).