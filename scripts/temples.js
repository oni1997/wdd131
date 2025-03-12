document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("button");
    const navMenu = document.querySelector("nav ul");
    
    menuButton.addEventListener("click", function() {
      navMenu.classList.toggle("active");
    });
    
    document.addEventListener("click", function(event) {
      if (!event.target.closest('nav') && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
    
    window.addEventListener("resize", function() {
      if (window.innerWidth > 768) {
        navMenu.classList.remove("active");
      }
    });
  });