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

// Message-us

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

// Carousel
let slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  let img_item = document.getElementsByClassName("img-item");
  if (n > img_item.length) slideIndex = 1;
  let i = 0;
  while (i < img_item.length) {
    img_item[i].style.display = "none";
    i++;
  }
  img_item[slideIndex - 1].style.display = "block";
  console.log(slideIndex);
}

const slideInterval = setInterval(() => nextSlide(1), 4000);
