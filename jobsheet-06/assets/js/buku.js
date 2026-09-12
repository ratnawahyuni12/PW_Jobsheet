function muatDaftarBuku() {
    return muatDaftarData({
        url: "../data/buku.json",
        tbodySelector: ".table-responsive table tbody",
        loadingId: "loading-indicator",
        kunci: ["judul", "pengarang", "tahun", "kategori", "stok"]
    });
}

document.addEventListener("DOMContentLoaded", function () {
    muatDaftarBuku();

    const btnMuatUlang = document.getElementById("btn-muat-ulang");
    if (btnMuatUlang) {
        btnMuatUlang.addEventListener("click", muatDaftarBuku);
    }
});