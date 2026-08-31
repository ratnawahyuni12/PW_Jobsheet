# jobsheet-01-

ringkasan singkat jobsheet 1
1. konsep dasar yang dipakai di jobsheet 1
   penggunaan tag (biasanya berpasangan: tag pembuka dan tag penutup) dan elemen (isi di antara tag), struktur wajib setiap halaman HTML dengan pola yang sama (<!DOCTYPE html>, <html lang="id">, <head>, <meta charset="UTF-8">, <title>, <body>). Ini penting dipahami karena kesalahan path relatif adalah salah satu penyebab paling umum tautan "tidak jalan" saat belajar HTML.
2. penjelasan index.html (halaman beranda)
   merupakan halaman pertama yang dibuka ketika aplikasi dijalankan (karena namanya index.html, nama baku yang otomatis dicari browser/server sebagai halaman utama sebuah folder). index.html menunjukkan pola dasar yang diulang di semua halaman lain di jobsheet 1: header (judul + nav) → main (isi khusus halaman) → footer (copyright).
3. penjelasan buku/list.html (daftar buku)
   menampilkan tabel berisi daftar buku perpustakaan (data contoh/statis, 5 baris).
4. penjelasan buku/tambah.html (form tambah buku)
   menampilkan form (formulir isian) untuk menambah data buku baru. Ini adalah file pertama di jobsheet 1 yang memperkenalkan elemen <form> dan berbagai jenis <input>. Urutan penting yang perlu diingat:
   (1) <form> = wadah pengiriman data.
   (2) <label for="..."> dipasangkan dengan <input id="..."> yang sama.
   (3) name="..." menentukan nama data yang dikirim ke server.
   (4) Atribut HTML5 (required, min, max) memberi validasi dasar tanpa JavaScript.
   (5) <select>/<option> dipakai kalau pilihan pengguna terbatas pada beberapa opsi tetap (bukan teks bebas).
5. penjelasan anggota/list.html (daftar anggota)
   menampilkan tabel berisi daftar anggota perpustakaan.
6. penjelasan anggota/tambah.html (form tambah anggota)
   polanya dibuat mirip buku/tambah.html, tapi untuk data anggota.
7. rangkuman dan latihan lanjutan
   secara umum, jobsheet 1 mengajarkan 3 pola HTML yang akan terus dipakai berulang-ulang di seluruh aplikasi:
   (1) kerangka halaman (header + nav + main + footer) — sama di semua 5 halaman.
   (2) tabel data (table/thead/tbody/tr/th/td) — dipakai di kedua halaman "list".
   (3) form isian (form/label/input/select/button) — dipakai di kedua halaman "tambah".


6.5 Latihan Reflektif
Sebagai latihan mandiri, coba bandingkan sendiri form ini dengan form buku dan jawab pertanyaan berikut untuk menguji pemahaman:
1.	Kenapa field "Alamat" dan "No. HP" tidak diberi required, sedangkan "Nama" dan "No. Anggota" diberi? 
Jawab : karena Nama dan No. Anggota dianggap data wajib/identitas utama anggota (No. Anggota biasanya jadi primary key), sedangkan Alamat dan No. HP dianggap data pelengkap yang boleh diisi belakangan.
2.	Apa yang akan terjadi (di browser) kalau kamu klik tombol "Simpan" tanpa mengisi field "Nama"? Coba buka filenya di browser dan praktikkan. 
Jawab : browser akan menahan submit dan menampilkan pesan validasi bawaan (semacam "Please fill out this field"), fokus otomatis pindah ke field Nama. Form tidak akan terkirim sampai field itu diisi.
3.	Form ini juga belum punya action pada tag <form>-nya — apa dampaknya saat tombol "Simpan" ditekan?
Jawab : saat disubmit, browser akan reload/kirim form ke URL halaman itu sendiri (default-nya submit ke current page), jadi datanya nggak dikirim ke server/halaman pemrosesan manapun — cuma reload halaman dengan data sebagai query string (karena method default-nya GET).
