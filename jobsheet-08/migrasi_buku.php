<?php
require __DIR__ . '/includes/koneksi.php';

$dataBuku = json_decode(file_get_contents(__DIR__ . '/data/buku.json'), true);

if (!is_array($dataBuku)) {
    exit("Gagal membaca data/buku.json\n");
}

$cek = $pdo->prepare("SELECT 1 FROM buku WHERE judul = :judul");
$insert = $pdo->prepare(
    "INSERT INTO buku (judul, pengarang, tahun, stok)
     VALUES (:judul, :pengarang, :tahun, :stok)"
);

$masuk = 0;
$lewat = 0;

foreach ($dataBuku as $buku) {
    $cek->execute(['judul' => $buku['judul']]);
    if ($cek->fetchColumn()) {
        $lewat++;
        continue;
    }
    $insert->execute([
        'judul' => $buku['judul'],
        'pengarang' => $buku['pengarang'],
        'tahun' => (int) $buku['tahun'],
        'stok' => (int) $buku['stok'],
    ]);
    $masuk++;
}

echo "Selesai: $masuk buku masuk, $lewat dilewati (sudah ada).\n";