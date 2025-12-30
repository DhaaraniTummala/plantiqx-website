// Navigation Active State Handler
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.header-nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Set active state based on current page
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        // Remove active class first
        link.classList.remove('active');
        
        // Add active class if it matches current page
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'index.html' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // If no active link found, set Home as active
    const hasActive = Array.from(navLinks).some(link => link.classList.contains('active'));
    if (!hasActive) {
        const homeLink = Array.from(navLinks).find(link => 
            link.getAttribute('href') === 'index.html' || 
            link.textContent.trim() === 'Home'
        );
        if (homeLink) {
            homeLink.classList.add('active');
        }
    }
});

