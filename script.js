window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    // Check if the div with id "scrollToTopBtn" exists
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // If scrollToTopBtn exists, proceed with the scroll functionality
    if (scrollToTopBtn) {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            scrollToTopBtn.style.opacity = "1";
            scrollToTopBtn.style.pointerEvents = "auto";
        } else {
            scrollToTopBtn.style.opacity = "0";
            scrollToTopBtn.style.pointerEvents = "none";
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


function toggleNav() {
    var overlay = document.getElementById('overlay');
    var box = document.getElementById('box')
    // Toggle the display style of the overlay
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
    
    // Check if overlay is displayed
    if (overlay.style.display === "block") {
        // If overlay is displayed, disable scrolling
        document.body.style.overflow = 'hidden';
        box.style.display = "block";
    } else {
        // If overlay is not displayed, enable scrolling
        document.body.style.overflow = 'auto';
        box.style.display = "none";
    }
}


function closeDropdown(event, dropdownId) {
    event.stopPropagation(); // Prevent event from bubbling up
    var dropdown = document.getElementById("dropdown" + dropdownId);
    dropdown.style.display = "none";
}


function toggleDropdown(dropdownId) {
    // Hide all dropdowns
    var allDropdowns = document.querySelectorAll(".overlaydropdown-content");
    allDropdowns.forEach(function(dropdown) {
        dropdown.style.display = "none";
    });

    // Display the clicked dropdown
    var dropdown = document.getElementById("dropdown" + dropdownId);
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}
