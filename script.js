window.onload = function() {
    // Узети банер
    var banner = document.querySelector('.banner');
    // Узети наслов елемент
    var naslov = document.querySelector('.naslov');
    
    // Функција за калкулисање локацију наслова
    function setNaslovPosition() {
        // Узети висину и ширину
        var bannerWidth = banner.offsetWidth;
        var bannerHeight = banner.offsetHeight;
        
        // Калкулисати позицију
        var centerX = banner.offsetLeft + bannerWidth / 2;
        var centerY = banner.offsetTop + bannerHeight / 2 - (bannerHeight / 4);
        
        // Поставити наслов на координате
        naslov.style.left = centerX + 'px';
        naslov.style.top = centerY + 'px';
    }
    
    // Када је прозору промењена величина позваће функцију setNaslovPosition
    window.addEventListener('resize', setNaslovPosition);
    setNaslovPosition(); // Позвати
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


function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
