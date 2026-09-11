// ===== Hamburger menu (JS-driven, menggantikan checkbox hack) =====
function initNavToggle() {
    const toggleBtn = document.getElementById("nav-toggle-btn");
    const nav = document.querySelector("header nav");
    if (!toggleBtn || !nav) return;

    toggleBtn.addEventListener("click", function () {
        nav.classList.toggle("nav-open");
    });
}

// ===== Konfirmasi hapus (front-end only, belum ke server) =====
function initHapusConfirm() {
    document.querySelectorAll(".btn-hapus").forEach(function (btn) {
        btn.addEventListener("click", function () {
            const row = btn.closest("tr");
            const nama = row ? row.querySelector("td")?.textContent : "data ini";
            const yakin = confirm("Yakin ingin menghapus \"" + nama + "\"?");
            if (yakin && row) {
                const table = row.closest("table");
                row.remove();
                if (table) updateCounter(table);
            }
        });
    });
}

// ===== Filter/pencarian tabel real-time =====
function initTableFilter() {
    const input = document.getElementById("search-input");
    const table = document.querySelector(".table-responsive table");
    if (!input || !table) return;

    updateCounter(table); // tampilkan counter awal

    input.addEventListener("keyup", function () {
        const keyword = input.value.toLowerCase();
        const rows = table.querySelectorAll("tbody tr");
        rows.forEach(function (row) {
            const kolomPertama = row.querySelector("td");
            const teks = kolomPertama ? kolomPertama.textContent.toLowerCase() : "";
            row.style.display = teks.includes(keyword) ? "" : "none";
        });
        updateCounter(table);
    });
}

// ===== Validasi form (client-side) =====
function tampilkanError(input, pesan) {
    hapusError(input);
    const span = document.createElement("span");
    span.className = "error";
    span.textContent = pesan;
    input.insertAdjacentElement("afterend", span);
}

// ===== Counter baris tabel =====
function updateCounter(table) {
    const counterEl = document.getElementById("counter-info");
    if (!counterEl) return;
    const semuaBaris = table.querySelectorAll("tbody tr");
    const totalBaris = semuaBaris.length;
    let tampil = 0;
    semuaBaris.forEach(function (row) {
        if (row.style.display !== "none") tampil++;
    });
    counterEl.textContent = "Menampilkan " + tampil + " dari " + totalBaris + " data";
}

function hapusError(input) {
    const next = input.nextElementSibling;
    if (next && next.classList.contains("error")) {
        next.remove();
    }
}

function initValidasiForm() {
    const form = document.getElementById("form-tambah");
    if (!form) return;

    const daftarValidasi = [
        {
            selector: "[name='judul'], [name='nama']",
            cekValid: (nilai) => nilai.trim() !== "",
            pesan: "Field ini wajib diisi."
        },
        {
            selector: "[name='pengarang']",
            cekValid: (nilai) => nilai.trim() !== "",
            pesan: "Pengarang wajib diisi."
        },
        {
            selector: "[name='tahun']",
            cekValid: (nilai) => {
                const angka = parseInt(nilai, 10);
                return !isNaN(angka) && angka >= 1900 && angka <= 2026;
            },
            pesan: "Tahun harus di antara 1900-2026."
        },
        {
            selector: "[name='stok']",
            cekValid: (nilai) => {
                const angka = parseInt(nilai, 10);
                return !isNaN(angka) && angka >= 0;
            },
            pesan: "Stok tidak boleh negatif."
        },
        {
            selector: "[name='isbn']",
            cekValid: (nilai) => nilai.trim() === "" || /^[0-9-]+$/.test(nilai.trim()),
            pesan: "ISBN hanya boleh berisi angka dan tanda hubung."
        }
    ];

    form.addEventListener("submit", function (e) {
        let valid = true;

        daftarValidasi.forEach(function (aturan) {
            const input = form.querySelector(aturan.selector);
            if (!input) return;

            if (!aturan.cekValid(input.value)) {
                tampilkanError(input, aturan.pesan);
                valid = false;
            } else {
                hapusError(input);
            }
        });

        if (!valid) {
            e.preventDefault();
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initHapusConfirm();
    initTableFilter();
    initValidasiForm();
});