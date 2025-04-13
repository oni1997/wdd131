document.addEventListener("DOMContentLoaded", function () {
    // Add lazy loading to all images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });

    // Navigation Active State
    const currentLocation = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if(link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });

    // Update year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
