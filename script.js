window.onload = function() {
    // Узети банер
    var banner = document.querySelector('.banner');
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


function closeMenu() {
  var x = document.getElementById("navbar");
  var overlay = document.getElementById("overlay");
  if (x.className === "navbar responsive") {
    x.className = "navbar";
    overlay.classList.remove("active"); // Remove the "active" class from overlay
    // Remove the "active" class from buttons
    var buttons = document.getElementsByClassName("navbar a");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
  }
}

function meni() {
  var x = document.getElementById("navbar");
  var overlay = document.getElementById("overlay");
  if (x.className === "navbar") {
    x.className += " responsive";
    overlay.classList.add("active"); // Add the "active" class to show the overlay
    // Add the "active" class to buttons
    var buttons = document.getElementsByClassName("navbar a");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.add("active");
    }
  } else {
    x.className = "navbar";
    overlay.classList.remove("active"); // Remove the "active" class from overlay
    // Remove the "active" class from buttons
    var buttons = document.getElementsByClassName("navbar a");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }
  }
}
