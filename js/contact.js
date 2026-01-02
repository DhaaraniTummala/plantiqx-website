// Contact form module tag selection
document.addEventListener('DOMContentLoaded', function() {
    const moduleTags = document.querySelectorAll('.module-tag');
    
    if (moduleTags.length) {
        moduleTags.forEach(tag => {
            tag.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    }
});
