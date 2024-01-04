window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var header = document.querySelector("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("fixed-header");
    } else {
        header.classList.remove("fixed-header");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});
var slideIndex = 1;
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
    var displayedImage = slides[slideIndex - 1].querySelector("img");
    displayedImage.style.width = "100%"; 
    displayedImage.style.height = "400px"; 
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
showSlides(slideIndex);