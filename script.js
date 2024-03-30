window.onload = function() {
    // Function to select the appropriate banner
    function selectBanner() {
        // Check screen width
        var screenWidth = window.innerWidth;

        // Select banner class based on screen width
        var banner;
        if (screenWidth < 601) {
            banner = document.querySelector('.banner_f');
        } else {
            banner = document.querySelector('.banner');
        }

        return banner;
    }

    // Function to set the position of the title
    function setNaslovPosition() {
        var banner = selectBanner();
        var naslov = document.querySelector('.naslov');

        if (banner && naslov) {
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
    }

    // Call setNaslovPosition function when the window is resized or orientation changes
    window.addEventListener('resize', setNaslovPosition);
    window.addEventListener('orientationchange', setNaslovPosition);

    // Call setNaslovPosition initially
    setNaslovPosition();
};


// Function to smoothly scroll to the top of the page
function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

// Show or hide the scroll-to-top button based on scroll position
window.addEventListener('scroll', function () {
    var scrollButton = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.visibility = "visible";
    } else {
        scrollButton.style.visibility = "hidden";
    }
});


function toggleNav() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
}

// Function to handle dropdown menu visibility
function toggleDropdown(button) {
    var content = button.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}

