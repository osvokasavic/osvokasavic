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


function toggleNav() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
}

document.querySelectorAll('.overlaydropdown').forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click event from propagating to document
        document.querySelectorAll('.overlaydropdown').forEach(function(d) {
            if (d !== dropdown) {
                d.classList.remove('show');
            }
        });
        dropdown.classList.toggle('show');
    });

    // Close dropdown when close button is clicked
    dropdown.querySelector('.close-btn').addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent dropdown from closing when close button is clicked
        dropdown.classList.remove('show');
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function() {
    document.querySelectorAll('.overlaydropdown').forEach(function(dropdown) {
        dropdown.classList.remove('show');
    });
});
