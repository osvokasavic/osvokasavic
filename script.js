window.onload = function() {
    // Get the banner image
    var banner = document.querySelector('.banner');
    // Get the naslov element
    var naslov = document.querySelector('.naslov');
    
    // Function to calculate and set the position of the naslov element
    function setNaslovPosition() {
        // Get the width and height of the banner image
        var bannerWidth = banner.offsetWidth;
        var bannerHeight = banner.offsetHeight;
        
        // Calculate the center coordinates of the banner image relative to the viewport
        var centerX = banner.offsetLeft + bannerWidth / 2;
        var centerY = banner.offsetTop + bannerHeight / 2 + (bannerHeight / 4); // Add a quarter of the height
        
        // Set the position of the naslov element to the calculated center coordinates
        naslov.style.left = centerX + 'px';
        naslov.style.top = centerY + 'px';
    }
    
    // Call the setNaslovPosition function when the window is resized (in case the image size changes) and initially
    window.addEventListener('resize', setNaslovPosition);
    setNaslovPosition(); // Call initially
};

