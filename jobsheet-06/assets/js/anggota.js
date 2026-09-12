function muatDaftarAnggota() {
    return muatDaftarData({
        url: "../data/anggota.json",
        tbodySelector: ".table-responsive table tbody",
        loadingId: "loading-indicator",
        kunci: ["no_anggota", "nama", "alamat", "no_hp"]
    });
}

document.addEventListener("DOMContentLoaded", muatDaftarAnggota);