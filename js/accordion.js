// FAQ Accordion Functionality
class Accordion {
    constructor(accordionElement) {
        this.accordion = accordionElement;
        this.items = this.accordion.querySelectorAll('.accordion-item');
        
        this.init();
    }
    
    init() {
        this.items.forEach((item, index) => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            
            header.addEventListener('click', () => {
                this.toggleItem(item, content);
            });
        });
    }
    
    toggleItem(item, content) {
        const isActive = item.classList.contains('active');
        
        // Close all items
        this.items.forEach(i => {
            i.classList.remove('active');
            const c = i.querySelector('.accordion-content');
            c.style.maxHeight = null;
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }
}

// Initialize accordion when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const faqAccordion = document.querySelector('.faq-accordion');
    if (faqAccordion) {
        new Accordion(faqAccordion);
    }

    // New Figma-style FAQ list accordion (index.html)
    const faqList = document.querySelector('.faq-list');
    if (faqList) {
        const items = faqList.querySelectorAll('.faq-list-item');

        // Open the first item by default
        const firstItem = items[0];
        if (firstItem) {
            firstItem.classList.add('active');
            const firstBody = firstItem.querySelector('.faq-list-body');
            if (firstBody) firstBody.style.maxHeight = firstBody.scrollHeight + 'px';
            const firstToggle = firstItem.querySelector('.faq-list-toggle i');
            if (firstToggle) {
                firstToggle.classList.remove('fa-plus');
                firstToggle.classList.add('fa-minus');
            }
        }

        items.forEach(item => {
            const header = item.querySelector('.faq-list-header');
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all items
                items.forEach(i => {
                    i.classList.remove('active');
                    const body = i.querySelector('.faq-list-body');
                    if (body) body.style.maxHeight = null;
                    const icon = i.querySelector('.faq-list-toggle i');
                    if (icon) {
                        icon.classList.remove('fa-minus');
                        icon.classList.add('fa-plus');
                    }
                });

                // Open clicked item if it was not active
                if (!isActive) {
                    item.classList.add('active');
                    const body = item.querySelector('.faq-list-body');
                    if (body) body.style.maxHeight = body.scrollHeight + 'px';
                    const icon = item.querySelector('.faq-list-toggle i');
                    if (icon) {
                        icon.classList.remove('fa-plus');
                        icon.classList.add('fa-minus');
                    }
                }
            });
        });
    }
});
