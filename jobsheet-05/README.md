Jobsheet 5 — JavaScript DOM & Event

Konsep inti :
1. JavaScript menambah lapisan perilaku, terpisah dari struktur (HTML) dan tampilan (CSS) — dihubungkan lewat <script src="..."> yang diletakkan di akhir <body> (bab 1).
2. DOM adalah "pohon" objek yang bisa dibaca dan diubah lewat getElementById/querySelector/querySelectorAll, memakai selector CSS yang sama dengan yang sudah kamu kuasai sejak jobsheet-02 (bab 1 §1.5).
3. Event listener adalah pola inti interaktivitas: pilih elemen → .addEventListener(event, fungsi) → tulis reaksinya. Tiga event utama di jobsheet ini: click, keyup, submit (bab 1 §1.6).
4. classList.toggle()/.contains() adalah cara modern mengatur status tampilan lewat class CSS, menggantikan trik CSS murni seperti checkbox hack ketika JavaScript sudah tersedia (bab 4 §4.6).
5. Guard clause (if (!elemen) return;) penting supaya satu file JavaScript yang sama aman dipakai di banyak halaman berbeda, tanpa error di halaman yang tidak punya elemen tertentu (bab 1 §1.7).
6. Validasi client-side bisa dilewati dan bukan pengganti validasi server-side — ini lapisan kenyamanan pengguna, bukan lapisan keamanan (bab 7 §7.8).