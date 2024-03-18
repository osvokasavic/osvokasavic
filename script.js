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
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener("DOMContentLoaded", function() {
    // Function to add "active" class to the current page's link
    function setActiveLink() {
        var links = document.querySelectorAll('.navbar a');
        var currentPath = window.location.pathname;

        links.forEach(function(link) {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    // Call the setActiveLink function when the DOM content is loaded
    setActiveLink();
});

