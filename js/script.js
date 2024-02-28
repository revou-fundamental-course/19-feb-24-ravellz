// Fungsi nama di homepage
let nama;

do {
  nama = prompt("Masukkan nama anda");

  if (nama === null || nama === "") {
    alert("Mohon untuk masukkan nama terlebih dahulu");
  } else {
    document.getElementById("home-name").innerHTML = nama;
  }
} while (nama === null || nama === "");

let text
document.getElementById("nama").innerHTML = text;