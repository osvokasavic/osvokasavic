document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("skola_baner");
    var imageTop = image.offsetTop;
    var naslov = document.querySelector(".naslov");
    naslov.style.top = (imageTop / 2) + imageTop + "px";
});

