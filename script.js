$(document).ready(function () {
  // search
  $("#search").keyup(function (e) {
    let keyword = $(this).val();
    if (keyword.length) {
      $.ajax({
        url: "/",
        method: "GET", // First change type to method here
        data: {
          keyword: keyword,
        },
        success: function (response) {
          const data = [];
          for (let index = 0; index < 10; index++) {
            data.push(
              `<a href="https://dev.denijewelry.com/product.php?search=alphabet" class="list-group-item list-group-item-action border-0 px-2 py-1 my-1 bg-light-grey-hover"> Product ` +
                index +
                `</a>`
            );
          }

          $("#category_results").removeClass("d-none");
          $("#category_results").html(data);
        },
      });
    } else {
      $("#category_results").html(`<p>Type a keyword to find products</p>`);
    }
  });
});

// memilih semua elemen dengan kelas listing-gallery-img
const images = document.querySelectorAll(".listing-gallery-img");
// untuk wadah gambar aktif (utama)
const activeImage = document.getElementById("active-img");
// memilih gambar pertama di dalam gambar (kumpulan elemen dengan kelas .listing-gallery-img)
const firstImage = images[0];
// menambahkan kelas 'terpilih' ke gambar pertama dari gambar sehingga pudar (lihat CSS)
// firstImage.classList.add("selected");

// Kami menggunakan 'for loop' JavaScript untuk mengulangi array 'gambar'
images.forEach((image) => {
  // untuk setiap gambar, dengarkan 'klik' di atasnya:
  image.addEventListener("click", function () {
    // hapus kelas 'terpilih' dari setiap gambar dalam array 'gambar'
    images.forEach((image) => image.classList.remove("selected"));
    // tambahkan kelas 'dipilih' ke gambar yang diklik
    image.classList.add("selected");
    // periksa nilai atribut sumber untuk gambar yang diklik
    const name_item = $(this).attr("data-item");
    const Src = $(this).attr("data-src");
    const video = $(this).attr("data-video");
    if (video == "true") {
      // ubah nilai atribut 'src' gambar aktif agar sesuai dengan gambar yang diklik
      $("#video").removeClass("d-none");
      $("#active-img").addClass("d-none");
      $("#video source").attr(
        "src",
        "./img/" + name_item + "/Big/" + name_item + ".mp4"
      );
      $("#video")[0].load();
    } else {
      $("#video").addClass("d-none");
      $("#active-img").removeClass("d-none");
      activeImage.src = "img/" + name_item + "/Big/" + Src + ".jpg";
    }
  });
});
