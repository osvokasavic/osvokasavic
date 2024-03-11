// script.js

// Get the current URL
var currentUrl = window.location.pathname;

// Get all navbar links
var navbarLinks = document.querySelectorAll('.navbar a');

// Loop through each link and check if it matches the current URL
navbarLinks.forEach(function(link) {
    if (link.getAttribute('href') === currentUrl) {
        // Add the "active" class to the link if it matches the current URL
        link.classList.add('active');
    }
});
