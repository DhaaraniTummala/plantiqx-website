// Product Tabs Functionality

document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.product-tab');
    const sections = document.querySelectorAll('.main-section');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            
            // Show target section
            const targetElement = document.getElementById(targetSection + '-section');
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });
});
