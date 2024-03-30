window.onload = function() {
    // Узети банер
    var banner = document.querySelector('.banner, .banner_f');
    // Узети наслов елемент
    var naslov = document.querySelector('.naslov');
    
    if (banner && naslov) {
        // Function to calculate the position of the title
        function setNaslovPosition() {
            // Get the width and height
            var bannerWidth = banner.offsetWidth;
            var bannerHeight = banner.offsetHeight;

            // Calculate the position ;
            var centerX = banner.offsetLeft + bannerWidth / 2;
            var centerY = banner.offsetTop + bannerHeight / 2 - (bannerHeight / 4);

            // Set the title at the coordinates
            naslov.style.left = centerX + 'px';
            naslov.style.top = centerY + 'px';
        }

        // Call the setNaslovPosition function when the window is resized
        window.addEventListener('resize', setNaslovPosition);
        setNaslovPosition(); // Call it initially
    }
};
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Check if the div with id "scrollToTopBtn" exists
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // If scrollToTopBtn exists, proceed with the scroll functionality
    if (scrollToTopBtn) {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function toggleNav() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
}

// Function to handle dropdown menu visibility
function toggleDropdown(button) {
    var content = button.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}

