// Fungsi nama di homepage
// let nama_homepage;

// do {
//   nama_homepage = prompt("Masukkan nama anda");

//   if (nama_homepage === null || nama_homepage === "") {
//     alert("Mohon untuk masukkan nama terlebih dahulu");
//   } else {
//     document.getElementById("home-name").innerHTML = nama_homepage;
//   }
// } while (nama_homepage === null || nama_homepage === "");

// form validation

// let date_input = Date();
// document.getElementById("submit-button").addEventListener("click", date);
// function date() {
//   document.getElementById("date_input").innerHTML = date_input;
// }

// let nama_input = document.getElementById("nama_input");
// document.getElementById("submit-button").addEventListener("click", nama);
// function nama() {
//   document.getElementById("nama-user").innerHTML = nama_input.value;
// }

// let tgl_lahir_input = document.getElementById("tgl_lahir_input");
// document.getElementById("submit-button").addEventListener("click", tgl_lahir);
// function tgl_lahir() {
//   document.getElementById("tgl_lahir_user").innerHTML = tgl_lahir_input.value;
// }

// let laki_laki_input = document.getElementById("laki_laki_input");
// let perempuan_input = document.getElementById("perempuan_input");
// document
//   .getElementById("submit-button")
//   .addEventListener("click", jenis_kelamin);
// function jenis_kelamin() {
//   if (laki_laki_input.checked == true) {
//     document.getElementById("jenis_kelamin_user").innerHTML =
//       laki_laki_input.value;
//   } else {
//     document.getElementById("jenis_kelamin_user").innerHTML =
//       perempuan_input.value;
//   }
// }

// let text_pesan = document.getElementById("pesan_input");
// document.getElementById("submit-button").addEventListener("click", pesan);
// function pesan() {
//   document.getElementById("pesan-user").innerHTML = text_pesan.value;
// }

// Tutup

document.getElementById("submit-button").addEventListener("click", submitForm);

function submitForm() {
  let date = Date();
  let nama_user = document.forms["message-us-form"]["nama_input"];
  let tgl_lahir = document.forms["message-us-form"]["tgl_lahir_input"];
  let jenis_kelamin = document.forms["message-us-form"]["jenis_kelamin_input"];
  let pesan = document.forms["message-us-form"]["pesan_input"];
  //   console.log(nama.value);
  if (
    nama_user.value == "" ||
    tgl_lahir.value == "" ||
    jenis_kelamin.value == "" ||
    pesan.value == ""
  ) {
    alert("Mohon lengkapi data diri");
  } else {
    document.getElementById("date_user").innerHTML = date;
    document.getElementById("nama_user").innerHTML = nama_user.value;
    document.getElementById("tgl_lahir_user").innerHTML = tgl_lahir.value;
    document.getElementById("jenis_kelamin_user").innerHTML =
      jenis_kelamin.value;
    document.getElementById("pesan-user").innerHTML = pesan.value;
  }
  return false;
}
