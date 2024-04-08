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
            var centerY = banner.offsetTop + bannerHeight / 2 - (bannerHeight / 6);

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
    // Smooth scroll to the top of the page
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    scrollToTop();
}

document.addEventListener("DOMContentLoaded", function(event) {
    
// Smooth scroll function
function smoothScroll(targetId) {
    // Extract the ID from the target URL
    const idIndex = targetId.lastIndexOf('#');
    const id = idIndex !== -1 ? targetId.substring(idIndex + 1) : targetId;

    // Find the target element
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


    // Add event listeners to specific links
    const links = document.querySelectorAll('.galerijanav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            smoothScroll(targetId);
        });
    });
});
console.log('loaded')


function toggleNav() {
    var overlay = document.getElementById('overlay');
    var rect = overlay.getBoundingClientRect();
    var clickX = event.clientX - rect.left;
    var clickY = event.clientY - rect.top;

    // Check if clicked outside the specified range
    if (clickX < -50 || clickX > rect.width + 50 ||
        clickY < -200 || clickY > rect.height + 200) {
        // Close the menu if clicked outside the range
        overlay.style.display = "none";
        console.log('Ha')
    }
}


