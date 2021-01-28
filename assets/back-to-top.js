//Memanipulasi objek Button

backToTop = document.getElementById("topButton");

//Ketika website di scroll turun 25px dari bagian atas, tampilkan button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 25 ||
    document.documentElement.scrollTop > 25) {
        backToTop.style.display ="block";
    }   else {
        backToTop.style.display = "none";
    }
}

//Ketika tombol di klik, scroll website ke bagian teratas

function topFunction() {
    document.documentElement.scrollTop = 0;
}