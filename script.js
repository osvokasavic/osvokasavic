<script>
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

        // Check for dropdown menus
        var dropdownContent = link.nextElementSibling;
        if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
            // Get all dropdown links
            var dropdownLinks = dropdownContent.querySelectorAll('a');
            // Loop through dropdown links
            dropdownLinks.forEach(function(dropdownLink) {
                // Check if dropdown link's href matches the current URL
                if (dropdownLink.href === currentUrl) {
                    // Add the "active" class to the matching dropdown link
                    dropdownLink.classList.add('active');
                    // Add the "active" class to the parent dropdown button
                    link.classList.add('active');
                }
            });
        }
    });
});
</script>

