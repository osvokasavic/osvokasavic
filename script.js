document.addEventListener("DOMContentLoaded", function() {
    var image = document.getElementById("baner_skola");
    var naslov = document.querySelector(".naslov");
    
    // Check if the image is loaded
    image.onload = function() {
        var imageHeight = image.clientHeight;
        var imageTop = image.offsetTop;
        
        // Adjust the position of the element
        naslov.style.top = (imageTop + imageHeight / 2) + "px";
    };
});
