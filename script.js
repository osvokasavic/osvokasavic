
document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    var currentUrl = window.location.href;

    // Get all the navigation links
    var navLinks = document.querySelectorAll('.navbar a');

    // Loop through each navigation link
    navLinks.forEach(function(link) {
        // Check if the link's href matches the current URL
        if (link.href === currentUrl) {
            // Add the "active" class to the matching link
            link.classList.add('active');
        }
    });
});

